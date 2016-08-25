import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Jsonplaceholder-Client</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/home">Home</NavItem>
            <NavItem eventKey={2} href="/posts">Posts</NavItem>
            <NavItem eventKey={3} href="/albums">Album</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
