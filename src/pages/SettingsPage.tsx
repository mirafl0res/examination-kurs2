import { Icons } from "../components/ui/icons";
import { useNavigateBack } from "../hooks/useNavigateBack"

function SettingsPage() {

    const goBack = useNavigateBack({ fallbackTo: "/" });

  return (
    <div>
      <h1>Settings</h1>
               <button onClick={goBack} className="back-button">
               <Icons.back /> Back
                </button>
    </div>
  )
}

export default SettingsPage
