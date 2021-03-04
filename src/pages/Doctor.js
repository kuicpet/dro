import React, { useEffect } from 'react';
import axios from "axios";

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
})

    return (
        <div className="doctors">
            <p>See Available Practitoners</p>
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
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
