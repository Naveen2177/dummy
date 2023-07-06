import { useState, useEffect } from "react";
import "../styles/categories.css";

const Categories = () => {
  const [toggle, setToggle] = useState(false);
  {
    toggle && <RandomComponent />;
  }

  const RandomComponent = () => {
    useEffect(() => {
      const interval = setInterval(() => {}, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <div>
        <div>
          <ul>
            <li className="list-unstyled">
              <a className="btn dropdown-toggle nva-link text-black text-decoration-none" onClick={() => setToggle(!toggle)}>
                Categories
              </a>
            </li>
          </ul>
        </div>

        <div className="collection d-flex gap-3" id="categ">
          <div>
            <h4>Genres</h4>
            <ul className="row coll">
              <li className="col-6">
                <a href="#">Action and adventures</a>
              </li>
              <li className="col-6">
                <a href="#">Anime</a>
              </li>
              <li className="col-6">
                <a href="#">Comedy</a>
              </li>
              <li className="col-6">
                <a href="#">Documentary</a>
              </li>
              <li className="col-6">
                <a href="#">Drama</a>
              </li>
              <li className="col-6">
                <a href="#">Fentasy</a>
              </li>
              <li className="col-6">
                <a href="#">Horror</a>
              </li>
              <li className="col-6">
                <a href="#">International</a>
              </li>
              <li className="col-6">
                <a href="#">kids</a>
              </li>
              <li className="col-6">
                <a href="#">Romance</a>
              </li>
              <li className="col-6">
                <a href="#">Mystery and thrillers</a>
              </li>
              <li className="col-6">
                <a href="#">Music videos and concerts</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Featured collections</h4>
            <ul className="row coll">
              <li className="col-6">
                <a href="#">Hindi</a>
              </li>
              <li className="col-6">
                <a href="#">English</a>
              </li>
              <li className="col-6">
                <a href="#">Telugu</a>
              </li>
              <li className="col-6">
                <a href="#">Tamil</a>
              </li>
              <li className="col-6">
                <a href="#">Malayalam</a>
              </li>
              <li className="col-6">
                <a href="#">Kannada</a>
              </li>
              <li className="col-6">
                <a href="#">Marathi</a>
              </li>
              <li className="col-6">
                <a href="#">Punjabi</a>
              </li>
              <li className="col-6">
                <a href="#">Gujarati</a>
              </li>
              <li className="col-6">
                <a href="#">Bengali</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default Categories;
