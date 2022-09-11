import React from 'react';
import { Link } from 'react-router-dom';
import User from './../Icons/User';

function Navbar(props) {
  return (
    <div className='w-100 d-flex justify-content-end all_container navbar_page'>
      <Link to='/adminpanel' className='btn btn-primary d-flex align-items-center'><User /> <p className='m-0 p-2 fw-bold'>Admin o'tish</p></Link>
    </div>
  );
}

export default Navbar;