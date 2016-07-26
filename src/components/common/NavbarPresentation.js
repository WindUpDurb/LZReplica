"use strict";

import React, {PropTypes} from "react";
import { Link, IndexLink } from "react-router";


export const NavbarPresentation = () => {
    return (
        <div className="navbar navbar-default" id="navbar-container">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a id="logoImage" href="/" className="navbar-brand">
                        <img className="img-responsive" src="/statics/listingZenLogo.png"/>
                    </a>
                </div>
                <div className="navbar-collapse collapse navbar-responsive-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="navLink"><Link to="/demo">DEMO SITE</Link></li>
                        <li className="navLink"><Link to="/">ABOUT US</Link></li>
                        <li className="navLink"><Link to="/">OUR PRICES</Link></li>
                        <li className="navLink"><Link to="/">CONTACT US</Link></li>
                        <li className="navLink"><Link to="/">LOG IN</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

NavbarPresentation.propTypes = {
};

