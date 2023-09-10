import React from "react";
import loading from "../../assets/img/image_processing20191230-17457-1j1wm8r.gif";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-[1060]">
      <img
        className="w-1/2 mx-auto  object-cover"
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
