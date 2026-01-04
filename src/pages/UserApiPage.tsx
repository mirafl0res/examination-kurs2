import { Icons } from "../components/ui/icons";
import { useNavigateBack } from "../hooks/useNavigateBack"
import ApiKeyInput from "../components/settings/ApiKeyInput";
import "./UserApiPage.css"



function UserApiPage() {

    const goBack = useNavigateBack({ fallbackTo: "/" });

  return (
    <div className="user-api-container">
      <div className="user-api-header">
        <button onClick={goBack} className="back-button">
        <Icons.back /> Back</button>
        <h1>Get Started!</h1>   
      </div>
                <ApiKeyInput />

    </div>
  )
}

export default UserApiPage
