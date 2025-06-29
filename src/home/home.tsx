import myImage from '../assets/images/favicon.ico';
import './home.css';

export default function Home(){

    return(
        <div className="main-content">
          <div className='header-details'>
            <div className='con-number  ml-2'>
              <span>
              <h6>Phone Number: +91 7678410999</h6></span>
            </div>
            <div className='con-emailid'>
              <span>
              <h6>Email : scrapexchangecars@gmail.com</h6>
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
    {/* <div className="second-content">
      <div className='second-content-card'>
        <div className='child-common'>
        <h3 className="card-one-label">
						CARSCRAPPER
					</h3>
          <h2 className="card-one-label-next">How We Scrap your Car</h2>
        </div>
        <div>
        <figure className="">
        <img decoding="async" width="2560" height="1707" src="https://carscrapper.co.in/wp-content/uploads/2024/06/Car-Scrapper-Quotation-scaled.jpg" className="card-two-img" alt=""  sizes="(max-width: 2560px) 100vw, 2560px"/>
        </figure>
        </div>
        <div>

        </div>
        <div>
          
        </div>
      </div>

    </div> */}
    <div className='last-content'>
      <div>
      <div className="">
        <div className="fotter-details">
          <h2 className="lc-label-one">
						Have questions or need assistance?
					</h2>
          <h3 className="lc-label-two">Get in Touch with Our Representative</h3>				
          <div className="lc-label-three">
					<p>Our dedicated representatives are here to help! Feel free to reach out to us using any of the options below:</p>
				</div>
			</div>
      </div>
      <div className="m-4">
                    <div className="fotter-content">            
                          <a className="lc-fotter-one" href="https://api.whatsapp.com/send/?phone=917678410999&amp;text&amp;type=phone_number&amp;app_absent=0">
                    WhatsApp                </a>
            
            <a className="lc-fotter-two" href=''>
                    Contact Us(+91 7678410999)</a>
                  </div>
                </div>
      </div>
    </div>
    </div>
   </div>
    );
}  