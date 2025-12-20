import { Link } from "react-router-dom";
import { Icons } from "./ui/icons";
import "./NavigationMenu.css";

type NavigationMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/settings", label: "Settings" },
    { to: "/favorites", label: "Favorite Recipes" },
  ];

  return (
    <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="menu-panel" onClick={stop}>
        <button className="close-menu-btn" onClick={onClose}><Icons.close/></button>

        <h3>Menu</h3>

        {links.map(({ to, label }) => (
          <Link key={to} to={to} onClick={onClose}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavigationMenu;
