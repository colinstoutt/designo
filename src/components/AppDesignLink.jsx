import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AppDesignLink = () => {
  return (
    <a className="image-links__app position-r" href="/app-design">
      <div className="image-links__link-text position-a">
        <h1 className="image-links__link-text-title font-h1 text-white">
          APP DESIGN
        </h1>
        <div className="image-links__link-text-cta font-h3 text-white display-f ai-c jc-c">
          View Projects{" "}
          <span className="text-peach ">
            <KeyboardArrowRightIcon className="right-arrow-icon" />
          </span>
        </div>
      </div>
      <img className="br" src="https://i.imgur.com/vr503gZ.jpg" alt="iphone" />
    </a>
  );
};

export default AppDesignLink;
