import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ users, selecteduser, setusers, setIsEditing }) => {
  const studentId = selecteduser.studentId;

  const [studentName, setstudentName] = useState(selecteduser.studentName);
  const [fatherName, setfatherName] = useState(selecteduser.fatherName);
  const [emailId, setemailId] = useState(selecteduser.emailId);
  const [phoneNumber, setphoneNumber] = useState(selecteduser.phoneNumber);
  const [dateOfBirth, setdateOfBirth] = useState(selecteduser.dateOfBirth);
  const [motherName, setmotherName] = useState('');
  const [gender, setGender] = useState('');
  const handleUpdate = e => {
    e.preventDefault();

    if (!studentName || !fatherName || !emailId || !phoneNumber || !dateOfBirth ||!gender||!motherName) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const user = {
      studentId,
      studentName , fatherName,  emailId , phoneNumber , dateOfBirth ,gender ,motherName,
    };

    for (let i = 0; i < users.length; i++) {
      if (users[i].studentId === studentId) {
        users.splice(i, 1, user);
        break;
      }
    }

    localStorage.setItem('users_data', JSON.stringify(users));
    setusers(users);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${user.studentName} ${user.fatherName}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
        <label htmlFor="studentName">Student Name</label>
        <input
          id="studentName"
          type="text"
          name="studentName"
          value={studentName}
          onChange={e => setstudentName(e.target.value)}
        />
        <label htmlFor="emailId">Email Id</label>
        <input
          id="emailId"
          type="email"
          name="emailId"
          value={emailId}
          onChange={e => setemailId(e.target.value)}
        />
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
        
        <label htmlFor="phoneNumber">Phone Number </label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setphoneNumber(e.target.value)}
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
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
