import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

import './RegularForm.scss'

export default function RegularForm() {
  const { register, handleSubmit, watch, errors, formState } = useForm({ mode: "onChange" });
  const password = useRef({});
  password.current = watch("password");
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="native-form">
      <h2>Sign Up</h2>
      <p>
        <label htmlFor="Email" className="floatLabel">Email</label>
        <input id="email" name="email" type="text" ref={register({ pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true })} />
        {errors.email?.type === "required" && <span>Email is required</span>}
        {errors.email?.type === "pattern" && <span>Enter a valid email</span>}
      </p>
      <p>
        <label htmlFor="password" className="floatLabel">Password</label>
        <input id="password" name="password" type="password" ref={register({ required: true, minLength: 8 })} />
        {errors.password && <span>Enter a password longer than 8 characters</span>}
      </p>
      <p>
        <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
        <input id="confirm_password" name="confirm_password" type="password" ref={register({ validate: value => value === password.current })} />
        {errors.confirm_password && <span>Your passwords do not match</span>}
      </p>
      <p>
        <input type="submit" value="Create My Account" id="submit" disabled={!formState.isValid} />
      </p>
    </form>
  )
}