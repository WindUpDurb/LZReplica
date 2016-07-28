"use strict";

import React from "react";

export const Welcome = () => {
    return (
        <div className="container-fluid">
            <h1 className="welcomeTextColor text-center">Welcome to Listing Zen</h1>
            <div className="row">
                <div className="col-sm-4 col-sm-offset-2 text-center">
                    <img className="welcomeIcon" src="/statics/devicesIcon.png"/>
                    <span className="welcomeText">Beautiful Templates & Material Design Layouts</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/playCircle.png"/>
                    <span className="welcomeText">Fullscreen Gallery with Play, Pause, Next, and Back</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/addEditIcon.png"/>
                    <span className="welcomeText">Add and Edit Content</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/personalizedContent.png"/>
                    <span className="welcomeText">Custom Links to Personalized Content</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/multipleAgents.png"/>
                    <span className="welcomeText">Display Multiple Agents on a Property</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/gridIcon.png" />
                    <span className="welcomeText">Royalty-Free Music</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/" alt=""/>
                    <span className="welcomeText">Image Management</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/aggregationIcon.png"/>
                    <span className="welcomeText">Zillow, Trulia, MLS Aggregation</span>
                </div>
                <div className="col-sm-4 col-sm-offset-2 text-center">
                    <img className="welcomeIcon" src="/statics/touchIcon.png"/>
                    <span className="welcomeText">Easy & Intuitive Interfaces</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/phoneIcon.png"/>
                    <span className="welcomeText">Responsive Mobile Design</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/placeIcon.png" />
                    <span className="welcomeText">Embedded Google Maps</span>
                    <br/>
                    <img className="welcomeIcon" src="/" alt=""/>
                    <span className="welcomeText">Property Management in a Single Dashboard</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/lockIcon.png"/>
                    <span className="welcomeText">Password Protection</span>
                    <br/>
                    <img className="welcomeIcon" src="/statics/cloudDownloads.png"/>
                    <span className="welcomeText">Cloud File Downloads</span>
                    <br/>
                    <img className="welcomeIcon" src="/"/>
                    <span className="welcomeText">Social Media Blast</span>

                </div>
            </div>
        </div>
    );
};