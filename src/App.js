import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form'
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManagerUser from './components/MangerUser';
import { Col } from 'react-bootstrap';
import userData from './Data'
import UserDetails from './components/UserDetails';
import './App.css'


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [sideComponent, setSideComponent] = useState(null);

  
  console.log(selectedComponent)
  return (
    <Router>
      <Header selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      <div className='d-flex d-lg-none body'>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/form' element={<Form />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/table' element={<ManagerUser users={userData} />} />
          <Route path='/user/:userId' element={<UserDetails users={userData} />} />
      </Routes>
      </div>
      <div className='d-none d-lg-inline-flex'>
      <Col xs={2} className=''><Sidebar sideComponent={sideComponent} setSideComponent={setSideComponent}/>
        </Col>
        <Col xs={10} className='d-none d-lg-inline-flex body just'>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/calculator' element={<Calculator />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/table' element={<ManagerUser users={userData} />} />
          <Route path='/user/:userId' element={<UserDetails users={userData} />} />
        </Routes>
        </Col>
      </div>
        <Footer/>
    </Router>
  );
};

export default App;
