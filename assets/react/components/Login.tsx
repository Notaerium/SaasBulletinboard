import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Login: FunctionComponent = () => {
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    const [error, setError] = useState<Boolean>(false)
    const [logging, setLogging] = useState<Boolean>(false)
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn()
      }, []);
    
    //If the user is already logged in but enter the login url, they will be redirected to the noticeboard
    async function isLoggedIn(){
        const response = await fetch('/api/user/check')
        response.json()
            .then((data) => {
                data == true ? navigate("/") : ''
            })
    }
    
    //We send the form datas that will be checked back-end. Show if there is an error or not.
    async function login(datas){
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(datas)
          })
        if(!response.redirected){ //If the back end couldn't log the user in
            setError(true)
            setLogging(false)
        }
        else { //if everything is okay
            setError(false)
            setLogging(false)
            location.replace("/") //We need to do a location.replace here to reload the page. 
            //Kind of defeat the purpose of a spa but else no session variable will be created for the user.
        }
    }
    
    //Check if the areas are properly filled and then send the datas to the back end to check in the db if the user exists.
    const handleSubmit = (event) => {
        event.preventDefault()
        setLogging(true)
        if(email.length === 0 || password.length === 0){
          alert("You missed something")
        }
        let fData = {
            'email' : email,
            'password' : password
        }
        login(fData)
    }

    return (
        <div className="d-flex flex-column align-item-center justify-content-center" style={{height:'100vh'}}>
            <div id="loginForm" className="text-center justify-content-center align-item-center row mt-5">
                {error && (<p className="bg-danger text-white">Can't Login, check your email address or password.</p>)}
                <div><h1 className="title text-center">Login</h1></div>
                <form method="post" className="col-md-8" action="/"  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" autoComplete="email" onChange={(e) => setEmail(e.target.value)} required autoFocus/>       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}"/>
                    <input type="submit" value="Login" className="btn btn-primary m-5"/>
                </form>
                {logging && (<p  className="text-success">... Logging in</p>)}
                <p>No account? <Link to='/signup'>Create one here!</Link></p>
                <p>Here are the ids and password for the test account : 'john.lemon@admin.com' at the password 'John123'</p>
            </div>
            <Footer/>
        </div>
        
    );
}

export default Login