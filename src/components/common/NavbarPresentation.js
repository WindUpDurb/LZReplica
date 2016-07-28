"use strict";

import React, {PropTypes} from "react";
import { Link } from "react-router";


export const NavbarPresentation = ({activeUser, submitForm, updateForm}) => {
    if (activeUser) {
        return (
            <div className="navbar navbar-default" id="navbar-container">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link id="logoImage" to="/" className="navbar-brand">
                            <img id="brandImage" className="img-responsive" src="/statics/listingZenLogo.png"/>
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse navbar-responsive-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="navLink"><Link to="/demo">DEMO SITE</Link></li>
                            <li className="navLink"><Link to="/">ABOUT US</Link></li>
                            <li className="navLink"><Link to="/">OUR PRICES</Link></li>
                            <li className="navLink"><Link to="/">CONTACT US</Link></li>

                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle navLink" data-toggle="dropdown">CLIENT ACTIONS
                                    <b className="caret"/></a>
                                <ul id="loginDropdown" className="dropdown-menu">
                                    <li><Link to="/propertyManagement">Property Management</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar navbar-default" id="navbar-container">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-responsive-collapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link id="logoImage" to="/" className="navbar-brand">
                            <img className="img-responsive" src="/statics/listingZenLogo.png"/>
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse navbar-responsive-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="navLink"><Link to="/demo">DEMO SITE</Link></li>
                            <li className="navLink"><Link to="/">ABOUT US</Link></li>
                            <li className="navLink"><Link to="/">OUR PRICES</Link></li>
                            <li className="navLink"><Link to="/">CONTACT US</Link></li>

                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle navLink"
                                   data-toggle="dropdown">LOGIN
                                    <b className="caret"/></a>
                                <ul id="loginDropdown" className="dropdown-menu">
                                    <li>
                                        <form className="form-group" onSubmit={submitForm}>
                                            <label className="control-label">Email</label>
                                            <div>
                                                <input
                                                    name="email"
                                                    onChange={updateForm}
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"/>
                                            </div>
                                        </form>
                                    </li>
                                    <li><a onClick={submitForm}>Login</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

NavbarPresentation.propTypes = {
    updateForm: PropTypes.func.isRequired,
    activeUser: PropTypes.object,
    submitForm: PropTypes.func.isRequired
};

