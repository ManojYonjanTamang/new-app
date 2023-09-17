import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleOnlineStatus() {
      setIsOnline(true);
    }

    function handleOfflineStatus() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);
  return <div>{isOnline ? <>ONLINE</> : <>OFFLINE</>}</div>;
};

export default OnlineStatus;
