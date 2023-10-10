import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCreate = () => {
  const [productType, setProductType] = useState("simple");

  console.log(productType);

  return (
    <div>
      <Link
        className="hover:no-underline   font-semibold text-lg bg-blue-400 w-fit px-4 py-1 text-white rounded-md mb-3 cursor-pointer   "
        to={"/product"}
      >
        Back
      </Link>

      <div className="w-full sm:flex gap-4 mt-3">
        <div className="sm:w-8/12 mb-3 sm:mb-0 p-3 rounded-md bg-slate-100 space-y-2">
          <p className="font-semibold ">Add new product</p>

          <p>Name :</p>
          <input
            type="text"
            className="w-full p-1 border rounded-md"
            name="name"
          />

          <p>Product Type :</p>
          <select
            name=""
            id=""
            onChange={(e) => setProductType(e.target.value)}
            className="w-full p-2 bg-blue-400 text-white rounded-md font-semibold  "
          >
            <option value="simple">simple</option>
            <option value="variable">variable</option>
            <option value="group">group</option>
            <option value="external">external</option>
          </select>
          <div
            className={`${productType == "simple" && " bg-blue-200 "}   ${
              productType == "external" && " bg-red-200 "
            }     p-5`}
          ></div>
          <p>shortDesc :</p>
          <textarea
            type="text"
            className="w-full p-1 border rounded-md"
            name="shortDesc"
          />
          <p>longDesc :</p>
          <textarea
            type="text"
            className="w-full p-1 border rounded-md"
            name="longDesc"
          />
        </div>

        {productType == "simple" && (
          <div className="sm:w-4/12 rounded-md p-2 bg-slate-100   ">
            <p className="mt-3 ">Catagory :</p>
            <div className="flex flex-wrap gap-2  my-2">
              <p className="bg-slate-300 px-2 rounded-md">
                <input type="checkbox" /> <span>Woman</span>
              </p>{" "}
              <p className="bg-slate-300 px-2 rounded-md">
                <input type="checkbox" /> <span>Man</span>
              </p>
            </div>
            <p className="mt-3 mb-2">Brand :</p>
            <select
              name=""
              id=""
              className="w-full p-2 bg-blue-400 text-white rounded-md font-semibold  "
            >
              <option value="">--Select--</option>
              <option value="">Mi</option>
              <option value="">Oppo</option>
              <option value="">Apple</option>
            </select>
            <p className="mt-3 mb-2">Tag :</p>
            <select
              name=""
              id=""
              className="w-full p-2 bg-blue-400 text-white rounded-md font-semibold  "
            >
              <option value="">--Select--</option>
              <option value="">Mi</option>
              <option value="">Oppo</option>
              <option value="">Apple</option>
            </select>
          </div>
        )}
        {productType == "external" && (
          <div className="sm:w-4/12 rounded-md p-2 bg-sky-400"></div>
        )}
      </div>
    </div>
  );
};

export default ProductCreate;
