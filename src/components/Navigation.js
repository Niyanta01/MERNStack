import React, { Component } from 'react';
import {Link, NavLink}  from 'react-router-dom';
import '../App.css';

class Navigation extends Component{

    render(){
        return(

        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li>
                <NavLink activeclassName="active" to="/" exact={true}>Home</NavLink>
            </li>
            <li>
                <NavLink activeclassName="active" to="/products">products</NavLink>
            </li>
            <li>
                <NavLink activeclassName="active" to="/create">create</NavLink>
            </li>
            </ul>
            
        </div>
        </nav>
                )
    }

}

export default Navigation;