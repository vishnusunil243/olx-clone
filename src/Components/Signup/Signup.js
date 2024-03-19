import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import axios from 'axios';

export default function Signup() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
        username,
        email,
        password,
        phone 
    };

    try {
        const response = await axios.post('http://localhost:8080/signup',userData)
        console.log('User created successfully:', response.data);
    } catch (error) {
        console.error('Error creating user:', error);
    }
};
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
       
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
           
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
         
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}