import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap'
import Message from '../components/shared/Message'
import Loader from '../components/shared/Loader'
import FormContainer from '../components/shared/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/actions/userAction'


const ProfilePage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const { user, loading, error } = userDetails;
    const {userInfo} = userLogin

// useEffect(()=>{
//     if
// })
    //const redirect = location.search ? location.search.split('=')[1]:"/";

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Password do not match")
        } else {
            dispatch(getUserDetails(name, email, password))
        }
    };

    return (
        <div>
            <FormContainer>
                <h1>Register</h1>
                {error && <Message varient="danger">{error}</Message>}
                {loading && <Loader />}
                {message && <Message variant="danger">{message}</Message>}

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='text'>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)
                        }>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)
                        }>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='Password'>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)
                        }>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirm password'>
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                        <Form.Control type="Password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)
                        }>
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' varient="primary" className='mt-3 mb-2'>
                        SIGN IN
                    </Button>
                </Form>
                <Row>
                    <Col>
                        Have an account! <span>
                            <Link to={"/login"} style={{ paddingLeft: 3, textDecoration: 'none' }}>Login</Link>
                        </span>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default ProfilePage