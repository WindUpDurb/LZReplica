"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {PropertyDetailsSection} from "./PropertyDetailsSection";
import {HouseAndLotDetailsSection} from "./HouseAndLotDetails";
import * as PropertyActions from "../../actions/PropertyActions";
import {bindActionCreators} from "redux";

class EditPropertyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
        this.updateFormState = this.updateFormState.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    //consider changing color of input if it has been changed from original state
    updateFormState(event) {
        let field = event.target.name;
        let form = this.state.form;
        form[field] = event.target.value;
        return this.setState({form});
    }

    saveForm() {
        this.props.PropertyActions.updatePropertyInDatabase(this.state.form);
    }

    render() {
        return (
            <div>
                <div className="text-center"><h3>Edit Site</h3></div>
                <PropertyDetailsSection
                    updateFormState={this.updateFormState}
                    />
                <HouseAndLotDetailsSection
                    updateFormState={this.updateFormState}
                    />
                <button className="btn btn-primary btn-raised" onClick={this.saveForm}>Save</button>
            </div>
        );
    }
}

EditPropertyPage.propTypes = {
    PropertyActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        PropertyActions: bindActionCreators(PropertyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPropertyPage);
