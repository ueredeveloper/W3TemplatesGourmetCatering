import React from 'react';
import imgAbout from './res/images/tablesetting2.jpg';
import './about.css';

function About () {
    return (
        <div className="about-row about-padding-64" id="about">

            <div className="about-col m6 about-padding-large about-hide-small">
                <img
                    src={imgAbout} className="about-round about-image about-opacity-min"
                    alt="Table Setting"
                    width="600" height="750" />
            </div>

            <div className="about-col m6 about-padding-large">
                <h1 className="about-center">About Catering</h1><br />
                <h5 className="about-center">Tradition since 1889</h5>
                <p className="about-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="about-tag about-light-grey">seasonal</span> ingredients.</p>
                <p className="about-large about-text-grey about-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>
    )
}

export default About;
