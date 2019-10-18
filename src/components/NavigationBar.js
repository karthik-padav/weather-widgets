import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink exact to="/" className="navbar-brand">Rakuten</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink exact to="/">Home</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink exact to="/settings"><span className="glyphicon glyphicon-cog"></span></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;