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
        <Navbar color="unique-color-dark" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>
              MOVIE <Fa icon="heart" /> TINDER
            </strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/mymovies">MOVIES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/tvshows">TV SHOWS</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              {/* <NavItem>
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
              </NavItem> */}
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
