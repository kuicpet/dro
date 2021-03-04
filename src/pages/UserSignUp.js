import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function UserSignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    user: {
                        username: '',
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                    },
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                <Form>
                    <Field  name="user.username"/>
                    <Field  name="user.first_name"/>
                    <Field  name="user.last_name"/>
                    <Field  name="user.email"/>
                    <Field  name="user.password"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
