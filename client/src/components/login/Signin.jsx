import React, { useState } from 'react'
import {Button, Form} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../../redux/actions/userActions'
import './login.css'
const Signin = () => {
    const {loading}=useSelector(state=>state.userReducer)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = {
            email,
            password
        }
        dispatch(login(user))
    }
  return (
    <div>
        {
            loading? <h3>loading...</h3>:
            localStorage.getItem("token") ? 
            <Navigate to="/profile" />
            :
            
        <Form  onSubmit={handleSubmit} >
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
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/signup">don't have an account?</Link>
        </div>
    </Form>
    
        }
    </div>
  )
}

export default Signin