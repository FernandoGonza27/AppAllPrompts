

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css"

export default function Navbar() {
    const { user } = useContext(AuthContext);    
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">{user.username}</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">
                        <Link to="/prompts" style={{ color: "inherit", textDecoration: "none" }}>
                            <span className="logo">Prompts</span>
                        </Link>
                    </button>
                    {user.isAdmin ? (
                        <button className="navButton">
                            <Link to="/users" style={{ color: "inherit", textDecoration: "none" }}>
                                <span className="logo">Users</span>
                            </Link>
                        </button>
                    ) : ""}
                </div>
            </div>
        </div>
    );
}