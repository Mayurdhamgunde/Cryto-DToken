import React from "react";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Header() {
  return (
    <header>
      <div className="blue window" id="logo">
        <div className="logo-div">
          <h1>
            <span role="img" aria-label="tap emoji">
              <MonetizationOnIcon style={{ fontSize: "4rem" }} />
            </span>
            DToken
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
