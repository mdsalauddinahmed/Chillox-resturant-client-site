import React from 'react';
 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
           <nav className="d-flex justify-content-between align-items-center   p-3 flex-wrap">
        <div className="logo ">
           <h2>KABAB FACTORY</h2>
        </div>
         <div className='d-flex'>
         <Link to="/home" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Home</li>
          </Link>
         <Link to="/blog" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Blog</li>
          </Link>
         </div>
        <div className="menu-container d-flex flex-wrap ">
          
          <Link to="/login" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
          </Link>

          <li
            role="button"
            className="nav-link items  ms-3 text-info fw-bolder"
          >
            Logout
          </li>

          <Link to="/register" className="text-decoration-none">
            <li className="nav-link items  ms-3  fw-bolder">
              Register
            </li>
          </Link>

          {/* <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
          </Link> */}
        </div>
      </nav>
        </>
    );
};

export default Navbar;