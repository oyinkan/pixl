import React from "react";
import facebook from "./../images/facebook.svg";
import instagram from "./../images/instagram.svg";
import twitter from "./../images/twitter.svg";

export default function Footer() {
  return(
    <footer className="flex justify-between items-center pb-4">
      <div className="flex">
        <a href="#" className="block pr-4">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="#" className="block pr-4">
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="#" className="block pr-4">
          <img src={twitter} alt="twitter icon" />
        </a>
      </div>
      <div>
        <p className="text-gray-400 text-base pr-3">© 2021 Pixl. All rights reserved.</p>
      </div>
    </footer>
  );
}