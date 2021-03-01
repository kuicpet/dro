import React from 'react';
import { Col, Tab, Row, ListGroup } from "react-bootstrap";

export default function UserDashboard() {
    return (
        <Tab.Container defaultActiveKey="#Link1">
            <Row>
                <Col sm={4}>
                    <ListGroup fixed="top">
                        <ListGroup.Item action href="#Link1">
                            Home
                        </ListGroup.Item>
                        <ListGroup.Item action href="#Link2">
                            Appointments
                        </ListGroup.Item>
                        <ListGroup.Item action href="#Link3">
                            Practitioners
                        </ListGroup.Item>
                        <ListGroup.Item action href="#Link4">
                            Profile
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#Link1">
                            <div className="item1"></div>
                            <p>Services</p>
                            <div className="item2">
                                <div className="now">
                                    <p>See a Practitioner Now</p>
                                </div>
                                <div className="medication">
                                    <p>Order Medication</p>
                                </div>
                                <div className="test">
                                    <p>Book a Diagnostic Test</p>
                                </div>
                                <div className="covid">
                                    <p>Covid-19 Symptom Diary</p>
                                </div>
                                <div className="book">
                                    <p>Book an Appointment</p>
                                </div>
                            </div>
                            <p>Essentails</p>
                            <div className="item3">
                                <div>
                                    <p>Fund Wallet (Current Balance - N0.0)</p>
                                </div>
                                <div>
                                    <p>My Health</p>
                                </div>
                                <div>
                                    <p>Post Appointment Messages</p>
                                </div>
                            </div>
                            <p>Specialised Services</p>
                            <div className="item4">
                                <div>
                                    <p>Mental Health</p>
                                </div>
                                <div>
                                    <p>Women's Health</p>
                                </div>
                                <div>
                                    <p>Men's Health</p>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link2">
                            <div className="item5">
                                <div>
                                    <p>Notes</p>
                                </div>
                                <div>
                                    <p>Messages</p>
                                </div>
                                <div>
                                    <p>Appointments</p>
                                    <small>- Upcoming & Previous appointments</small>
                                </div>
                            </div>
                            <div className="item6">
                                <div className="cases">
                                    <p>Cases</p>
                                    <small>Open and closed Cases</small>
                                </div>
                                <div className="cases_others">
                                    <div>
                                        <p>Presciptions</p>
                                    </div>
                                    <div>
                                        <p>Diagnotics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item7">
                                <div>
                                    <h2>Orders</h2>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link3">
                            <div className="practitioners_view">
                                <div className="view_all">
                                    <p>View all Practitioners</p>
                                </div>
                                <div className="view_single">
                                    <div>
                                        <p>General Practitioner</p>
                                    </div>
                                    <div>
                                        <p>Diet Specialist</p>
                                    </div>
                                    <div>
                                        <p>Eye Specialist</p>
                                    </div>
                                    <div>
                                        <p>Brain & Spine Specialist</p>
                                    </div>
                                    <div>
                                        <p>Family Medicine</p>
                                    </div>
                                    <div>
                                        <p>Diabetis Medicine</p>
                                    </div>
                                    <div>
                                        <p>Pain Management</p>
                                    </div>
                                    <div>
                                        <p>Obstetrics & Gynaecology</p>
                                    </div>
                                    <div>
                                        <p>Sports Medicine</p>
                                    </div>
                                    <div>
                                        <p>Peadiatrics</p>
                                    </div>
                                </div>
                            </div>
                            <p className="my-3">Services</p>
                            <div className="practitioners_services">
                                <p>Immediate Consultations</p>
                                <small>See a practitioner within 20minutes</small>
                            </div>
                            <div className="practitioners_consultations">
                                <p>Consultations at a later time</p>
                                <small>Book an appointment for a day/time of your choice</small>
                            </div>
                            <p>Preferred Practitioners</p>
                            <div className="practitioners_preferred"></div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link4">
                            <div className="profile_details">
                                <div className="profile_img"></div>
                                <div className="profile_contents"></div>
                            </div>
                            <div className="profile_others">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
