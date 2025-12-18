import { NavLink } from "react-router-dom";
import { Icon } from "./ui/icon";
import { Icons } from "./ui/icons";

type NavbarProps = {
  onMenuOpen: () => void;
};

function Navbar({ onMenuOpen }: NavbarProps) {
    
  return (
    <nav className="navbar">
     
      <NavLink to="/"> 
      <div className="logo">Recipe finder <Icon icon={Icons.utensils}/>
      </div> 
      </NavLink>

      <button className="menu-button" onClick={onMenuOpen}><Icon icon={Icons.menu}/>
      </button>
    </nav>
  );
}
  

export default Navbar

