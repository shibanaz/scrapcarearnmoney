import tick from '../assets/images/tick.webp'; 
import whtsapp from '../assets/images/whtsapp.webp'; 
import rupee from '../assets/images/rupee.webp';  
import car from '../assets/images/car.webp'; 
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function Home(){

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
        <div className="card-container">
          <div className="card">
            <h2>Scrap It. Earn Big!</h2>
            <p><a href="/get-exchange-value" className="card-link">Get Exchange Value</a></p>
          </div>
          <div className="card">
            <h2>Buy Certificate of Deposit </h2>
            <p><a href="/buy-cod" className="card-link">Buy COD</a></p>
          </div>
        </div>
        {/* <div className="buy-cd">
          <h2 className='exchange-text'>Scrap It. Earn Big!(Get Exchange Value)</h2>
          <h2 >
          <a href="/buy-cod" className="animated-link">Buy Certificate of Deposit(COD)</a>
          </h2>
          
        </div> */}
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
      </div>
    </div>
    <div>
        <div className='contact-content'>
          <div className='contact-content-card'>
          <h2 className="contact-label">CONTACT US</h2>
          <ul className='contact-items'>
            <li className='li-common'>
              <span className='li-logo'>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className='contact-label-font'>
                <strong>+91 7678410999/7860636786</strong>(Timing: 9 AM - 9 PM)
              </span>
            </li>
            <li className='li-common'>
              <span className='li-logo'>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className='contact-label-font'>
                <strong>scrapservices@scrapcar-earnmoney.com</strong>
              </span>
            </li>
            <li className='li-common li-location'>
              <span className='li-logo'>
                 <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className='contact-label-font'>
                <span>A44/A, Khirki Extension, 
                  Panchsheel Vihar, 
                  Sheikh Sarai Village, 
                  Malviya Nagar,
                  New Delhi, 
                  Delhi 110017</span>
              </span>
            </li>
          </ul>
          </div>
        </div>
        <div className='map-content'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448663.92433907953!2d76.65934166562499!3d28.534101200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8d8c984c7%3A0x4c5d0fbc750aabb5!2sscrap%20car%20and%20earn%20money!5e0!3m2!1sen!2sin!4v1754750518277!5m2!1sen!2sin" 
           width="auto" height="auto" className="map-body" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>             
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
    );
}  
