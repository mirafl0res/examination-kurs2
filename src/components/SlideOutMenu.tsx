import { Link } from "react-router-dom";
import { useMenuStore } from "../store/menuStore";

function SlideOutMenu() {
    const isOpen = useMenuStore((state) => state.isOpen)
    const close = useMenuStore((state) => state.close)
    const stop = (e: React.MouseEvent) => e.stopPropagation();

    const links = [
      { to: "/", label: "Home" },
      { to: "/settings", label: "Settings" },
      { to: "/favorites", label: "Favorites" },
];

  return (
        <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={close}>
          <div className="menu-panel" onClick={stop}>
            <button className="close-menu-btn" onClick={close}>✕</button>

            <h3>Meny</h3> 
            {links.map(({ to, label }) => (
             <Link key={to} to={to} onClick={close}>{label}</Link>))}
          </div>
        </div>
  )
}

export default SlideOutMenu
