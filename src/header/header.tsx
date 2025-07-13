
import '../home/home.css';
import myImage from '../assets/images/favicon.ico';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleSubmit = () => {
    // simulate form success
    setTimeout(() => {
      navigate('/'); // redirect to home
    }, 1000);
  };
return(
    <div>
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
            <div className='gov-com'>
              <h6>Government Authorised Company</h6>
            </div>
          </div>
    <nav className="header-content">
      <div className="header-body">
        <div className="logo-content" onClick={handleSubmit}>
         <img src={myImage} className='app-logo' /> 
        <span>Scrap Car and Earn Money</span>
        </div>
        <ul className="ul-content">
          <li><a href='/get-exchange-value' className="nav-items">Scrap Your Vehical</a></li>
          <li><a href='/buy-cod' className="nav-items">BUY COD</a></li>
          <li><a href='/aboutus' className="nav-items">About US</a></li>
          <li><a href='/contact-us' className="nav-items">Contact US</a></li>
          <li><a href='' className="nav-items">FAQ</a></li>
        </ul>
      </div>
    </nav>
    </div>
    )
}