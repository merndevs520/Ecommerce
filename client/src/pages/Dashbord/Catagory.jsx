import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Catagorylogo from "../../assets/img/logo-white2.png";
import {
  CreateCatagory,
  CreateTag,
  DeleteTag,
  UpdateTagStatus,
} from "../../features/Product/productapiSlice";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import userFromField from "../../hooks/userFromField";

const Catagory = () => {
  const { input, handleInputChange, resetForm, setinput } = userFromField({
    name: "",

    icon: "",
    parentCatagory: "",
    photo: "",
  });
  const [subCatagory, setSubCatagory] = useState({ show: false, items: null });
  const [tag, setag] = useState("");
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { tag: alltag, catagory: allCatagory } = useSelector(
    (state) => state.product
  );

  const handleclosemodel = () => {
    setModalShow(false);
    setSubCatagory({ show: false, items: null });
    // setinput("");
    resetForm();
    // settype("create");
  };

  const handleCreateTag = () => {
    dispatch(CreateTag({ name: tag }));

    handleclosemodel();
  };

  const handleTagStatusUpdate = (data) => {
    dispatch(UpdateTagStatus({ id: data._id, status: !data.status }));
  };

  const handleDeleteTag = (id) => {
    dispatch(DeleteTag(id));
  };

  const handleShowSubCatagorys = (data) => {
    setSubCatagory({ show: true, items: data });
    console.log(data);
  };
  console.log(input);
  const handlePreview = (e) => {
    console.log(e.target.files[0]);
    setinput((prevstate) => ({
      ...prevstate,
      photo: e.target.files[0],
    }));
  };
  const handleCreateCatagory = () => {
    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("catphoto", input.photo);
    form_data.append("icon", input.icon);
    form_data.append("parentCatagory", input.parentCatagory);

    dispatch(CreateCatagory(form_data));
    handleclosemodel();
  };
  return (
    <div className="">
      <Popup
        Header="All Sub-Catagorys"
        show={subCatagory.show}
        onHide={handleclosemodel}
      >
        {subCatagory?.items?.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </Popup>
      <Popup Header="Add Catagory" show={modalShow} onHide={handleclosemodel}>
        <p>Name :</p>
        <input
          value={input.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          className="border  w-full my-2 p-1 rounded-md"
        />
        <p>Icon :</p>
        <input
          value={input.icon}
          onChange={handleInputChange}
          type="text"
          name="icon"
          className="border  w-full my-2 p-1 rounded-md"
        />
        <p>subCatagory :</p>
        <select
          name="parentCatagory"
          value={input.parentCatagory}
          onChange={handleInputChange}
          className=" text-center  border  w-full my-2 p-1 rounded-md"
          id=""
        >
          <option value="">-- select --</option>
          {allCatagory?.map((item, key) => {
            return (
              <option value={item._id} key={key}>
                {item.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="catphoto" className="w-full">
          <input
            type="file"
            name="photo"
            className="hidden"
            value=""
            onChange={handlePreview}
            id="catphoto"
          />
          <img
            className="w-full h-44 object-contain border my-2 rounded-md "
            src={
              input?.photo ? URL.createObjectURL(input?.photo) : Catagorylogo
            }
            alt=""
          />
        </label>

        <p
          onClick={handleCreateCatagory}
          className="bg-blue-400 text-white font-semibold text-center py-1 rounded-md  cursor-pointer"
        >
          Save
        </p>
      </Popup>

      <h4
        onClick={() => setModalShow(true)}
        className="font-semibold text-xl bg-blue-400 w-fit px-4 py-1 text-white rounded-md mb-3 cursor-pointer "
      >
        Catagory
      </h4>

      <div className=" w-full">
        <table className="w-full  font-semibold ">
          <tr className="w-full bg-slate-100 border  ">
            <th className="p-2 ">Name</th>
            <th>Photo</th>
            <th>Slug</th>
            <th>Sub-catagorys</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          {allCatagory?.map((item, key, array) => {
            return (
              <tr
                key={key}
                className="w-full  hover:bg-slate-50 border  text-gray-600   "
              >
                <td className="p-2 w-3/12">{item.name}</td>
                <td className="p-2 w-1/12">
                  <img
                    src={item.photo}
                    className="w-full h-10 object-cover"
                    alt=""
                  />
                </td>

                <td className="w-2/12">{item.slug}</td>
                <td className="w-2/12     text-sm ">
                  {item?.subCatagory.length > 0 ? (
                    <div className="flex">
                      <p
                        onClick={() => handleShowSubCatagorys(item.subCatagory)}
                        className="bg-gray-200 py-1 w-fit text-gray-500 px-2  my-2 rounded-md cursor-pointer"
                      >
                        Subcatagorys
                      </p>
                      <span className=" border bg-white h-5 px-1  rounded-full">
                        {item.subCatagory.length}
                      </span>
                    </div>
                  ) : (
                    <p className="bg-gray-200 py-1 w-fit text-gray-500 px-2  my-2 rounded-md cursor-pointer">
                      No-items
                    </p>
                  )}
                </td>
                <td className="w-2/12 cursor-pointer   text-center">
                  {item.status ? (
                    <BsToggle2On
                      onClick={() => handleTagStatusUpdate(item)}
                      className=" text-green-400 hover:bg-green-100 p-1 text-3xl rounded-md duration-300"
                    />
                  ) : (
                    <BsToggle2Off
                      onClick={() => handleTagStatusUpdate(item)}
                      className=" text-red-400   hover:bg-red-100 p-1 text-3xl rounded-md duration-300"
                    />
                  )}
                </td>
                <td className="flex gap-2 p-2 ">
                  <MdVisibility className="bg-blue-400 cursor-pointer text-white text-2xl px-1 rounded-md" />
                  <MdEdit className="bg-yellow-400 text-white text-2xl cursor-pointer px-1 rounded-md" />
                  <MdDelete
                    onClick={() => handleDeleteTag(item._id)}
                    className="bg-red-400 text-white text-2xl px-1 rounded-md cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Catagory;
