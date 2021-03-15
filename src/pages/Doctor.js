import React, { useEffect, useState } from 'react';
import { Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FaRegHeart, FaRegClock, FaRegCalendarAlt, FaRegFolderOpen, FaRegCreditCard, FaRegQuestionCircle } from "react-icons/fa";

import Spinner from "../components/Spinner";
import doctorImg from "../images/doctor.svg";

export default function Doctor() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    const getDoctors = async() => {
        const Token = localStorage.getItem("token");
        const headers = {
            "WWW-Authenticate": Token,
        };
        setLoading(true)
       await axios.get("https://dev.drohealth.com/doctor/api/availability-times/", headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setLoading(false);
        }

        useEffect(() => {
            getDoctors();
        },[])

    return (
        <div className="doctors px-3">
            <p className="mt-5 mb-3">
                <b>See Available Practitoners</b>
            </p>
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
            {loading ? <Spinner /> : (
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
                                <span className="book_doctor" onClick={handleShow}>Book</span>
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
                                <span className="book_doctor" onClick={handleShow}>Book</span>
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
                                <span className="book_doctor" onClick={handleShow}>Book</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            )}
            
            <div className="book_later my-4">
                <p>Want to book at a later time?</p>
                <button className="px-4 py-2">Book an appointment</button>
            </div>
            <Modal
                show={show} 
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_img">
                        <img src={doctorImg} alt="" />
                    </div>
                    <div className="modal_details">
                        <b>Dr Ngozi Chika</b>
                        <p>General Practitoner</p>
                    </div>
                    <ul className="modal_list">
                        <li className="list_item">
                            <span>
                                <FaRegCalendarAlt />
                                Date
                            </span>
                            <span className="list_item2">
                                <b>10-03-2021</b>
                            </span>
                        </li>
                        <li className="list_item">
                            <span>
                                <FaRegClock />
                                Time
                            </span>
                            <span className="list_item2">
                                <b>21:15pm</b>
                            </span>
                        </li>
                        <li className="list_item">
                            <span>
                            <FaRegCreditCard/>
                                Fee
                            </span>
                            <span className="list_item2">
                                <b>N3000</b>
                            </span>
                        </li>
                        <li className="list_item">
                            <span>
                            <FaRegFolderOpen/>
                                Case
                            </span>
                            <span className="list_item2">Select case</span>
                        </li>
                        <li className="list_item">
                            <span>
                                <FaRegQuestionCircle/>
                                Reason
                            </span>
                            <span></span>
                        </li>
                    </ul>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={12}>
                                Promo Code
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Enter Promo code here" required/>
                            </Col>
                            <Col sm={3}>
                                <button className="px-4 applyBtn">Apply</button>
                            </Col>
                        </Form.Group>
                        <button className="bookingBtn">Confirm Booking</button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
