import { Link } from "react-router-dom";
import { useMenuStore } from "../store/menuStore";

function SlideOutMenu() {
    const isOpen = useMenuStore((state) => state.isOpen)
    const close = useMenuStore((state) => state.close)

  return (
        <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={close}>
            <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
                <button className="close-menu-btn" onClick={() => {close();}}
                >✕</button>

        <h3>Meny</h3>
     <Link to="/" onClick={close}>Hem</Link>
        <Link to="/recipes" onClick={close}>Recept</Link>
        <Link to="/favorites" onClick={close}>Favoriter</Link>
      </div>
    </div>
  )
}

export default SlideOutMenu
