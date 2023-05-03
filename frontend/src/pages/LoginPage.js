import React, { useState } from 'react'
import  { Link, redirect, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap'
import Message from '../components/shared/Message'
import Loader from '../components/shared/Loader'
import FormContainer from '../components/shared/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userAction'


const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const userLogin = useSelector(state=>state.userLogin)
   const{userInfo,loading,error} = userLogin
    console.log(error,"error");
    console.log(userInfo,"userInfo");
    console.log(loading,"loading");

    //const redirect = location.search ? location.search.split('=')[1]:"/";

    const submitHandler = (e)=>{
        e.preventDefault()
        
        if(email,password){
            dispatch(login(email,password))
            //navigate("/")
        }else{

        }

    }

    return (
        <div>
            <FormContainer>
                <h2>Sign In</h2>
                {error && <Message varient="danger">{error}</Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
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
                    <Button type='submit' varient="primary" className='mt-3 mb-2'>
                        SIGN IN
                    </Button>
                </Form>
                <Row>
                    <Col>
                    New Customer ?
                    <Link to={"/register"}>Register</Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default LoginPage