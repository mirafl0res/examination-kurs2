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
        <a href="/">Hem</a>
        
        <a href="/favorites">Favoriter</a>
      </div>
    </div>
  )
}

export default SlideOutMenu
