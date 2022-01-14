import BsNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import classNames from "classnames";
import style from "./Navbar.module.css";

function Navbar() {
    return(
        <BsNavbar bg="secondary" expand="lg" variant="dark">
        <Container>
            <BsNavbar.Brand href="#home">
                <h2 className="text-uppercase m-0 py-2">Suit Game</h2>
            </BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls="basic-navbar-nav"/>
            <BsNavbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link
                    href="/register"
                    className={classNames("text-uppercase text-light",style.navLink)}
                    >
                    Register
                    </Nav.Link>
                    <Nav.Link
                    href="/login"
                    className={classNames("text-uppercase text-light",style.navLink)}
                    >
                    Login
                    </Nav.Link>
                </Nav>
            </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    )
}

export default Navbar;