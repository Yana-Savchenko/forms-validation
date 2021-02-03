import React, { useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, FormHelperText, FormControl, Button } from '@material-ui/core';

import './MaterialForm.scss'

export default function MaterialForm() {
  const { register, handleSubmit, watch, errors, control, formState } = useForm({ mode: "onChange" });
  const password = useRef({});
  password.current = watch("password");
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Sign Up</h2>
      <FormControl className="form-control">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          label="Email"
          rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }}
          as={TextField}
        />
        {
          errors.email &&
          <FormHelperText className="error-message">Please enter a valid email.</FormHelperText>
        }
      </FormControl>
      <FormControl className="form-control">
        <Controller
          name="password"
          type="password"
          control={control}
          defaultValue=""
          label="Password"
          rules={{ required: true, minLength: 8 }}
          as={TextField}
        />
        {
          errors.password &&
          <FormHelperText className="error-message">Enter a password longer than 8 characters</FormHelperText>
        }
      </FormControl>
      <FormControl className="form-control">
        <Controller
          name="confirmPassword"
          type="password"
          control={control}
          defaultValue=""
          label="Confirm Password"
          rules={{ required: true, validate: value => value === password.current }}
          as={TextField}
        />
        {
          errors.confirmPassword &&
          <FormHelperText className="error-message">Your passwords do not match</FormHelperText>
        }
      </FormControl>
      <FormControl className="form-control">
        <Button type="submit" variant="contained" color="primary" disabled={!formState.isValid}>Create My Account</Button>
      </FormControl>
    </form>
  )
}