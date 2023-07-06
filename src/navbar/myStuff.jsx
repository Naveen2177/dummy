import React from 'react'
import '../styles/mystuff.css'

const MyStuff = () => {
  return (
    <div>
        <ul className='stuff'>
        <li className=" list-unstyled dropdown nav-item ">
            <a href="#" className="dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">My Stuff</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Movies</a></li>
            <li><a className="dropdown-item" href="#">Tv Shows</a></li>
          </ul>
          </li>
        </ul>
    </div>
  )
}

export default MyStuff