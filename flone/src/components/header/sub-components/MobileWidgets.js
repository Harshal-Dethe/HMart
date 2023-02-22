import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <h5>Customer Care</h5>
            </li>
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://12452456012">1800 180 180 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">support@arhmart.com</a>
            </li>
          </ul>
        </div>
      </div>
      <h5>Follow Us</h5>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="//twitter.com" title="Twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="//instagram.com" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="//facebook.com" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="//pinterest.com" title="Pinterest">
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
