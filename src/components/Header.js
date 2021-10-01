import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>React Routing Demo</h1>
            <ul className="nav nav-pills">
               
                <li className="nav-item">
                    <Link className="nav-link" href="#" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
