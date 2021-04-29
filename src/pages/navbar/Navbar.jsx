import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: 'black',
        }}
      >
        <a
          style={{
            color: 'white',
            fontSize: '1.2rem',
            textDecoration: 'none',
          }}
          href='https://www.roofstock.com/'
        >
          roofstock
        </a>
        <a
          style={{
            color: 'white',
            fontSize: '1.2rem',
            textDecoration: 'none',
            float: 'right',
          }}
          href='/'
        >
          home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
