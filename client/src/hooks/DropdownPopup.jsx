import React, { useEffect, useRef, useState } from "react";

const useDropdownPopup = () => {
  const dropdownRef = useRef(null);
  const [show, setshow] = useState(false);

  const handleshow = () => {
    setshow(!show);
  };

  const handleOutSideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setshow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return { show, handleshow, dropdownRef };
};

export default useDropdownPopup;
