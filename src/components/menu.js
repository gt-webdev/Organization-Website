import React from 'react';
import {Link} from 'react-router'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var NavDropdown = require("react-bootstrap/lib/NavDropdown");

class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <h1 className="sr-only">GT-WebDev</h1>
            <Link to="/"><span className="webdev-logo">&lt;<span className="webdev-logo-gt">gt</span><span className="webdev-logo-hyphen">-</span><span className="webdev-logo-webdev">webdev</span>/&gt;</span></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/events"><NavItem>Events</NavItem></LinkContainer>
            <LinkContainer to="/learn"><NavItem>Learn</NavItem></LinkContainer>
            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
            <LinkContainer to="/contact"><NavItem>Contact</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

module.exports = Menu;