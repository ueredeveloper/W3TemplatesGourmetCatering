import React from 'react';
import imgMenu from './res/images/tablesetting.jpg';
import './menu.css';
const style = {
    width: "100%"
}

function Menu() {

    return (
        <div className="menu-row menu-padding-64" id="menu">

            <div className="menu-col l6 menu-padding-large">
                <h1 className="menu-center">Our Menu</h1><br />
                <h4>Bread Basket</h4>
                <p className="menu-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                <h4>Honey Almond Granola with Fruits</h4>
                <p className="menu-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                <h4>Belgian Waffle</h4>
                <p className="menu-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />

                <h4>Scrambled eggs</h4>
                <p className="menu-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                <h4>Blueberry Pancakes</h4>
                <p className="menu-text-grey">With syrup, butter and lots of berries 8.50</p>
            </div>

            <div className="menu-col l6 menu-padding-large">
                <img src={imgMenu} className="menu-round menu-image menu-opacity-min"
                    alt="Menu" style={style} />
            </div>
        </div>
    )
}

export default Menu
