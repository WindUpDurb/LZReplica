"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ParallaxContainer} from "./ParallaxContainer";
import {Welcome} from "./WelcomeDiv";
import {YouTubeSection} from "./YouTubeSectionHome";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }


    render() {
        return (
            <div>
                <ParallaxContainer />
                <Welcome />
                <YouTubeSection />
            </div>
        );
    }
}

HomePage.propTypes = {

};

function mapStateToProps(state, ownProps) {

    return {

    };
}


export default connect(mapStateToProps)(HomePage);
