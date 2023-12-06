import React, { FunctionComponent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Signup: FunctionComponent = () => {
  const [firstname, setFirstName] = useState<String>('');
  const [lastname, setLastName] = useState<String>('');
  const [department, setDepartment] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [departments, setDepartments] = useState([]);
  const [role, setRole] = useState<Array<String>>(['']);
  const [error, setError] = useState<Boolean>()
  const [logging, setLogging] = useState<Boolean>()
  const navigate = useNavigate();
  
  useEffect(() => {
    getDepartment()
    isLoggedIn()
    setRole(["ROLE_USER"])
  }, []);


  //If already logged in, redirect to the board
  async function isLoggedIn(){
    const response = await fetch('/api/user/check')
    response.json()
        .then((data) => {
            data == true ? navigate("/") : ''
        })
  }

  //Get an array of departments so that the user can select in which department they are working.
  function getDepartment(){
    fetch('/api/user/departments')
      .then(response => {
        if(response.ok) return response.json()
      })
      .then((data) => {
        setDepartments(data)
      })
  }

  //Create the user from the form's datas in the database. Show if there has been issues. If succeed log the user and redirect them
  //to the noticeboard.
  async function createUser(user){
    const response = await fetch("/api/user/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    if(!response.redirected){
      setError(true)
      setLogging(false)
    }
    else {
        setError(false)
        setLogging(true)
        location.replace("/") //We need to do a location.replace here to reload the page. 
        //Kind of defeat the purpose of a spa but else no session variable will be created for the user.
    }
  }

  //The user can chose if they are department admins or not. For demonstration purpose.
  //It would be better to create a user management page where an admin can set other people to admin, department admin or users.
  //But this program is not meant to be used as it is in a company. This way, people can test the program more easily.
  function handleCheckbox(event){
    if(event.target.checked){
      setRole(["ROLE_DEPARTMENT_ADMIN"])
    } else {
      setRole(["ROLE_USER"])
    }
  }

  //Get datas from the form checking if every area have been filled (and removing potential unwanted blankspace)
  const handleSubmit =(event) => {
    if(firstname.trim().length === 0 || lastname.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0){
      alert("You missed something")
    }
    else{
      event.preventDefault()
      let fData = {
        'department_id' : department,
        'email' : email.trim().toLowerCase(),
        'role' : role,
        'password' : password,
        'firstname' : firstname.trim(),
        'lastname' : lastname.trim()   
      }
      createUser(fData)
    }
  }

  return (
    <div className="d-flex flex-column align-item-center justify-content-center" style={{height:'100vh'}}>
      <div id="loginForm" className="text-center justify-content-center align-item-center grid row mt-5">
        <div>
          <h1 className="title text-center">Sign up</h1>
        </div>
        <form method="post" className="col-md-5" action="/" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">Firstname</label>
            <input type="text" className="form-control" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="John"/>
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Lastname</label>
            <input type="text" className="form-control" id="lastname" name="lastname" value={lastname}  onChange={(e) => setLastName(e.target.value)} placeholder="Lemon"/>
          </div>
          <div className="mb-3">
            <label htmlFor="department">Department</label>
            <select className="form-select" name="department" id="department" value={department}  onChange={(e) => setDepartment(e.target.value)} aria-label="Default select example">
              <option value="0"><p>Open this select menu</p></option>
              {departments.map(({ id, department }, index) => <option value={id} key={index}><p>{department}</p></option>)}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">Email address</label>
            <input type="email" className="form-control"  name="emailAddress" id="emailAddress" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" name="inputPassword" id="inputPassword" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)} aria-describedby="passwordHelpBlock"/>
          </div>
          {/* <input type="hidden" name="_csrf_token" value={{ csrf_token('authenticate') }}/> */}
          <div className="mb-3 d-flex justify-content-center">
            <input type="checkbox" id="role" name="role" onChange={handleCheckbox}/>
            <label htmlFor="role">Department Admin?</label>
          </div>
          <input type="submit" value="Sign up" className="btn btn-primary m-2"/>
        </form>
        <div className="mt-1">
          <p>Already have an account? <Link to="/login">Click here!</Link></p>
        </div>
        {logging && (<p  className="text-success">... Creating account and logging in : Check your emails!</p>)}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Signup;
