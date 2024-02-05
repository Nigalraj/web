import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import card_1 from "../Asset/flow1.png";
import card_2 from "../Asset/flow2.png";
import userData from '../Data';

const Dashboard = () => {

     const firstFiveUsers = userData.slice(0,5);
  
  return (
    <div className=" w-100">
      <div className='my-3'>
        <span className='fw-bold mx-3'>Flow Charts</span>
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mx-3 mx-lg-5'>
          <img src={card_1} className='d-md-none' alt="charts" style={{ width:'100%',height:'auto'}}/>
          <img src={card_1} className='mx-5 d-none d-md-inline-flex' alt="charts" style={{ width:'250px',height:'auto'}}/>
        </div>
        <div className='mx-3 mt-3 mt-md-0 ms-lg-5'>
          <img src={card_2} style={{ width:'100%',height:'auto'}} alt="charts"/>
        </div>
      </div>
      <div className='mx-3 mt-4' style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <table className="table m-0 w-100">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ISACTIVE</th>
              <th scope="col">AGE</th>
              <th scope="col">NAME</th>
              <th scope="col">GENDER</th>
              <th scope="col">COMPANY</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">ABOUT</th>
              <th scope="col">DATE OF BIRTH</th>
              <th scope="col">LATITUDE</th>
              <th scope="col">LONGITUDE</th>
            </tr>
          </thead>
          <tbody>
          {firstFiveUsers.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.isActive}</td>
                  <td nowrap>{user.age}</td>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.company}</td>
                  <td>{user.email}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.phone}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.address}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.about}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.date_of_birth}</td>
                  <td>{user.latitude}</td>
                  <td>{user.longitude}</td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Dashboard;