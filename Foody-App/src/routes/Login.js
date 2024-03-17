import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../components/redux/ShoppingCart';
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pswd)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(name)
      dispatch(AddUser(name));
      navigate('/');
    // ...
  }).catch((error) => {
                console.log("err")
    const errorCode = error.code;
    const errorMessage = error.message;
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

export default Login