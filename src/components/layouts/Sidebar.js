import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { ImProfile } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { MdReviews } from "react-icons/md";

const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <>
      <div className="custom-nav d-flex align-items-center justify-content-center">
        <h5>{user?.role === "admin" ? "ADMIN" : "STUDENT"}</h5>
      </div>

      <hr className="custom-hr" />

      <div className="d-flex justify-content-center">
        <Navbar className="flex-column align-items-start gap-4">
          <Link
            className="nav-link d-flex d-flex align-items-center gap-1"
            to="/dashboard"
          >
            <MdDashboard />
            Dashboard
          </Link>

          {user?.role === "admin" && (
            <>
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="/books"
              >
                <MdLibraryBooks />
                Books
              </Link>
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="reviews"
              >
                <MdReviews />
                Reviews
              </Link>
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="students"
              >
                <PiStudentBold />
                Students
              </Link>
            </>
          )}

          <Link
            className="nav-link d-flex align-items-center gap-1"
            to="burrow-history"
          >
            <MdWorkHistory />
            Burrow History
          </Link>
          <Link
            className="nav-link d-flex align-items-center gap-1"
            to="my-books"
          >
            <MdOutlineLibraryBooks />
            My Books
          </Link>
          <Link
            className="nav-link d-flex align-items-center gap-1"
            to="profile"
          >
            <ImProfile />
            Profile
          </Link>
        </Navbar>
      </div>
    </>
  );
};

export default Sidebar;
