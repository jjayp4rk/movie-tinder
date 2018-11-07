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
      collapse: false,
      activetab: 0
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  navItemToggle = e => {
    let tab = e.target.name;
    this.setState({
      activetab: Number(tab)
    });
  };

  toggleActive() {
    return;
  }
  render() {
    return (
      <div>
        <Navbar color="unique-color-dark" dark expand="md" scrolling>
          <NavbarBrand onClick={this.navItemToggle} name="0" href="/">
            <strong>
              MOVIE <Fa icon="heart" /> TINDER
            </strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem
                onClick={this.navItemToggle}
                active={this.state.activetab === 1 ? true : false}
              >
                <NavLink name="1" to="/mymovies">
                  MOVIES
                </NavLink>
              </NavItem>
              <NavItem
                onClick={this.navItemToggle}
                active={this.state.activetab === 2 ? true : false}
              >
                <NavLink name="2" to="/tvshows">
                  TV SHOWS
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
