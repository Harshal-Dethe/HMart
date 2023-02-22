import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
            </Link>
           </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      categories
                    </Link>
                  </li>
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

              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      Products
                    </Link>
                  </li>
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
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      beds & shevles
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                    chairs & sofas
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      wardrobe
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12 new.png"
                        }
                        alt=""
                      />

                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Collections
            </Link>
          </li>

          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/my-account"}>
              Account
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </li>
            </ul>
          </li> */}
          
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {strings["blog_no_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
