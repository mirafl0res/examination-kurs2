import { Link } from "react-router-dom";

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
    <div
      className={`menu-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="menu-panel" onClick={stop}>
        <button className="close-menu-btn" onClick={onClose}>
          ✕
        </button>

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
