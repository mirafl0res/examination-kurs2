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
      <div className="logo">Recipe finder <Icons.utensils/>
      </div> 
      </NavLink>

      <button className="burgermenu" onClick={onMenuOpen}><Icons.menu/></button>
    </nav>
  );
}
  

export default Navbar

