import { useRef, useState } from "react";
import { Icons } from "../ui/icons";
import { useApiKeyStore } from "../../store/apiKeyStore";
import "./ApiKeyInput.css";

const ApiKeyInput = () => {
  const apiKey = useApiKeyStore((s) => s.apiKey);
  const setApiKey = useApiKeyStore((s) => s.setApiKey);
  const clearApiKey = useApiKeyStore((s) => s.clearApiKey);

  const [value, setValue] = useState(() => apiKey ?? "");
  const [saved, setSaved] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const onSave = () => {
    setApiKey(value.trim() || "");
    setSaved(true);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setSaved(false), 1500);
  };

  const onClear = () => {
    clearApiKey();
    setValue("");      
    setSaved(false);
  };

  return (
    <section className="user-api-page">
      <div className="api-image" aria-hidden>
        <img src="/food.png" alt="Food" />
      </div>

      <div className="api-form">

      <p className="user-api-text">
        Recipe Finder uses the Spoonacular API to search a large database of recipes. For the best experience, we recommend using your own personal API key.
      </p>

      <ul className="user-api-list">
        <li>Register at <a href="https://spoonacular.com/registerEmail" target="_blank" rel="noopener noreferrer">spoonacular.com</a> to get your API key</li>
        <li>Paste the key into the field below</li>
        <li>Click <strong>Save</strong> and get cooking</li>
      </ul>

      <label htmlFor="spoonacular-api-key">
        Spoonacular API key
      </label>

      <div className="key-input-row">
        <input
          id="spoonacular-api-key"
          className="api-key-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your personal Spoonacular API key"
        />

        <div className="button-group">
          <button className="btn-save" onClick={onSave} aria-label="Save API key">
            <Icons.check /> Save
          </button>

          <button className="btn-clear" onClick={onClear} aria-label="Clear API key">
            Clear
          </button>
        </div>
      </div>

      <p className="key-input-text">
        Your key is saved locally and will be used instead of the default key when provided.
      </p>

      {saved && <div className="saved-msg">API key saved</div>}
      </div>
    </section>
  );
};

export default ApiKeyInput;
