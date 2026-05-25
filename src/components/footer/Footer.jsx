import React from "react";
import { FaFacebook } from "react-icons/fa";
<FaFacebook />

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
