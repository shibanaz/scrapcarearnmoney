import myImage from '../assets/images/favicon.ico';
import tick from '../assets/images/tick.webp'; 
import whtsapp from '../assets/images/whtsapp.webp'; 
import rupee from '../assets/images/rupee.webp';  
import car from '../assets/images/car.webp'; 
import './home.css';
import { Helmet } from 'react-helmet-async';

export default function Home(){

  <Helmet>
        <title>Car Scrap Earn Money-Home</title>
        <meta name="description" content="Welcome to Car Scrap Earn Money , where you find..." />
        <meta name="description" content="Scrap" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Car Scrap Earn Money  - Home" />
        <meta property="og:description" content="Awesome homepage of Car Scrap Earn Money " />
        <meta property="og:type" content="website" />
  </Helmet>

    const advantages = [
    {
  
      icon: whtsapp,
      title: 'Get Real-Time Rates',
      description: 'Connect with us on WhatsApp and receive the best market rate within 60 seconds, guaranteed.',
    },
    {

      icon: car,
      title: 'Book Your Pickup Time',
      description: 'Agree on the scrap price and choose a convenient pickup slot via call/WhatsApp chat',
    },
    {
      icon: rupee,
      title: 'Fast, Hassle-Free Payment',
      description: 'Hand over your scrap and get paid instantly through Cash, UPI, or any method you choose',
    },
  ];
    return(
        <div className="main-content">
          <div className='header-details'>
            <div className='con-number  ml-2'>
              <span>
              <h6>Phone Number: +91 7678410999/7860636786</h6></span>
            </div>
            <div className='con-emailid'>
              <span>
              <h6>Email : scrapservices@scrapcar-earnmoney.com</h6>
              </span>
            </div>
          </div>
    <nav className="header-content">
      <div className="header-body">
        <div className="logo-content">
         <img src={myImage} className='app-logo' /> 
        <span>Scrap Car and Earn Money</span>
        </div>
        <ul className="ul-content">
          <li><a href='' className="nav-items">Scrap Your Vehical</a></li>
          <li><a href='' className="nav-items">Vehical Inspection</a></li>
          <li><a href='' className="nav-items">About US</a></li>
          <li><a href='' className="nav-items">Contact US</a></li>
          <li><a href='' className="nav-items">FAQ</a></li>
        </ul>
      </div>
    </nav>
    <div className='body-content'>
      <div className='first-content'>
      <div className='first-content-card'>
        <div className='first-content-card-content'>
        <h3 className="card-content-label">
						Fast, Easy, and Hassle-Free with CarScrapper!
					</h3>
          <h2 className="card-content-label-second">Sell Your Old Car Today</h2>
          <div className="card-content-contact">
					<div>	
            	<div className="btn-wrapper">
							<a href='' className="card-content-contact-link">
					Contact Us(+91 7678410999)</a>
					</div>
        </div>				</div>
        </div>
      </div>
    </div>
    
    <div className='last-content'>
      
      <div>
      <div className="buy-cd">
        <h2 className="m-4 ">
        <a href="/buy-cod" className="animated-link">Buy Your CERTIFICATE OF DEPOSIT(COD)</a>
        </h2>
      </div>
        
      <div className="m-4 mt-10">
        <div className="fotter-content">   
          <h3 className="lc-label-two">What We Scrap</h3>         
          <h4>From Hatch back, sedans to SUVs—we scrap it all! Get top value for your vehicle today.</h4>
          {/* <a className="lc-fotter-two" href=''>check Us(+91 7678410999)</a> */}
        </div>
      </div>
      <div className="m-4">
        <div className="cards">   
          <div className="logo-text">
              <img src={tick} className='icon-img'></img>
            <span className='text-size'>Diesel(10+) or Petrol(15+)
            </span>
          </div>
          <div className="logo-text">
              <img src={tick} className='icon-img'></img>
            <span className='text-size'>Damaged cars
            </span>
          </div>
          <div className="logo-text">
              <img src={tick} className='icon-img'></img>
            <span className='text-size'>Part-exchange cars
            </span>
          </div>
          <div className="logo-text">
              <img src={tick} className='icon-img'></img>
            <span className='text-size'>MOT failures
            </span>
          </div>
          <div className="logo-text">
              <img src={tick} className='icon-img'></img>
            <span className='text-size'>Scrap Abandoned vehicle
            </span>
          </div>
        </div>
      </div>
      <div className="">
      <h2 className="adv-title ">Our Advantages</h2>
      <div className="adv-grid">
        {advantages.map((item, index) => (
          <div key={index} className="adv-card">
            <img src={item.icon} alt={item.title} className="adv-icon" />
            <h3 className="adv-heading">{item.title}</h3>
            <p className="adv-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="fotter-details">
          <h2 className="lc-label-one m-4">
						Have questions or need assistance?
					</h2>
          <h3 className="lc-label-two fotter-details">Get in Touch with Our Representative</h3>				
          <div className="lc-label-three">
					<p>Our dedicated representatives are here to help! Feel free to reach out to us using any of the options below:</p>
				</div>
			</div>
      
      <div className="m-4 fotter-details">
        <div className="fotter-content">            
          <a className="lc-fotter-one " href="https://api.whatsapp.com/send/?phone=917678410999&amp;text&amp;type=phone_number&amp;app_absent=0">
            WhatsApp</a>
          <a className="lc-fotter-two" href=''>Contact Us(+91 7678410999)</a>
        </div>
      </div>
      </div>
    </div>
    </div>
   </div>
    );
}  
