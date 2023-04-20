import React from 'react'
import Slider from "react-slick";
import './HCarousel.css'
import Img1 from '../assets/images/img1.png';
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';


function HCarousel() {
    const settings = {
       /* customPaging: function(i) {
          return (
            <div >
              <img src={`../assets/images/img${i + 1}.png`} width='64px' height='64px' style={{paddingTop:'150wh'}}/>
              </div>
          );
        },*/
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 0,
        rows:2,
        infinte:false,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows:1,
               
              }
            }
          ]
      };
      return (
        <div className='hcarousel'>
          <Slider {...settings}  style={{marginBottom:'400px'}} className='slider2'>
            <div >
            <img src={Img1} className='himg'/>
            </div>
           
            <div>
              <img src={Img3} className='himg'/>
            </div>
            <div>
              <img src={Img2} className='himg'/>            
            </div>
            <div>
               <img src={Img4} className='himg'/>           
             </div>
          </Slider>
        </div>
      );
    
}

export default HCarousel
