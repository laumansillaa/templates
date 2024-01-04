import { useEffect } from "react";

export const useClearShowErrors = (errors, showError, setShowError) => {
  const handleClearShowErrors = () => {
    if (
      Object.keys(errors).length === 0 ||
      (Object.keys(errors).length > 1 && Object.keys(showError).length)
    ) {
      const updatedShowError = { ...errors };
      setShowError(updatedShowError);
    }
  };

  useEffect(() => {
    handleClearShowErrors();
  }, [errors]);
};
