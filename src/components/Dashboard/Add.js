import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ users, setusers, setIsAdding }) => {

  //Student Name,dob,Phone Number, emailId Id,  Father Name, Gender, Action
  const [studentName, setstudentName] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [emailId, setemailId] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [motherName, setmotherName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  
  
  

  const handleAdd = e => {
    e.preventDefault();

    if (!studentName || !fatherName || !emailId || !phoneNumber || !dateOfBirth ||!gender||!motherName||!address) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const studentId = users.length + 1;
    const newuser = {
      studentId,
      studentName , fatherName,  emailId , phoneNumber , dateOfBirth ,gender ,motherName,address
    };

    users.push(newuser);
    localStorage.setItem('users_data', JSON.stringify(users));
    setusers(users);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${studentName} ${fatherName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor="studentName">Student Name</label>
        <input
          id="studentName"
          type="text"
          name="studentName"
          value={studentName}
          onChange={e => setstudentName(e.target.value)}
        />
         <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={e => setdateOfBirth(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
      <input
        id="gender"
        type="text"
        name="gender"
        value={gender}
        onChange={handleGenderChange}
        list="genders"
      />
      <datalist id="genders">
        <option value="male" />
        <option value="female" />
        <option value="transgender" />
      </datalist>
      <label htmlFor="fatherName">Father Name</label>
        <input
          id="fatherName"
          type="text"
          name="fatherName"
          value={fatherName}
          onChange={e => setfatherName(e.target.value)}
        />
        <label htmlFor="motherName">Mother Name</label>
        <input
          id="motherName"
          type="text"
          name="motherName"
          value={motherName}
          onChange={e => setmotherName(e.target.value)}
        />
        <label htmlFor="emailId">Email Id</label>
        <input
          id="emailId"
          type="email"
          name="emailId"
          value={emailId}
          onChange={e => setemailId(e.target.value)}
        />
       <label htmlFor="phoneNumber">Phone Number </label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setphoneNumber(e.target.value)}
        />
       
       <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
