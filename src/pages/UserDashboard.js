import React from 'react';
import { Col, Tab, Row, ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import men from "../images/male-icon.png"; 
import women from "../images/female-icon.png";
import medicineBox from "../images/medicine-box-2-icon.png";
import brain from "../images/human-brain-icon.png";
import wallet from "../images/Wallet-icon.png";
import messages from "../images/sms-icon.png";
import notes from "../images/notes-icon.png";
import appointment from "../images/checklist-icon.png";
import conversation from "../images/conversation-icon.png";
import caseNote from "../images/cv-icon.png";
import prescription from "../images/capsule-icon.png";
import diagnostics from "../images/thermameter-icon.png";
import basket from "../images/shopping-icon.png";
import family from "../images/family-icon.png";
import user from "../images/user.svg";
import calender from "../images/calendar-icon.png";
import clock from "../images/clock-icon.png";
import cart from "../images/medicine-cart-icon.png";
import covid from "../images/coronavirus.svg";


export default function UserDashboard() {

    const history = useHistory();
    const seeDoctor = () => {
       return  history.push("/doctor")
    }
    return (
        <Tab.Container defaultActiveKey="#Link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
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
                            <p className="pg">Services</p>
                            <div className="item2">
                                <div className="now" onClick={() => seeDoctor()}>
                                    <img src={clock} alt="" />
                                    <p>See a Practitioner Now</p>
                                </div>
                                <div className="medication">
                                    <img src={cart} alt="" />
                                    <p>Order Medication</p>
                                </div>
                                <div className="test">
                                    <img src={diagnostics} alt="" />
                                    <p>Book a Diagnostic Test</p>
                                </div>
                                <div className="covid">
                                    <img src={covid} alt="" />
                                    <p>Covid-19 Symptom Diary</p>
                                </div>
                                <div className="book">
                                    <img src={appointment} alt="" />
                                    <p>Book an Appointment</p>
                                </div>
                            </div>
                            <p className="pg">Essentails</p>
                            <div className="item3">
                                <div className="my_wallet">
                                    <img src={wallet} alt="" />
                                    <p>Fund Wallet (Current Balance - N0.0)</p>
                                </div>
                                <div className="my_health">
                                    <img src={medicineBox} alt=""/>
                                    <p>My Health</p>
                                </div>
                                <div className="my_messages">
                                    <img src={messages} alt="" />
                                    <p>Post Appointment Messages</p>
                                </div>
                            </div>
                            <p className="pg">Specialised Services</p>
                            <div className="item4">
                                <div className="brain">
                                    <img src={brain} alt="" />
                                    <p>Mental Health</p>
                                </div>
                                <div className="women">
                                    <img src={women} alt="" />
                                    <p>Women's Health</p>
                                </div>
                                <div className="men">
                                    <img src={men} alt="" />
                                    <p>Men's Health</p>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link2">
                            <div className="item5">
                                <div className="my_notes">
                                    <img src={notes} alt="" />
                                    <p>Notes</p>
                                </div>
                                <div className="conversation">
                                    <img src={conversation} alt=""/>
                                    <p>Messages</p>
                                </div>
                                <div className="my_appointments">
                                    <img src={appointment} alt="" />
                                    <p>Appointments</p>
                                    <small>- Upcoming & Previous appointments</small>
                                </div>
                            </div>
                            <div className="item6">
                                <div className="cases">
                                    <img src={caseNote} alt="" />
                                    <div>
                                        <p>Cases</p>
                                        <small>Open and closed Cases</small>
                                    </div>
                                </div>
                                <div className="cases_others">
                                    <div className="prescriptions">
                                        <img src={prescription} alt="" />
                                        <div>
                                            <p>Presciptions</p>
                                        </div>
                                    </div>
                                    <div className="diagnostics">
                                        <img src={diagnostics} alt="" />
                                        <div>
                                            <p>Diagnostics</p>
                                        </div>
                                                                            </div>
                                </div>
                            </div>
                            <div className="item7">
                                <img src={basket} alt="" />
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
                            <p className="my-3 pg">Services</p>
                            <div className="practitioners_services">
                                <img src={clock} alt="" />
                                <div>
                                    <p>Immediate Consultations</p>
                                    <small>See a practitioner within 20minutes</small>
                                </div>
                            </div>
                            <div className="practitioners_consultations">
                                <img src={calender} alt="" />
                                <div>
                                    <p>Consultations at a later time</p>
                                    <small>Book an appointment for a day/time of your choice</small>
                                </div>
                            </div>
                            <p className="pg">Preferred Practitioners</p>
                            <div className="practitioners_preferred">
                                <p>
                                    No preferred practitioners yet!<br/>
                                    To add preferred practitioners,serach for practitioners and tap the heart.
                                </p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link4">
                            <div className="profile_details">
                                <div className="profile_img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="profile_contents">
                                    <div>
                                        <p>Kingsley Umujeyan</p>
                                        <p>Lagos,Nigeria</p>
                                    </div>
                                    <div>
                                        <p className="upper">Weight</p>
                                        <p>0.0kg</p>
                                    </div>
                                    <div>
                                        <p className="upper">Blood Type</p>
                                        <p>-</p>
                                    </div>
                                    <div>
                                        <p className="upper">Height</p>
                                        <p>0.00m</p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile_others">
                                <div className="profile_family">
                                    <img src={family} alt=""/>
                                    <p>My Family</p>
                                </div>
                                <div className="profile_wallet">
                                    <img src={wallet} alt="" />
                                    <p>My Wallet</p>
                                </div>
                                <div className="profile_health">
                                    <img src={medicineBox} alt="" />
                                    <p>My Health</p>
                                </div>
                                <div className="profile_orders">
                                    <img src={basket} alt="" />
                                    <p>My Orders</p>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
