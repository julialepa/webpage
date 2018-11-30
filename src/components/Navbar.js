import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class MyNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                    <Link to='/'>Home</Link>
                            </NavItem>
                            <NavItem>

                                    <Link to='/about'>About</Link>

                            </NavItem>
                            <NavItem>

                                    <Link to='/contacts'>Contacts</Link>

                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                      </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default MyNavbar;