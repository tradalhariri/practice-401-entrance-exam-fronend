import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton';
import {withAuth0} from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Favorite Cats</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/fav">Fav Drinks</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
          </Nav>
          
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </Navbar.Collapse>
        </Container>
      </Navbar>



    );
  }
}

export default withAuth0(Header);
