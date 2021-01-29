import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import "../css/Footer.css"

const Footer = () => (
  <div className="footer">
    <div class ="container-fluid footer-nav">
      <Navbar>
      <Nav className = "ml-sm-2 mr-0">© 2020 Vivaticket</Nav>
      </Navbar>
    </div>
  </div>
);

export default Footer;