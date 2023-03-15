import "./navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="name">
      <h1>S<span className="logo">S</span></h1>
      </div>
      <ul className="aboutNavbar">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Hire me</li>
       
      </ul>
    </div>
  );
}

export default NavBar;