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

    submitLoginForm() {
        this.props.UserActions.submitLogin(this.state.loginForm);
    }
    
    render() {
        return (
            <NavbarPresentation
                updateForm={this.updateLoginForm}
                submitForm={this.submitLoginForm}
                />
        );
    }
}

NavbarContainer.propTypes = {
    UserActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);