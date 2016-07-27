"use strict";
import React, { PropTypes } from "react";
import $ from "jquery";
import {bindActionCreators} from "redux";
import * as material from "../../node_modules/bootstrap-material-design/dist/js/material.min";
import {connect} from "react-redux";
import NavbarContainer from "./common/NavbarContainer";
import {Footer} from "./common/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                {this.props.children}
                <Footer/>
                <script>
                    $(document).ready(function () {
                    $.material.init()
                     });
                </script>
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
