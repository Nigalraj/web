import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Canvas from './Offcanvas';
import { InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Asset/bird-logo.png";

const Header = ({selectedComponent,setSelectedComponent}) => {
return (
<Row className='m-0 header'>
   <Col xs={10} className='p-4'>
   <div className='d-flex justify-content-between'>
      <div>
         <img src={logo} alt="Description of the " style={{ width: '75px', height: '50px'}} />
         <span className='d-lg-none d-xl-inline-flex'>APPLE - NIN</span>
      </div>
      <div>
      <InputGroup style={{ width: '300px' }} className='d-lg-inline-flex d-none ms-5'>
      <FormControl
        type="text"
        placeholder="Search"
        style={{ fontSize: '14px', padding: '8px' }}
      />
    </InputGroup>
      </div>
      <div className='mt-2 d-lg-inline-flex d-none'>
         <span className='ms-xl-5' >HOME</span>
         <span className='ms-xl-5 ms-3'>SERVICES</span>
         <span className='ms-xl-5 ms-3'>CAREERS</span>
         <span className='ms-xl-5 ms-3'>CONTACT US</span>
      </div>
   </div>
   </Col>
   <Col xs={2} className='p-0 d-block align-items-center d-lg-none d-inline-flex'>
   <Canvas selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
   </Col>
</Row>
);
};
export default Header;