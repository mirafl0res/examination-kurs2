import { NavLink } from "react-router-dom";

type NavbarProps = {
  onMenuOpen: () => void;
};


function Navbar({ onMenuOpen }: NavbarProps) {
    
  return (
    <nav className="navbar">
     
      <NavLink to="/"> 
      <div className="logo">Recipe finder</div> 
      </NavLink>

    <button className="menu-button" onClick={onMenuOpen}>☰</button>
    </nav>
  );
}
  

export default Navbar

