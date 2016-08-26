import React from 'react';

import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>jsonplaceholder-client</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/home' }}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/posts' }}>
              <NavItem eventKey={2}>Post</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/albums' }}>
              <NavItem eventKey={3}>Album</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/about' }}>
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
