import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
        </li>
        
        {/* shop */}
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["shop"]}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              categories
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  Men's Fashion
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                  Womens's Fashion
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                  Home, kitchen, utilities
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                  TV, Laptops, gadgets
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                  Footwears
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}>
                  Headphones
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                  furnitures
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                  paintings
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                  other utilities
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
              Products
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/1"}>
                  hoodies
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                  shirts
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                  t-shirts
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                  jeans
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                  dresses
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-fixed-image/1"}>
                  tops
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/1"}>
                  beds & shevles
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/1"}>
                  chairs & sofas
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/1"}>
                  wardrobe
                  </Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["collection"]}
          </Link>
        </li>
        
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/my-account"}>
          account
            </Link>
          <ul className="sub-menu">
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                {strings["my_account"]}
              </Link>
            </li> */}
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {strings["login_register"]}
              </Link>
            </li>
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {strings["about_us"]}
              </Link>
            </li> */}
          </ul>
        </li>
       
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
