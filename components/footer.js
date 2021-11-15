import React from "react";
import '../css/footer.css'

function Footer(){
  return(
    <footer>
      <p>
      &copy; Copyright 2021. Devijo Developer Portfolio Website
      </p>
      <p>
        <a className="footer-link">
          <span>LinkedIn</span> &nbsp;
        </a>
        <a className="footer-link">
          <span>GitHub</span> &nbsp;
        </a>
        <a className="footer-link">
          <span>Twitter</span> &nbsp;
        </a>
        <a className="footer-link">
          <span>Instagram</span> &nbsp;
        </a>
      </p>
    </footer>
  )
}
export default Footer