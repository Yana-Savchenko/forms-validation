import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, FormHelperText, FormControl, Button } from '@material-ui/core';

import './MaterialForm.scss'

export default function MaterialForm() {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Sign Up</h2>
      <FormControl className="form-control">
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          label="Email"
          as={TextField}
        />
        <FormHelperText className="error-message">Incorrect entry.</FormHelperText>
      </FormControl>
      <FormControl className="form-control">
        <Controller
          name="Password"
          type="password"
          control={control}
          defaultValue=""
          label="Password"
          as={TextField}
        />
        <FormHelperText className="error-message">Enter a password longer than 8 characters</FormHelperText>
      </FormControl>
      <FormControl className="form-control">
        <Controller
          name="confirmPassword"
          type="password"
          control={control}
          defaultValue=""
          label="Confirm Password"
          as={TextField}
        />
        <FormHelperText className="error-message">Your passwords do not match</FormHelperText>
      </FormControl>
      <FormControl className="form-control">
        <Button type="submit">Submit</Button>
        <FormHelperText className="error-message">Your passwords do not match</FormHelperText>
      </FormControl>
    </form>
  )
}