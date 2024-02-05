import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Canvas({ setSelectedComponent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} size="lg" className="menu-icon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} className="canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Features</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className='d-flex flex-column'>
           <Link to="/calculator" className=' py-3 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
             <span className='p-3'>Calculator</span>
          </Link>
          <Link to="/form" className=' py-3 span  text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
             <span className='p-3'>Form</span>
          </Link>
          <Link to="/dashboard" className=' py-3 text-dark  text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='p-3'>Dashboard</span>
          </Link>
          <Link to="/table" className=' py-3 text-dark  text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='p-3'>ManagerUser</span>
          </Link>
          <Link to="/faq" className=' py-3 text-dark  text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='p-3'>FAQ</span>
          </Link>
          <Link to="/about" className=' py-3  text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='p-3'>About</span>
          </Link>
        </div> 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canvas;
