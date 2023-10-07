import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { usersData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [users, setusers] = useState(usersData);
  const [selecteduser, setSelecteduser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users_data'));
    if (data !== null && Object.keys(data).length !== 0) setusers(data);
  }, []);

  const handleEdit = studentId => {
    const [user] = users.filter(user => user.studentId === studentId);

    setSelecteduser(user);
    setIsEditing(true);
  };

  const handleDelete = studentId => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [user] = users.filter(user => user.studentId === studentId);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${user.studentName} ${user.fatherName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const usersCopy = users.filter(user => user.studentId !== studentId);
        localStorage.setItem('users_data', JSON.stringify(usersCopy));
        setusers(usersCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            users={users}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          users={users}
          setusers={setusers}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          users={users}
          selecteduser={selecteduser}
          setusers={setusers}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
