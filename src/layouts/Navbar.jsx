import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'> 
        <nav>
            <ul className='list-unstyled'>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/About'> About </Link> </li>
                <li> <Link to='/Click'> Click </Link> </li>
                <li> <Link to='/Form'> Form </Link> </li>
                <li> <Link to='/Fetch'> Fetch </Link> </li>
                {/* <li><a href="/About">About</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar