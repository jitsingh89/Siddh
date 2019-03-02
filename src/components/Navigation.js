import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/image/logoOne.png'

const  Navigation=()=>{
    return(
    <div className="navigation">
              <div className="container top-info d-flex align-items-center justify-content-around">
                        <p className="m-0">We have over 15 years of experience</p>
                        <div className="d-flex align-items-center">
                        <i class="fa fa-phone" aria-hidden="true"></i><p>9911221122</p>
                        </div>
                        <div className="d-flex align-items-center">
                        <i class="fa fa-envelope" aria-hidden="true"></i><p>malhotra.info@gmsil.com</p>
                        </div>
                        <div className="d-flex align-items-center">
                        <i class="fa fa-map-marker" aria-hidden="true"></i><p>Cahritravan buxar</p>
                        </div>
                </div>

        <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container">
                    <a className="navbar-brand" href="#">
                    <h1>Malhotra<span>Coaching</span></h1>
                        {/* <img className="logo" src={Logo} alt="Logo" width="70px"  /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#">Home </a>
                            <a className="nav-item nav-link" href="#">About Us</a>
                            <a className="nav-item nav-link" href="#">Contact Us</a>
                            <a className="nav-item nav-link" href="#">All Courses</a>
                            <a className="nav-item nav-link" href="#">New Batches</a>
                        </div>
                </div>
            </div>
         </nav>
    </div>  
        
    )
}
 export default Navigation;