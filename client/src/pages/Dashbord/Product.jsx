import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Link
        className="hover:no-underline   font-semibold text-lg bg-blue-400 w-fit px-4 py-1 text-white rounded-md mb-3 cursor-pointer   "
        to={"/productCreate"}
      >
        Product Add
      </Link>
    </div>
  );
};

export default Product;
