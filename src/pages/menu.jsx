import React from 'react';
import '../styles/menu.css';


const CollectionMenu = () => {
  return (
    <div className='menu'>
        <div>
        <ul className='row'>
            <h4>Genres</h4>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Action and adventures
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Anime
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Comedy
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Documentary
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Drama
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Fentasy
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Horror
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              International
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              kids
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Romance
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Mystery and thrillers
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Music videos and concerts
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul className="d-flex row">
            <h4>
            Featured collections
            </h4>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Hindi
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              English
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Telugu
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Tamil
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Malayalam
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Kannada
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Marathi
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Punjabi
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Gujarati
              </a>
            </li>
            <li className="col-6">
              <a className="dropdown-item" href="#">
              Bengali
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default CollectionMenu