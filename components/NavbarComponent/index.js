import {Nav, Navbar} from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">NextJSBootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/posts">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
