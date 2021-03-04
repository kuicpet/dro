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
        <div>
            <h1>See Available Practitoners</h1>
        </div>
    )
}
