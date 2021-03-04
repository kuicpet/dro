import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from "axios";

export default function UserSignIn() {
    const history = useHistory();
    return (
        <div className="register">
            <div className="register_contents"></div>
            <div className="register_form my-3">
                <h1>Sign In</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={values => {
                        console.log(values);
                        const headers = {
                            "X-CSRFToken":"X-CSRFToken"
                        }
                        axios.post("https://dev.drohealth.com/patients/api/login/",values, headers)
                            .then((res) => {
                                console.log(res)
                                if(res.status === 200){
                                    history.push("/dashboard")
                                }
                            }).catch((error) => {
                                console.log(error)
                            })
                    }}
                >
                    <Form className="form">
                        <div>
                            <div className="label">
                                <label htmlFor="username">Username</label>
                            </div>
                            <Field type="text" name="username" placeholder="Username"  />
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="password">Password</label>
                            </div>
                            <Field type="password" name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn">Login</button>
                    </Form>
                    
                </Formik>
                <p className="my-3">
                        Don't have an Account?
                        <Link to="/signup" className="mx-3">Register</Link>
                </p>
            </div>
        </div>
    )
}
