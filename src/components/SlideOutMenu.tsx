import { Link } from "react-router-dom";
import { Icon } from "./ui/icon";
import { Icons } from "./ui/icons";

type SlideOutMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function SlideOutMenu({ isOpen, onClose }: SlideOutMenuProps) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/settings", label: "Settings" },
    { to: "/favorites", label: "Favorites" },
  ];

  return (
        <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={close}>
          <div className="menu-panel" onClick={stop}>
            <button className="close-menu-btn" onClick={close}><Icon icon={Icons.close}/></button>

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

export default SlideOutMenu;
