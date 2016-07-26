"use strict";

import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {NavbarPresentation} from "./NavbarPresentation";
import toastr from "toastr";


class NavbarContainer extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <NavbarPresentation/>
        );
    }
}

NavbarContainer.propTypes = {
};


function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(NavbarContainer);