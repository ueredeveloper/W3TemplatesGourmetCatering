import React from 'react';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

const style = {
    margin: "auto",
    width: "60%",
  }

function Content() {
    return (
        <div style={style}>
            <About />
            <hr />
            <Menu />
            <hr />
            <Contact />
        </div>
    )
}

export default Content
