"use strict";

import React from "react";

export const AgentSection = () => {
    return (
        <div id="agentsSectionDiv" className="container-fluid">
            <div className="row">
                <div className="col-sm-2 col-sm-offset-2">
                    <img src="/statics/agentPhoto.jpg" className="img-responsive agentPhoto" />
                </div>
                <div id="agentText" className="col-sm-3">
                        <span className="whiteText nameText">David U.</span>
                        <br/>
                        <span className="whiteText numberText">(626) 485-5050</span>
                        <br/>
                        <span className="greyText">durbina1991@gmail.com</span>
                        <br/>
                        <span><a className="greyText" href="http://windupdurb.github.io/portfolio-site/" target="_blank">http://windupdurb.github.io/portfolio-site/</a></span>
                        <br/>
                        <span className="greyText">Full-Stack Javascript Developer</span>
                </div>
            </div>
            <div id="iconRow" className="row">
                <div className="col-sm-offset-8 col-sm-4">
                    <img className="contactIcons" src="/statics/twitterIcon.png" />
                    <img className="contactIcons" src="/statics/linkedin.png" />
                    <img className="contactIcons" src="/statics/githubIcon.png" />
                    <img className="contactIcons" src="/statics/blogIcon.png" />
                </div>
            </div>
        </div>
    );
};