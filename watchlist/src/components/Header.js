import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                {/* <div className="brand">
                    <Link to="/">Movie search</Link>
                </div> */}
                <ul className="nav-links">
                    <li>
                        <Link to="/Watchlist">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/Watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/" className="btn"><i class="fas fa-search"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
