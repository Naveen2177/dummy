import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div>
        <ul className='home'>
        <li >
            <a href="#" className=" dropdown-toggle nva-link" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Watchlist</a></li>
            <li><a className="dropdown-item" href="#">Rentals</a></li>
          </ul>
          </li>
        </ul>
    </div>
  )
}

export default Home