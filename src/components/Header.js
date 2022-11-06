import { SearchOutlined, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.scss'
const Header = () => {
    return (
      <div className="header" style={{textShadow: "1px 2px 2px rgba(150, 150, 150, 1)"}}>
        <nav>
          <ul className="ul-items">
            <li className="li-items">
              <Link to="/women">GIRLS</Link>
              <Link to="/men">BOYS</Link>
            </li>
          </ul>
          <div className="logo">
            <h1 style={{ paddingLeft: "10rem" }}>ToysLand</h1>
          </div>
          <div
            className="right"
            style={{ fontWeight: "bold", fontFamily: "TimesNewRoman" }}
          >
            <div className="search">
              <SearchOutlined className="search-icon" />
              <button className="sch-btn">Search</button>
            </div>
            <div className="right-buttons">
              <button>
                <Link to="/login">Log In</Link>
              </button>
              <button>
                <Link to="/sign-up">Sign Up</Link>
              </button>
              <ShoppingBasket className="basket" />
            </div>
          </div>
          
        </nav>
      </div>
    );
}

export default Header
