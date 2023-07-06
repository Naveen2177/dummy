import React from 'react'
import '../styles/store.css'

const Store = () => {
  return (
    <div>
        <ul className='store'>
        <li >
            <a href="#" className=" dropdown-toggle nva-link" data-bs-toggle="dropdown" aria-expanded="false">Store</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Rent</a></li>
            <li><a className="dropdown-item" href="#">Channels</a></li>
          </ul>
          </li>
        </ul>
    </div>
  )
}

export default Store