import React from 'react';
import imgAboutSection from './res/images/tablesetting2.jpg';
import './about.css';

function AboutSecton() {
    return (
        <div className="absec-row absec-padding-64" id="about">

            <div className="absec-col m6 absec-padding-large ">
                {/**absec-hide-small ??? */}
                <img
                    src={imgAboutSection} className="absec-round absec-image absec-opacity-min"
                    alt="Table Setting"
                    width="600" height="750" />
            </div>

            <div className="absec-col m6 absec-padding-large">
                <h1 className="absec-center">About Catering</h1><br />
                <h5 className="absec-center">Tradition since 1889</h5>
                <p className="absec-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="absec-tag absec-light-grey">seasonal</span> ingredients.</p>
                <p className="absec-large absec-text-grey absec-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>
    )
}

export default AboutSecton;
