import { NavLink } from "react-router-dom";
import "./Navbar.css" 
import { Icons } from "./ui/icons";

type NavbarProps = {
  onMenuOpen: () => void;
};

function Navbar({ onMenuOpen }: NavbarProps) {
    
  return (
    <nav className="navbar">
     
      <NavLink to="/"> 
      <div className="logo">
        <span className="logo-icon"><Icons.chefHat/></span>
        Recipe finder
      </div> 
      </NavLink>

      <button className="nav-menu-btn" onClick={onMenuOpen}><Icons.menu/></button>
    </nav>
  );
}
  

export default Navbar

