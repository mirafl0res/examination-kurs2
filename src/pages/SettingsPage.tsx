import { useNavigateBack } from "../hooks/useNavigateBack"

function SettingsPage() {

    const goBack = useNavigateBack({ fallbackTo: "/" });

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={goBack}>← Back</button>
    </div>
  )
}

export default SettingsPage
