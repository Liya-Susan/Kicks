import React, { Component, useState } from "react";
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Shoe1 from '../assets/images/shoe1.png';
import Shoe2 from '../assets/images/shoe2.png';
import Shoe3 from '../assets/images/shoe3.png';
import Shoe4 from '../assets/images/shoe4.png';
import DefaultSlider from '../assets/images/slider.png';
import ColouredSlider from '../assets/images/colouredslider.png';
import Arrowleft from '../assets/images/arrowleft.png';
import ArrowRight from '../assets/images/arrowright.png';
import Button from './Button.js';



function Carousel()  {
 
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding:'0',
      arrows: false,
      rows:1,
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            
          }}
        >
          __
        </div>
      ),
      responsive:[{
        
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows:2,
           
          }
        
      }]/*
      reponsive:{
        breakpoint:600,
        settings:{
          slidesToShow:1,
          slidesToScroll:8
        }
      }*/
    };
    const slider = React.useRef(null);
      
      
    return (
      <div className="carousel">
        <div className="btngroup">
        <h2 style={{margin:'40px 0px' }}> You may also like </h2>
        <div>
        <button className="carouselbtn1" onClick={() => slider?.current?.slickPrev()}><img src={ArrowRight}/></button>
           <button className="carouselbtn2" onClick={() => slider?.current?.slickNext()}><img src={Arrowleft}/></button>
           </div>
           </div>
        <Slider ref={slider} {...settings} className="slider">
          <div className="hai">
            <img src={Shoe1} className="imgs"/>
            <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
            <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
          <div className="hai">
            <img src={Shoe2} className="imgs"/>
            <h3 className="h3" >ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
            <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div className="hai">
          <img src={Shoe3} className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
          <div className="hai">
          <img src={Shoe4}  className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div>
          <img src={Shoe4}  className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div>
          <img src={Shoe3}  className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div> 
            <img src={Shoe2}  className="imgs"/>
            <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
            <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div>
          <img src={Shoe1}  className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>

          </div>
          <div>
            <img src={Shoe1} className="imgs"/>
            <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
            <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
          <div>
            <img src={Shoe2} className="imgs"/>
            <h3 className="h3"> ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
            <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
          <div>
          <img src={Shoe3} className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
          <div>
          <img src={Shoe4}  className="imgs"/>
          <h3 className="h3">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <button className="carouselbtn">VIEW PRODUCT</button>
          </div>
        </Slider>
      </div>
    );
  }


export default Carousel