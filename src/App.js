import "./App.css";

import React from "react";

const App = () => {
  return (
    <div className="header">
      <div className="top">
        <ul className="left-text">
          <li>
            <a href="#">Welcome to Shoprite</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Select Your Store Location</a>
          </li>
        </ul>
        <ul className="right-text">
          <li>
            <a href="#">Need Help?</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">Sign in or Create Account</a>
          </li>
        </ul>
      </div>

      <div className="middle">
        <ul className="middle-section">
          <li className="logo">Shoprite Logo</li>
          <li className="search">
            <input type="text" placeHolder="Search.." />
          </li>
          <li className="past-icon">
            <a href="#">Past Purchases</a>
          </li>
          <li className="cart-picture">
            <a href="#">Cart Picture</a>
          </li>
        </ul>
        <div className="bottom">
          <nav>
            <li>Shoprite Logo</li>
            <button>Shop Aisle</button>
            <button>Weekly Circular</button>
            <button>Save</button>
            <button>Discover</button>
            <button>Careers</button>
            <button>The Recipe Shop</button>
          </nav>
        </div>
      </div>

      <div className="grid-container">
        <div className="item1">Carousel (Hero)</div>
        <div className="item2">Digital Coupons</div>
        <div className="item3">Weekly Circular</div>
        <div className="item4">Digital Spotlight</div>
        <div className="item5">Bowl & Basket</div>
        <div className="item6">Right Price Promise</div>
        <div className="item7">Paperbird</div>
        <div className="item8">Get Game Day Ready</div>
        <div className="item9">Right Price. Right Recipes</div>
        <div className="item10">Honey Bunches of Oats</div>
        <div className="item11">Recipe Shop</div>
        <div className="item12">Well Everyday</div>
        <div className="item13">Pharmacy</div>
      </div>

      <div className="footer">
        <ul className="left-footer">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Recalls</a>
          </li>
          <li>
            <a href="#">Policies</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Shoprite Wines & Spirits</a>
          </li>
        </ul>

        <ul className="right-footer">
          <li>StayConnected</li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#">Pintrest</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Potluck</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
