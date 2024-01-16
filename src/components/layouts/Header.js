import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/lms-logo.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
// import { logoutUserAction } from "../../pages/user-signup-login/userAction";

function Header() {
  const { user } = useSelector((state) => state.userInfo);
  // const dispatch = useDispatch();

  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary mb-3 custom-nav">
        <Container fluid>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="header" className="header-image" height={80} />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Link className="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt="header"
                    className="header-image"
                    height={80}
                  />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  className="nav-link d-flex justify-content-center align-items-center gap-1"
                  to="/"
                >
                  <FaHome /> Home
                </Link>

                {user?._id ? (
                  <Link
                    className="nav-link d-flex justify-content-center align-items-center gap-1"
                    to="/"
                    // onClick={() => dispatch(logoutUserAction(user?.email))}
                  >
                    <BiSolidLogIn /> Logout
                  </Link>
                ) : (
                  <>
                    <Link
                      className="nav-link d-flex justify-content-center align-items-center gap-1"
                      to="/login"
                    >
                      <BiSolidLogIn /> Login
                    </Link>
                    <Link
                      className="nav-link d-flex justify-content-center align-items-center gap-1"
                      to="/signup"
                    >
                      <SiGnuprivacyguard /> Signup
                    </Link>
                  </>
                )}
              </Nav>

              {/* Sidebar */}
              <div className="d-md-none">
                <Sidebar />
              </div>
              {/* {user?._id && (
                <div className="d-md-none">
                  <Sidebar />
                </div>
              )} */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
