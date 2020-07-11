import React, { useState, useContext } from "react";
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
} from "mdbreact";

function NavBar() {
    const [state] = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

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
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link to="signin">
                                <MDBBtn className="aqua-gradient">
                                    SIGN IN
                                </MDBBtn>
                            </Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </>
    );
}

export default NavBar;
