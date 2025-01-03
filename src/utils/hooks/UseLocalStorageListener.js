/**
 * @file: /src/utils/hooks/UseLocalStorageListener.js
 * @author: dongyang
 */
import { useEffect } from "react";

const useLocalStorageListener = (key, callback) => {
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        callback(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, callback]);
};

export default useLocalStorageListener;
