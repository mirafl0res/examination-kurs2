import IconInfo from "../ui/IconInfo";
import { Icons } from "../ui/icons";
import "./IngredientStatus.css";

type Ing = { id: number; name: string };

type Props = {
  used?: Ing[];
  missed?: Ing[];
};

export default function IngredientStatus({ used, missed }: Props) {
  return (
    <div className="ingredient-status">
      {used && used.length > 0 && (
        <div className="ingredient-status__row used">
          <IconInfo icon={Icons.check} text="You have:" className="ingredient-status__label" />
          <div className="ingredient-status__pills">
            {used.map((u) => (
              <span key={u.id} className="ingredient-pill">
                {u.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {missed && missed.length > 0 && (
        <div className="ingredient-status__row missed">
          <IconInfo icon={Icons.alert} text="You need:" className="ingredient-status__label" />
          <div className="ingredient-status__pills">
            {missed.map((m) => (
              <span key={m.id} className="ingredient-pill">
                {m.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
