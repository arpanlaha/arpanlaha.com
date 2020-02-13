import React, { Component, ReactNode, Props } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

interface NavState {
  collapseOpen: boolean;
}

export default class NavBar extends Component<Props<Component>, NavState> {
  constructor(props: Props<Component>) {
    super(props);
    this.state = {
      collapseOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(): void {
    this.setState({ collapseOpen: !this.state.collapseOpen });
  }

  render(): ReactNode {
    return (
      <Navbar class="navbar" expand="md">
        <NavbarBrand href="/">Arpan Laha</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/arpanlaha">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://linkedin.com/arpanlaha">LinkedIn</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
