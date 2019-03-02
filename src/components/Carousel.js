import React, { Component } from 'react';
import imageOne from '../assets/image/carouselOne.jpg';
import imageTWO from '../assets/image/carouselTWO.jpg';
import imageThree from '../assets/image/carouselThree.jpg';
import imageFour from '../assets/image/carouselFour.jpg';
import { Carousel } from 'react-responsive-carousel';

const carouselSetting={
    showThumbs:false,
    autoPlay:true

}

class CarouselIndex extends Component {
    render() {
        return (
            <Carousel {...carouselSetting} >
                <div>
                    <img src={imageOne} />
                   {/*  <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={imageOne} />
                   {/*  <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={imageOne} />
                   {/*  <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imageOne} />
                   {/*  <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselIndex;
 