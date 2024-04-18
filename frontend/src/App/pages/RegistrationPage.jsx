import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import '../css/Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';
import CircularProgress from '@mui/material/CircularProgress';

export default () => {
    let navigate = useNavigate();

    const form = useRef();

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[type, setType] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessful(false)

        dispatch(register(fullname, email, password, type))
            .then(() => {
                setSuccessful(true);
                navigate("/");
                window.location.reload();
            })
            .catch(() => {
                setSuccessful(false);
            });
    };


    if(successful) {
            return <Navigate to="/"/>;
    }

    return (
        <>
        <div className='card'>
            <h2 className='card-header'>Registration</h2><br/>
            <Form onSubmit={handleSubmit} ref={form}>

                {/* name */}
                <Form.Group controlId="formBasicName">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="Enter name" 
                        name="name"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Form.Group>

                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group> <br/>

                {/* email */}
                <Form.Group controlId="formBasicType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control  
                        placeholder="Enter Type" 
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </Form.Group>

                {/* submit button */}
                <Button 
                    style={{
                        borderColor: "#57c7cb",
                        backgroundColor: "#750606",
                        color: 'aliceblue',
                    }}  
                    variant="contained" 
                    type="submit"
                    className="Button"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}