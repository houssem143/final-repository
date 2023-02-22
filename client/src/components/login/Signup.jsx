
import {Button, Form} from "react-bootstrap"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../redux/actions/userActions"
import { Link, Navigate } from "react-router-dom"
import './login.css'

const Signup = () => {
    const {loading,user}=useSelector(state=>state.userReducer)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

const dispatch = useDispatch()

const handleSubmit = (e)=>{
    e.preventDefault();
    const newUser = {
        name,
        email,
        phone,
        password
    }
    dispatch(register(newUser))
}

  return (
    <div>
        {
         loading? <h3>loading...</h3>:
        user ? 
        <Navigate to="/signin" />:
         
        <Form  onSubmit={handleSubmit}   >
          <div className="login" >

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="full name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
      <Link to="/signin">already have account?</Link>
          </div>
    </Form>
        }
    </div>
  )
}

export default Signup