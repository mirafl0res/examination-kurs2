import { Icon } from "./ui/icon";
import { Icons } from "./ui/icons";

function Footer() {
  return (
    <div style={{ paddingTop: "3.5rem" }}>
      <div className="footer">
        © 2026 by Philip & Jennifer
        <span className="footer-icon">
          <Icon icon={Icons.chefHat} size={13} />
        </span>
      </div>
    </div>
  );
}

export default Footer;
