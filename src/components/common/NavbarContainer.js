"use strict";

import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import * as UserActions from "../../actions/UserActions";
import {connect} from "react-redux";
import {NavbarPresentation} from "./NavbarPresentation";
import toastr from "toastr";


class NavbarContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loginForm: {}
        };

        this.updateLoginForm = this.updateLoginForm.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    updateLoginForm(event) {
        let field = event.target.name;
        let loginForm = this.state.loginForm;
        loginForm[field] = event.target.value;
        return this.setState({loginForm});
    }

    submitLoginForm(event) {
        event.preventDefault();
        this.props.UserActions.submitLogin(this.state.loginForm);
    }
    
    render() {
        return (
            <NavbarPresentation
                activeUser={this.props.activeUser}
                updateForm={this.updateLoginForm}
                submitForm={this.submitLoginForm}
                />
        );
    }
}

NavbarContainer.propTypes = {
    UserActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let activeUser;
    if (state.activeUser) {
        activeUser = state.activeUser;
    }
    return {
        activeUser
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);