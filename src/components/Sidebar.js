import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ setSideComponent }) => {
  const handleComponentClick = (component) => {
    setSideComponent(component);
  };

  return (
    <div className='sidebar text-white ps-0 h-100 d-flex flex-column text-dark'>
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
  );
};

export default Sidebar;
