import React from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">حونیس</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" className="text-white nav-link">
                خانه
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/courses" className="text-white nav-link">
                دوره ها
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/about"
                className={(link) =>
                  link.isActive
                    ? "text-success nav-link"
                    : "text-white nav-link"
                }
              >
                درباره ما
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" className="text-white nav-link">
                ثبت نام
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
