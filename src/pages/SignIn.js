import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const {
        register, 
        handleSubmit, 
        errors, 
        formState : { isDirty, isSubmitting } 
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = async(data, e) => {
        e.preventDefault();
        console.log("Form Submitted", data);
        // make api call here
    }
    return (
        <div className="login">
            <div className="login_contents">
               
            </div>
            <div className="login_form my-3">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div>
                        <div className="label">
                            <label htmlFor="username">Username</label>
                        </div>
                        <input
                            type="text"
                            name="username"
                            className="username"
                            placeholder="Username"
                            ref={register({
                                required: "Please enter your username",
                                maxLength: {
                                    value: 20,
                                    message: "Username should be maximum length of 20 characters"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username should be a minnmum length of 3 characters"
                                }
                            })}
                            style={{ borderColor: errors.username && "red" }} 
                        />
                        { errors.username && <p className="errors" >{errors.username.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="password1">Password</label>
                        </div>
                        <input
                            type="password"
                            name="password"
                            className="password"
                            placeholder="Password (min 8)"
                            ref={register({
                                required: "Please enter your password",
                                minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                                }
                            })}
                            style={{ borderColor: errors.password && "red" }}
                        />
                        { errors.password && <p className="errors" >{errors.password.message}</p> }
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        disabled={ !isDirty || isSubmitting }>
                        Login
                    </button>
                    <p className="my-3">
                        Don't have an Account?
                        <Link to="/signup" className="mx-3">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
