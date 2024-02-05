import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ManagerUser = ({ users }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="w-100 my-3">
      <div className='mx-3 mt-4' style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <table className="table m-0 w-100">
        <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">NAME</th>
              <th scope="col">GENDER</th>
              <th scope="col">AGE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{startIndex + index + 1}</th>
                <td nowrap>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/user/${user._id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={currentPage === index ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
