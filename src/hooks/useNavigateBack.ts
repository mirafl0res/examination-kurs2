import { useNavigate } from "react-router-dom";

type UseNavigateBackOptions = {
  fallbackTo?: string;
};

export function useNavigateBack(options: UseNavigateBackOptions = {}) {
  const { fallbackTo = "/"} = options;

  const navigate = useNavigate();

  return () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackTo, { replace: true });
    }
  };
}
