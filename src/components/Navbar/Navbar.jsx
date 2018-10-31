import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Fa
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.scss";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar expand="md" scrolling>
            <NavbarBrand href="/">
              <strong>Movie Tinder</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#">Movies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Random</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Link3</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Link4</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="facebook" />
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">
                    <Fa icon="instagram" />
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default NavigationBar;
