import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from "axios";

import { states } from "../components/stateData";
import { ref_methods } from "../components/refData";

export default function UserSignUp() {
    
    return (
        <div className="register">
            <div className="register_contents"></div>
            <div className="register_form my-3">
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
                        phone: "",
                        birth_date: "",
                        gender: "",
                        city: "",
                        state: "",
                        ref_methods: "",
                    }}
                    onSubmit={values => {
                        console.log(values);
                        axios.post("",values)
                            .then((res) => {
                                console.log(res);
                                if(res.status === 201){
                                    localStorage.setItem("token", "X-CSRFToken");
                                    
                                }
                            }).catch((error) => {
                                console.log(error)
                            })
                    }}
                >
                    <Form className="form">
                        <Field  type="text" name="username" placeholder="Username" />
                        <Field  type="text" name="first_name" placeholder="First Name" />
                        <Field  type="text" name="last_name" placeholder="Last Name" />
                        <Field  type="email" name="email" placeholder="Email" />
                        <Field  type="password" name="password" placeholder="Password" />
                        <Field  type="password" name="confirm_password" placeholder="Confirm Password" />
                        <Field  type="tel" name="phone" placeholder="Phone No" />
                        <Field  type="date" name="birth_date" placeholder="" />
                        <Field name="gender" as="select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <Field  name="city" placeholder="City" />
                        <Field name="state" as="select">
                            {states.map(({label, value}) => (
                                <option
                                    key={value}
                                    value={label}
                                >
                                    {label}
                                </option>
                            ))}
                        </Field>
                        <Field name="ref_methods" as="select">
                                {ref_methods.map(({id,name}) => (
                                    <option
                                        key={id}
                                        value={id}
                                    >
                                        {name}
                                    </option>
                                ))}
                        </Field>
                        <button type="submit" className="btn">Register</button>
                    </Form>
                </Formik>
                <p className="my-3">
                    Already have an Account?
                    <Link to="/signin" className="mx-3">Login</Link>
                </p>
            </div>
        </div>
    )
}
