"use strict";

import React, {PropTypes} from "react";

export const EditAgentSection = ({property, updateFormState}) => {
    console.log("property: ", property)
    if (property && !property.agent.length) {
        return (
            <div className="container text-center">
                <div className="row">
                    <div id="editAgentNone" className="well col-sm-8 col-sm-offset-3">
                        <button id="addAgentNone" className="btn btn-primary btn-raised">Add an Agent</button>
                    </div>
                </div>
            </div>
        );
    }

};

EditAgentSection.propTypes = {
    property: PropTypes.object,
    updateFormState: PropTypes.func.isRequired
};