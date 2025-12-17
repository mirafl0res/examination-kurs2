import { useMenuStore } from "../store/menuStore";
import { NavLink } from "react-router-dom";

function Navbar() {
    const toggleMenu = useMenuStore((state) => state.toggle);
  return (
    <nav className="navbar">
     
      <NavLink to="/"> 
      <div className="logo">Recipe finder</div> 
      </NavLink>


      <button className="burgermenu" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}
  

export default Navbar

