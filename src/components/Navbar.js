import React, { useState, useContext } from "react";

import "firebase/auth";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownToggle,
    MDBIcon,
    MDBDropdownMenu,
} from "mdbreact";
import { actions } from "../AccountActions";

function NavBar() {
    const [state, dispatch] = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    function toggleCollapse() {
        setIsOpen(!isOpen);
    }
    const handleOut = () => {
        actions
            .signOut()
            .then(() => dispatch({ type: "LOGGED_IN", isLogged: false }));
    };
    return (
        <>
            <MDBNavbar color="white" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="black-text">Favourite Songs</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <Link to="/">Home</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/explore">Explore</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {state.isLogged ? (
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu
                                        className="dropdown-default"
                                        basic
                                        right
                                    >
                                        <MDBDropdownItem>
                                            <Link to="/profile">Profile</Link>
                                        </MDBDropdownItem>

                                        <MDBDropdownItem onClick={handleOut}>
                                            <a href="/">Log Out</a>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        ) : (
                            <MDBNavItem>
                                <Link to="signin">
                                    <MDBBtn className="aqua-gradient">
                                        SIGN IN
                                    </MDBBtn>
                                </Link>
                            </MDBNavItem>
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </>
    );
}

export default NavBar;
