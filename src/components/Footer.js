import React,{Component} from 'react';
import{Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div className="container footer">
                <div className="container">
                    <div className="row">
                          <div className="col-md-3">
                             <h2>About Us</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industry's standard dummy text
                             ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                            </p>
                          </div>

                          <div className="col-md-3">
                             <h2>Quick Link</h2>
                             <ul className="list-unstyled">
                             <li><Link to="#">Why Mahotra</Link></li>
                                <li><Link to="#">FAQs</Link></li>
                                <li><Link to="#">Gallery</Link></li>
                                <li><Link to="#">Career</Link></li>
                                <li><Link to="#">News Articles</Link></li>
                                <li><Link to="#">Download Sample Paper</Link></li>
                              </ul>
                          </div>

                          <div className="col-md-3">
                             <h2>Courses Offered</h2>
                             <ul className="list-unstyled">
                                <li><Link to="#">class VIII</Link></li>
                                <li><Link to="#">class IX</Link></li>
                                <li><Link to="#">class X</Link></li>
                                <li><Link to="#">class XI</Link></li>
                                <li><Link to="#">class XII</Link></li>
                              </ul>
                          </div>

                          <div className="col-md-3">
                          <h2>Contact Info</h2>
                             <p>It is a long established fact that a reader will be distracted</p>
                             <ul className="list-unstyled">
                                <li className="d-flex align-items-center">
                                    <i className="fa fa-map-marker"></i>
                                    <p>Charitravan,Buxar</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fa fa-phone"></i>
                                    <p>9977665544</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
                                    <p>malhotra.info@gmail.com</p>
                                </li>
                              </ul>
                            {/*  <h2>Useful Link</h2>
                             <ul className="list-unstyled">
                                <li> <a>Home</a></li>
                                <li> <a>About Us</a></li>
                                <li> <a>Contact Us</a></li>
                                <li> <a>Login</a></li>
                                <li> <a>Register</a></li>
                              </ul> */}
                          </div>

                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
export default Footer;