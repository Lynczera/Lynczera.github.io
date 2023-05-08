import React from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (

      <header>

        <div className='container'>


        <span className="nav-links">

            <Link to="/"> Leonardo Chen </Link>
  
            <Link to="/Projects">Projects</Link>

            <Link to="/CV">CV</Link>
            
        </span>
        </div>


      </header>
    );
  };