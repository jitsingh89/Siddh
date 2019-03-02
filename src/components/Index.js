import React, { Component } from "react";
import Navigation from './Navigation';
import cardImage1 from '../assets/image/cardImage1.png';
import croursel from '../assets/image/croursel.jpg';
import AliceCarousel from 'react-alice-carousel';
import Footer from './Footer';
import Carousel from './Carousel';
class Index extends Component{


    render(){
        const responsive = {
            0: { items: 1 },
            1024: { items: 5 },
          }
        return(
           <div className="index">
                <Navigation/>
                <div className="container">
                <Carousel/>
                </div>
             
                <div className="container index__courses">
                <div className="container">
                    <div className="index__courses__heading">
                    <h1 >Our <span>Courser</span></h1>
                    <p className="my-22">Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage1} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                             
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage2} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                             
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage1} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                             
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row mt-33">
                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage2} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                             
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage1} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                             
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                               {/*  <img class="card-img-top" src={cardImage2} alt="Card image" /> */}
                               <i class="fa fa-university" aria-hidden="true"></i>
                                <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container index__courses-carusel">
               <h3> FEATURED SOFTWARE COURSES</h3>
                <AliceCarousel mouseDragEnabled responsive={responsive}>
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
      <img src={croursel} />
    </AliceCarousel>
                {/*  <div className="index__joins__content">
                    <h1>Become a coaching</h1>
                    <p>Some example text some example text. John Doe is an architect and engineer
                                John Doe is an architect and engineerJohn Doe is an architect and engineer</p>
                    <button className="btn btn-large btn-outline-warning">Join Us Now</button>
                 </div> */}

                </div>
                <Footer/>
           </div>
        )
    }
}

export default Index