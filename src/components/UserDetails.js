import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u._id === userId);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='d-flex flex-column card w-100 m-2 m-md-5 m-md-0'>
      <h2 className='text-center my-3'>User Details</h2>
      <div className='d-md-flex flex-row '>
      <div className='d-md-none flex-md-column ms-3 py-3'>
        <div className='d-flex flex-column'>
          <span className='py-1 '>Name: {user.name}</span>
          <span className='py-1'>Gender: {user.gender}</span>
          <span className='py-1'>Age: {user.age}</span>
        </div>
        <div className='d-flex flex-column'>
          <span className='my-3 py-1'>About: {user.about}</span>
          <span className='py-1' >Latitude: {user.latitude}</span>
          <span className='py-1'>Longitude: {user.longitude}</span>
        </div>
      </div>
      <div className='d-none d-md-flex flex-column px-4 py-3'>
          <div className='d-flex justify-content-between'>
           <div className='d-flex flex-column'>
             <span className='py-1' >Name: {user.name}</span>
             <span className='py-1'>Gender: {user.gender}</span>
             <span className='py-1'>Age: {user.age}</span>
             <span className='py-1'>Company: {user.company}</span>
             <span className='py-1'>Email: {user.email}</span>
             <span className='py-1'>Phone: {user.phone}</span>
           </div>
           <div className='d-flex flex-column'>
             <span className='py-1'>Company: {user.company}</span>
             <span className='py-1'>Email: {user.email}</span>
             <span className='py-1'>Phone: {user.phone}</span>
             <span className='py-1'>Address: {user.address}</span>
             <span className='py-1'>D.O.B: {user.date_of_birth}</span>
           </div>
          </div>
          <div className='my-4 d-flex flex-column'>
            <span className='my-3 py-1'>About: {user.about}</span>
            <span className='py-1'>Latitude: {user.latitude}</span>
            <span className='py-1'>Longitude: {user.longitude}</span>
          </div>
      </div>
      </div>
      <div className='d-flex ms-md-4 m-3'>
        <button className='btn btn-secondary' onClick={handleGoBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
