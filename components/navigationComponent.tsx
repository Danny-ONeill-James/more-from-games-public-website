import type { NextPage } from "next";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import * as React from "react";

const NavigationComponent: NextPage = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src="https://res.cloudinary.com/deftmtx9e/image/upload/v1676545362/More%20From%20Games/siteLogo/mark_dulotp.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    More From Games
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/article">Articles</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <Nav.Link href="/miniatures">Miniatures</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationComponent;