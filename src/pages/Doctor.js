import React, { useEffect } from 'react';
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

import doctorImg from "../images/doctor.svg";

export default function Doctor() {

    const getDoctors = async() => {
        const token = localStorage.getItem("token")
        try {
            await axios.get("https://dev.drohealth.com/doctor/api/availability-times/", token)
                        .then((res) => {
                            console.log(res.data)
                        })
        } catch (error) {
            console.log(error)
        }
    }
useEffect(() => {
    getDoctors();
},[])

    return (
        <div className="doctors px-3">
            <p className="mt-5 mb-3">See Available Practitoners</p>
            <div className="time-slot">
                <div>
                    <p>8:00am</p>
                </div>
                <div>
                    <p>9:00am</p>
                </div>
                <div>
                    <p>10:00am</p>
                </div>
                <div>
                    <p>11:00am</p>
                </div>
                <div>
                    <p>12:00 noon</p>
                </div>
            </div>
            <div className="doctors_list">
                <ul>
                    <li>
                        <div className="doctor">
                            <div className="doctor_container">
                                <div className="doctor_img">
                                    <img src={doctorImg} alt="" />
                                </div>
                                <div className="doctor_details p-2">
                                    <b>Dr Ngozi Chika</b>
                                    <p>General Practitoner</p>
                                    <p>
                                        <span>English,</span>
                                        <span>Igbo</span>
                                    </p>
                                </div>
                                <div className="doctor_like">
                                    <FaRegHeart/>
                                </div>
                            </div>
                            <div className="doctor_booking">
                                <span className="amount">N3000</span>
                                <span className="book_doctor">Book</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="doctor">
                            <div className="doctor_container">
                                <div className="doctor_img">
                                    <img src={doctorImg} alt="" />
                                </div>
                                <div className="doctor_details p-2">
                                    <b>Dr Ngozi Chika</b>
                                    <p>General Practitoner</p>
                                    <p>
                                        <span>English,</span>
                                        <span>Igbo</span>
                                    </p>
                                </div>
                                <div className="doctor_like">
                                    <FaRegHeart/>
                                </div>
                            </div>
                            <div className="doctor_booking">
                                <span className="amount">N3000</span>
                                <span className="book_doctor">Book</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="doctor">
                            <div className="doctor_container">
                                <div className="doctor_img">
                                    <img src={doctorImg} alt="" />
                                </div>
                                <div className="doctor_details p-2">
                                    <b>Dr Ngozi Chika</b>
                                    <p>General Practitoner</p>
                                    <p>
                                        <span>English,</span>
                                        <span>Igbo</span>
                                    </p>
                                </div>
                                <div className="doctor_like">
                                    <FaRegHeart/>
                                </div>
                            </div>
                            <div className="doctor_booking">
                                <span className="amount">N3000</span>
                                <span className="book_doctor">Book</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
