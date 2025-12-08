import { useMenuStore } from "../store/menuStore";


function Navbar() {
    const toggleMenu = useMenuStore((state) => state.toggle);
  return (
    <nav className="navbar">
      <div className="logo">Recipe finder</div>

      <button className="burgermenu" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}
  

export default Navbar

