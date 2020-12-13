import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

const FormikDemo = () => (
  <div>
    <h1>Anywhere in your app!</h1>

    <Formik

      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}

      validationSchema = {Yup.object({
        firstName: Yup
          .string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup
          .string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup
          .string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup
          .string()
          .label('Password')
          .required()
          .min(5, 'Seems a bit short...')
          .max(12, 'Please try a shorter password.'),
        confirmPassword: yup
          .string()
          .required()
          .label('Please confirm password')
          .test('passwords-match', 'Passwords not a match', function(value) {
            return this.parent.password === value;
          }),
        agreeToTerms: yup
          .boolean()
          .test(
            'is-true',
            'Must agree to terms to continue',
          value => value === true
        ),
      })}

      // validate= {values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >

      {({ isSubmitting }) => (
        <Form>

          <Field type="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
          <Field type="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">
            Submit
          </button>
        </Form>
      )}

    </Formik>
  </div>
);

export default FormikDemo;