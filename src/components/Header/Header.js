import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  const headerList = ["The School", "Academics", "Life @ DBTR", "Contact Us"];
  return (
    <Fragment>
      <div className="bg-white flex flex-row items-center">
        <div className="header flex flex-row grow justify-between p-5 pl-6">
          <img
            src="assets/images/header_logo.png"
            alt="DBTR logo"
            className="pl-14"
          />
          <div className="pw-right-view flex flex-row items-center grow justify-evenly text-xl cursor-pointer">
            {headerList.map((item, index) => (
              <div key={index} className="header-link">
                {item}
              </div>
            ))}
            <div className="flex flex-row justify-evenly gap-14">
              <button className="csr-button">CSR</button>
              <button className="donate-button mr-20">Donate ♥</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
