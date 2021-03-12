import React, { useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from "axios";

import { states } from "../components/stateData";
import { ref_methods } from "../components/refData";
import { gender } from "../components/genderData";


export default function UserSignUp() {
    
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            return history.push("/signin")
        }
    })

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
                        axios.post("https://dev.drohealth.com/patients/api/create/",values)
                            .then((res) => {
                                console.log(res);
                                const data = res.data;
                                console.log(data);
                                if(res.status === 201){
                                   localStorage.setItem("token","X-CSRFToken")
                                   localStorage.setItem("data", JSON.stringify(data))
                                    return history.push("/signin")
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }}
                >
                    <Form className="form">
                        <div>
                            <div className="label">
                                <label htmlFor="user.username">Username</label>
                            </div>
                            <Field  
                                type="text" 
                                name="user.username" 
                                placeholder="Username"
                                minLength="4"
                                maxLength="10" 
                                required/>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="user.first_name">First Name</label>
                                <Field  
                                    type="text" 
                                    name="user.first_name" 
                                    placeholder="First Name"
                                    minLength="2"
                                    maxLength="20"
                                    required/>
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="user.last_name">Last Name</label>
                                <Field  
                                    type="text" 
                                    name="user.last_name"
                                    placeholder="Last Name"
                                    minLength="2"
                                    maxLength="20"
                                    required/>
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="user.email">Email Address</label>
                                <Field  type="email" name="user.email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="password">Password( min 8 Characters )</label>
                                <Field  
                                    type="password" 
                                    name="user.password" 
                                    placeholder="Password"
                                    minLength="8"
                                    maxLength="20"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="confirm_password">Confirm Password</label>
                            </div>
                            <Field  type="password" name="confirm_password" placeholder="Confirm Password" required/>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="phone">Phone No</label>
                            </div>
                            <Field  
                                type="tel" 
                                name="phone" 
                                placeholder="Phone No"
                                required
                                size="11"
                                />
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="birth_date">Birth Date</label>
                                <Field  type="date" name="birth_date" placeholder="" required/>
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htnlFor="gender">Gender</label>
                            </div>
                            <Field name="gender" as="select">
                                {gender.map(({label, value}) => (
                                    <option
                                        key={value}
                                        value={label}
                                    >
                                        {label}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="city">City</label>
                                <Field  name="city" placeholder="City" required/>
                            </div>
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="state">State</label>
                            </div>
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
                        </div>
                        <div>
                            <div className="label">
                                <label htmlFor="ref_methods">How did You Hear About us</label>
                            </div>
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
                        </div>
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



