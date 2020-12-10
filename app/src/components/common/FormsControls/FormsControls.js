import React from "react";
import classes from "./FormsControls.module.css";
import { Field } from 'redux-form';

const FormControl = ({ input, meta: {touched, error}, children, ...props }) => {
  const hasError = touched && error;

  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />{" "}
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validate, component, props ={}, text="") => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validate}
      component={component}
      {...props}
    />{text}
  </div>
);
