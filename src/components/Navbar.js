import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn
} from "mdbreact";

function NavBar() {
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
                        <MDBNavItem active><Link to="/">Home</Link></MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link to="signup"><MDBBtn className="aqua-gradient">SIGN IN</MDBBtn></Link>
                         
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </>
    );
}

export default NavBar;
