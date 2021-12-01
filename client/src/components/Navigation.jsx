import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Navbar
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/book">
                            Book
                        </Nav.Link>
                        <Nav.Link as={Link} to="/location">
                            Location
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/pricing">
                            Pricing
                        </Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navigation
