import './App.css';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Carousel from './Components/Carousel';
import Heart from './assets/images/heart.png';
import Footerlogo from './assets/images/footerlogo.png';
import Footerlogotwo from './assets/images/footerlogotwo.png';
import Black from './assets/images/black.png';
import Grey from './assets/images/grey.png';
import HCarousel from './Components/HCarousel';
import Facebook from './assets/images/facebook.png';
import Twitter from './assets/images/twitter.png';
import Instagram from './assets/images/instagram.png';
import Tiktok from './assets/images/tiktok.png';




function App() {
  return (
    <div className="home">
      <Navbar/>
      <div className='home_about'>
          <div className='home_about_col1'>
             <HCarousel/>
          </div>
          <div className='home_about_col2'>
             <div className='badge'>New Release</div>
             <h1>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h1>
             <div className='price'>$125.00</div>
             <h4>COLOR</h4>

             <button className='colorbtn'><img src={Black} style={{width:'30px',height:'30px'}}/></button>
             <button className='colorbtn'><img src={Grey} style={{width:'30px',height:'30px'}}/></button>
           
           <div className='sizeheader'>
           <h4>SIZE</h4>
           <a href=''>SIZE CHART</a>
           </div>
           <div  className='sizegroup'>
           <Button bgcolor="black" color='white' text="38"/>
           <Button bgcolor="#D2D1D3" color='#8F8C91' text="39"/>
           <Button bgcolor="#D2D1D3" color='#8F8C91' text="40"/>
           <Button bgcolor="white" color='black' text="41"/>
           <Button bgcolor="white" color='black' text="42"/>
           <Button bgcolor="white" color='black' text="43"/>
           <Button bgcolor="white" color='black' text="44"/>
           <Button bgcolor="white" color='black' text="45"/>
           <Button bgcolor="white" color='black' text="46"/>
           <Button bgcolor="white" color='black' text="47"/>
         </div>


            <div className='button_group'>
              <button className='cartbtn'>ADD TO CART</button>
             
             <button className='cart'><img src={Heart} style={{width:'10px',height:'auto'}}/></button>
             </div>
              <Button bgcolor="#4A69E2" color='white' text="BUY IT NOW" width='100%' height='40px'/>

             <h4 className='aboutproduct'>ABOUT THE PRODUCT</h4>
             <div className='desc'>
             <div>Shadow Navy / Army Green</div>
               <div >
                  This product is excluded from all promotional discounts and offers.
                  </div>
                  <div className='listgroup'>
                  <ul>
                    <li>
                  Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                  <li> Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                  </ul>
                  </div>
             </div>
            
          </div>
      </div>
    <Carousel/>
    <div className='footer'>
      <div className='footerone'>
        <div>
        <h1 >JOIN OUR KICKSPLUS CLUB & GET 15% OFF</h1>
       <p> Sign up for free! Join the community.</p>
       <div className='form'>
       <input type='email' placeholder='Email Address'/>
       <Button bgcolor='black' color='white' text='Submit'/>
       </div>
        </div>
        <img src={Footerlogo} className='flogo'/>
      </div>
      <div className='footertwo'>
        <div className='footerrows'>
        <div className='footerabout'>
          <h2>About us</h2>
          <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
        </div>
        <div className='footercat'>
          <h3>Categories</h3>
          <p>Runners</p>
          <p>Sneakers</p>
          <p>Basketball</p>
          <p>Outdoor</p>
          <p>Golf</p>
          <p>Hiking</p>

        </div>
        <div className='footercom'>
        <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Blogs</p>
        </div>
        <div className='sociallinks'>
          <h3>Follow us</h3>
          <div>
            <a href=''><img src={Facebook}/></a>
            <a href=''><img src={Instagram}/></a>
            <a href=''><img src={Twitter}/></a>
            <a href=''><img src={Tiktok}/></a>
            

          </div>
          
        </div>
        </div>
        <div > 
        <img src={Footerlogotwo} className='fimg' />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
