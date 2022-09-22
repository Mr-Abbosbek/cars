import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import User from './Icons/User';

function Navbar({title, toPath}) {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <div className={isAuth ? 'w-100 d-flex justify-content-end all_container navbar_page' : 'w-100 d-flex justify-content-start'}>
      <Link 
        to={isAuth ? '/login' : `${toPath}`} 
        onClick={()=>{
          setIsAuth(true)
          localStorage.removeItem('token');
          }} 
        className='btn btn-primary d-flex align-items-center'
        >
          <User /> <p className='m-0 p-2 fw-bold'>{isAuth ? "Admin o'tish" : title}</p>
      </Link>
    </div>
  );
}

export default Navbar;