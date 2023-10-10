import React, { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";
import { MiddlewareArray } from "@reduxjs/toolkit";
import {
  MdDelete,
  MdEdit,
  MdOutlineToggleOff,
  MdOutlineToggleOn,
  MdShowChart,
  MdVisibility,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  Createpermition,
  GetAllpermition,
  updatepermition,
  updatepermitionstatus,
  permitiondelete,
} from "../../features/Admin/adminapiSlice";
import { CreateTost } from "../../utils/toastifyAlert";
import { setMessageEmpty } from "../../features/Product/productSlice";
import { setAdminMessageEmpty } from "../../features/Admin/adminSlice";
import { timeAgoFromMongoDB } from "../../utils/timeagoFunction";
import {
  CreateBrand,
  GetallBrand,
} from "../../features/Product/productapiSlice";

const Brand = () => {
  const [type, settype] = useState("create");
  const [id, setid] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const admin = useSelector((state) => state.admin);
  const product = useSelector((state) => state.product);
  const [input, setinput] = useState("");
  const [preview, setpreview] = useState(null);
  const [file, setfile] = useState(null);
  const dispatch = useDispatch();
  console.log(admin.permission);

  const handlepermitonsubmit = () => {
    // dispatch(Createpermition({ name: input }));

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("logo", file);
    dispatch(CreateBrand(form_data));

    setinput("");
    setModalShow(false);
  };
  const handlepermitonupdate = () => {
    dispatch(updatepermition({ name: input, _id: id }));
    setinput("");
    setModalShow(false);
    settype("create");
  };
  const handleupdate = (item) => {
    settype("edit");
    setinput(item.name);
    setid(item._id);
    setModalShow(true);
    // dispatch(updatepermition(item));
  };

  const handleclosemodel = () => {
    setModalShow(false);
    setinput("");
    settype("create");
  };

  useEffect(() => {
    if (product.error) {
      CreateTost(product.error, "error");
      dispatch(setMessageEmpty());
    }
    if (product.message) {
      CreateTost(product.message, "success");
      dispatch(setMessageEmpty());
    }
  }, [product.error, product.message]);

  const handlePreview = (e) => {
    setpreview(URL.createObjectURL(e.target.files[0]));
    setfile(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(GetallBrand());
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <>
      <p
        onClick={() => setModalShow(true)}
        className="bg-blue-400 p-2 rounded-md text-white font-semibold w-fit mb-2"
      >
        Brand
      </p>

      <div className="row">
        {type == "create" ? (
          <Popup Header="Add Brand" show={modalShow} onHide={handleclosemodel}>
            <p>Name :</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              name="name"
              className="border  w-full my-2 p-1 rounded-md"
            />
            <label htmlFor="img">
              <img
                src={preview}
                className="w-[500px]  h-[250px] object-cover rounded-md my-3"
                alt="no images"
              />
              <input
                type="file"
                className="hidden"
                id="img"
                value=""
                onChange={handlePreview}
              />
            </label>
            <p
              onClick={handlepermitonsubmit}
              className="bg-blue-400 text-white font-semibold text-center py-1 rounded-md  cursor-pointer"
            >
              Save
            </p>
          </Popup>
        ) : (
          <Popup Header="Edit Brand" show={modalShow} onHide={handleclosemodel}>
            <p>Name :</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              name="name"
              className="border  w-full my-2 p-1 rounded-md"
            />
            <p
              onClick={handlepermitonupdate}
              className="bg-blue-400 text-white font-semibold text-center py-1 rounded-md  cursor-pointer"
            >
              Save
            </p>
          </Popup>
        )}

        <div className="col-md-12">
          <div className="flex gap-4  p-2 font-semibold">
            <p className="w-4/12">Name </p>
            <p className="w-4/12">Status </p>
            <p className="w-4/12">photo </p>
            <p className="w-4/12">Actions </p>
          </div>
          {product?.brand?.map((item, index) => {
            return (
              <div className="flex gap-4    p-2 items-center ">
                <p className="w-4/12">{item.name} </p>
                <p className="w-4/12">{item.status ? "on" : "off"} </p>
                <p className="w-4/12">
                  <img
                    src={item.logo}
                    className="h-12   w-20 rounded-md"
                    alt=""
                  />
                </p>
                <p className="w-4/12">Actions </p>
              </div>
            );
          })}
          {/* loding animation start  */}
          {product?.loading && (
            <div className="flex gap-4   p-2 items-center  animate-pulse  border rounded-md">
              <p className="w-4/12 bg-slate-400 h-7 rounded-md "> </p>
              <p className="w-4/12 bg-slate-300 h-7 rounded-md "> </p>
              <p className="w-4/12  ">
                <div
                  className="h-12   w-20 rounded-md bg-slate-400"
                  alt=""
                ></div>
              </p>
              <p className="w-4/12 bg-slate-300 h-7 rounded-md "></p>
            </div>
          )}
          {/* loding animation end  */}
        </div>
      </div>
    </>
  );
};

export default Brand;
