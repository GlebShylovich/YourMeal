import { useState } from "react";
export function useNotification() {
  const [showNotification, setShowNotification] = useState(false);
  function showNotificationTimeout() {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }
  return {
    showNotification,
    showNotificationTimeout,
  };
}
