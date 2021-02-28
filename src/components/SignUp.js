import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function SignUp() {
    const {
        register, 
        handleSubmit, 
        errors, 
        getValues, 
        formState : { isDirty, isSubmitting } 
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = async(data, e) => {
        e.preventDefault();
        console.log("Form Submitted", data);
        // Make api call here
    }

    return (
        <div className="register">
            <div className="register_contents">
                <h1>The Complete <br/>Healthcare Solution</h1>
            </div>
            <div className="register_form">
                <h1>Sign Up</h1>
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
                         { errors.firstName && <p className="errors" >{errors.username.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <input 
                            type="text"
                            name="firstName"
                            className="firstName"
                            placeholder="First name"
                            ref={register({
                                required: "Please enter your first name",
                            maxLength: {
                                value: 50,
                                message: "First Name should be maximum length of 50 characters"
                            },
                            minLength: {
                                value: 3,
                                message: "First name should be minimum length of 3 characters"
                            },
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "First Name should contain only uppercase or lower case letters"
                            },
                            })}
                            style={{ borderColor: errors.firstName && "red" }} 
                        />
                        { errors.firstName && <p className="errors" >{errors.firstName.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <input 
                            type="text"
                            name="lastName"
                            className="lastName"
                            placeholder="Last name"
                            ref={register({
                                required: "Please enter your last name",
                            maxLength: {
                                value: 50,
                                message: "Last Name should be maximum length of 50 characters"
                            },
                            minLength: {
                                value: 3,
                                message: "Last Name should be minimum length of 3 characters"
                            },
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Last Name should contain only uppercase or lower case letters"
                            },
                            })}
                            style={{ borderColor: errors.lastName && "red" }} 
                        />
                        { errors.lastName && <p className="errors" >{errors.lastName.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="dob">Date of Birth</label>
                        </div>
                        <input
                            type="date"
                            name="dob"
                            className="dob"
                            ref={register({
                                required: "Please enter your Date of Birth"
                            })}
                            style={{ borderColor: errors.dob && "red" }}
                        />
                        { errors.dob && <p className="errors" >{errors.dob.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="gender">Select Gender</label>
                        </div>
                        <select name="gender" ref={register({
                            required: "Please select a Gender"
                        })}
                        style={{ borderColor: errors.gender && "red" }}
                        >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        { errors.gender && <p className="errors" >{errors.gender.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="city">City</label>
                        </div>
                        <input 
                            type="text"
                            name="city"
                            className="city"
                            placeholder="City"
                            ref={register({
                                required: "Please enter the name of your city",
                                maxLength: {
                                    value: 50,
                                    message: "City Name should be maximum length of 50 characters"
                                },
                                minLength: {
                                    value: 3,
                                    message: "City Name should be minimum length of 3 characters"
                                },
                            })}
                            style={{ borderColor: errors.city && "red" }}
                        />
                        { errors.city && <p className="errors" >{errors.city.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="state">Select State</label>
                        </div>
                        <select 
                            name="state"
                            className="state"
                            ref={register({
                            required: "Please select a State"
                        })}>
                            <option value="Abuja">Abuja</option>
                            <option value="Benue">Benue</option>
                        </select>
                    </div>
                    <div>
                        <div className="label">
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <input 
                            type="number"
                            name="phone"
                            className="phone"
                            placeholder="Phone No"
                            ref={register({
                                required: "Please enter your pnone number",
                                minLength: {
                                    value: 11,
                                    message: "Please enter a valid mobile phone number"
                                },
                                maxLength: {
                                    value: 11,
                                    message: "Please enter a valid mobile phone number"
                                },
                                size: {
                                    value: 11,
                                    message: "please enter a valid mobile phone number"
                                },
                                pattern: {
                                    value: "[0]{10)$",
                                    message: "Please enter a valid mobile phone number"
                                }
                            })}
                            style={{ borderColor: errors.phone && "red" }}
                        />
                        { errors.phone && <p className="errors" >{errors.phone.message}</p> }
                    </div>
                    <div>
                       <div className="label">
                            <label htmlFor="email">Email</label>
                       </div>
                       <input
                         type="email"
                         name="email"
                         className="email"
                         placeholder="Email"
                         ref={register({
                           required: "Please enter your email address",
                           pattern: {
                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                             message: "Enter a valid e-mail address",
                           },
                          })}
                         style={{ borderColor: errors.email && "red" }}
                         />
                       { errors.email && <p className="errors" >{errors.email.message}</p> } 
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
                           required: "Password field is required",
                           minLength: {
                             value: 8,
                             message: "Password must have at least 8 characters"
                           }
                         })}
                         style={{ borderColor: errors.password1 && "red" }}
                         />
                       { errors.password && <p className="errors" >{errors.password.message}</p> }
                    </div>
                    <div>
                       <div className="label">
                            <label htmlFor="password2">Confirm Password</label>
                       </div>
                       <input
                         type="password"
                         name="confirm_password"
                         className="Confirm_password"
                         placeholder="Confirm Password"
                         ref={register({
                           required: "Please confirm your password",
                           validate: (value) => value === getValues().password || "Passwords donot match",
                          })}
                         style={{ borderColor: errors.confirm_password && "red" }}
                         />
                       { errors.confirm_password && <p className="errors" >{errors.confirm_password.message}</p> }
                    </div>
                    <div>
                        <div className="label">
                        <label htmlFor="checkBox">
                        <input 
                            type="checkbox"
                            name="checkBox"
                            className="checkBox"
                            ref={register({
                                required: "Please agree to terms of use"
                            })} 
                        />
                        By signing up, you agree to our Terms and Privacy Policy.
                        </label>
                        </div>
                        
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        disabled={ !isDirty || isSubmitting }>
                        Register
                    </button>
                   <p className="my-3">
                        Already have an Account?
                        <Link to="/signin" className="mx-3">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
