import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../components/redux/ShoppingCart';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pswd)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      // ...
      navigate('/')
      dispatch(AddUser(name))
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }

  return (
      <div>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
              </label>
              <label>Enter your password:
        <input
          type="text" 
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
              </label>
              
              <button>Submit</button>
    </form>
    </div>
  )
}

export default Signup