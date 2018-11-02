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
import { Link } from "react-router-dom";
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
        <Navbar expand="md" scrolling>
          <Link to="/">
            <NavbarBrand>
              <strong>Movie Tinder</strong>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/mymovies">My Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">My TV-Shows</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Link3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Link4</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              {/* <NavItem>
                  <NavLink to="#">
                    <Fa icon="facebook" />
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
                </NavItem> */}
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
