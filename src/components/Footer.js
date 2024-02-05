import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='header'>
      <div className='container p-3'>
      <div className='p-4  m-0 d-flex justify-content-center justify-content-lg-between'>
      <div className= 'd-flex d-none d-lg-inline-flex '>
        <span>Get connected with us on social networks:</span>
      </div>
      <div className=''>
        <div>
          <a href="#" className="social-icon ms-lg-2 ms-4 "><FontAwesomeIcon icon={faTwitter} style={{ color: '#212529' ,fontSize: '20px'}} /></a>
          <a href="#" className="social-icon  ms-lg-2 ms-4"><FontAwesomeIcon icon={faFacebook} style={{ color: '#212529', fontSize: '20px' }} /></a>
          <a href="#" className="social-icon  ms-lg-2 ms-4"><FontAwesomeIcon icon={faInstagram} style={{ color: '#212529',fontSize: '20px' }} /></a>
          <a href="#" className="social-icon  ms-lg-2 ms-4"><FontAwesomeIcon icon={faGoogle} style={{ color: '#212529',fontSize: '20px' }} /></a>
          <a href="#" className="social-icon  ms-lg-2 ms-4"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#212529', fontSize: '20px' }} /></a>
        </div>
      </div>      
     </div>
      <hr style={{ borderColor: '#FFFFFF' }} />
      <div className='d-flex flex-column flex-lg-row align-items-center'>
        <div className='col-lg-3 text-center mb-lg-0 mb-3 p-3'>
        <div>
        <h4>COMPANY NAME</h4>
        <div>
          <span>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
        </div>
      <div className='col-lg-3 text-center mb-lg-0 mb-3 p-3'>
       
        <h4>PRODUCTS</h4>
        <div className='d-flex flex-column'>
        <span>Angular</span>
          <span>React</span>
          <span>Vue</span>
          <span>Laravel</span>
        </div>
       
      </div>
      <div className='col-lg-3 text-center mb-lg-0 mb-3 p-3'>
        
        <h4>USEFUL LINKS</h4>
        <div className='d-flex flex-column'>
          <span>Pricing</span>
          <span>Setting</span>
          <span>Orders</span>
          <span>Help</span>
        </div>
       
      </div>
      <div className='col-lg-3 text-center mb-lg-0 mb-3 p-3'>
        
        <h4>CONTACT</h4>
        <div className='d-flex flex-column'>
          <span>New York, NY 10012, US</span>
          <span>info@example.com</span>
          <span>+ 01 234 567 88</span>
          <span>+ 01 234 567 89</span>
        </div>
       
      </div>
     </div>
     </div>
    </div>
    
  );
};

export default Footer;
