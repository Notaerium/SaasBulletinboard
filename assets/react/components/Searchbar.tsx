import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Searchbar: FunctionComponent = (props) => {
    const [categories, setCategories] = useState<Array<String>>()
    const [userMail, setUserMail] = useState<String>('')
    const isInitMount = useRef(true)

    useEffect(() => {
        if(isInitMount.current){
            getUserMail()
            getCategories()
            isInitMount.current = false
        }
    })

    //get the Current mail
    function getUserMail(){
        fetch('/api/user/mail')
        .then(response => {
            if(response.ok){
            return response.json()
            } 
        })
        .then((data) => {
            setUserMail(data)
        })
    }

    function handleLogout(event){
        event.preventDefault()
        fetch('/api/user/logout', {method: "POST"})
            .then(() => {
                location.replace("/login")
            })
    }

    //get all the categories so that we can loop on the array and display all the categories available for the user to filter
    //the displayed posts
    async function getCategories(){
        const response = await fetch('/api/category/getCats')
        response.json()
            .then((data) => {
                setCategories(data)
            })
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100vw'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-item dropdown ms-auto">
            <a className="nav-link dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userMail}
            </a>
            <ul className="dropdown-menu dropdown-menu-start">
                <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{gap:'1em', height:"2em"}}>
                    <input className="form-control me-sm-2 mt-sm-2 mt-lg-0" name="search" id="search" type="search" placeholder="Search by Title or poster lastname" aria-label="Search"  onChange={(e) => props.changeSearch(e.target.value)} style={{minWidth:'300px', maxWidth:'50%', height:'100%'}}/>
                </li>
                <li className="nav-item">
                     <select className="form-select fontSize-08 mt-sm-3 mt-lg-0" name="categories" id="categories" style={{width:"10rem"}} onChange={(e) => props.changeFocusCat(e.target.value)}>
                         <option value="">-All categories-</option>
                         {categories?.map((category) => (
                             <option key={category} value={category}>{category}</option>
                         ))}
                     </select>
                 </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Searchbar

 // <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100vw'}}>
        //     <div className="container-fluid">
        //         <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="nav-item dropdown ms-auto">
        //             <a className="nav-link dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 {userMail}
        //             </a>
        //             <ul className="dropdown-menu dropdown-menu-start">
        //                 <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
        //             </ul>
        //         </div>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex bd-highlight" style={{gap:'1em', height:"2em"}}>
        //                 <li className="nav-item">
        //                     <input className="form-control mr-sm-2" name="search" id="search" type="search" placeholder="Search by Title or poster lastname" aria-label="Search"  onChange={(e) => props.changeSearch(e.target.value)} style={{minWidth:'300px', maxWidth:'50%', height:'100%'}}/>
        //                 </li>
        //                 <li className="nav-item">
        //                     <select className="form-select fontSize-08" name="categories" id="categories" style={{width:"10rem"}} onChange={(e) => props.changeFocusCat(e.target.value)}>
        //                         <option value="">-All categories-</option>
        //                         {categories?.map((category) => (
        //                             <option key={category} value={category}>{category}</option>
        //                         ))}
        //                     </select>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>