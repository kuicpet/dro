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
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>Essentails</p>
                            <div className="item3">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>Specialised Services</p>
                            <div className="item4">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link2">
                            <div className="item5">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="item6">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="item7">
                                <div></div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link3">
                            Practitioners Details
                        </Tab.Pane>
                        <Tab.Pane eventKey="#Link4">
                            Profile Details
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
