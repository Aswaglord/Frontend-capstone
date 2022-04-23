import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const logoutHandler = () => {
    navigate("/");
    props.setIsAuthenticated(false);
    props.setNavbar(false);
  };

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/weather" className="link">
        Weather
      </Link>
      <Link to="/swapi" className="link">
        Swapi
      </Link>
      <Link to="/dice-roll" className="link">
        Dice Roll
      </Link>
      <Link to="/timer" className="link">
        Timer
      </Link>
      <Link to="/arithmetic" className="link">
        Arithmetic
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <button onClick={() => logoutHandler()} className="link">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
