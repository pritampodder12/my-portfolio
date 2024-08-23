import React, { useState, useEffect } from "react";

const useReactPath = () => {
  const [hash, setHash] = useState(window.location.hash);
  const listenToPopstate = () => {
    const winPath = window.location.hash;
    setHash(winPath);
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return hash.substring(1);
};

export default useReactPath;
