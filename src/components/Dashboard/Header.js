import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Student Directories</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between' }}>
  <Logout setIsAuthenticated={setIsAuthenticated} />
  <button onClick={() => setIsAdding(true)} style={{ marginLeft: 'auto' }}>+Add Student</button>
</div>

    </header>
  );
};

export default Header;
