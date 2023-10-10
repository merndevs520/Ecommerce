import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateTag,
  DeleteTag,
  UpdateTagStatus,
} from "../../features/Product/productapiSlice";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

const Tag = () => {
  const [tag, setag] = useState("");
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { tag: alltag } = useSelector((state) => state.product);

  const handleclosemodel = () => {
    setModalShow(false);
    // setinput("");
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

  return (
    <div className="">
      <Popup Header="Add Tag" show={modalShow} onHide={handleclosemodel}>
        <p>Name :</p>
        <input
          type="text"
          name="tag"
          className="border  w-full my-2 p-1 rounded-md"
          onChange={(e) => setag(e.target.value)}
        />
        <p
          onClick={handleCreateTag}
          className="bg-blue-400 text-white font-semibold text-center py-1 rounded-md  cursor-pointer"
        >
          Save
        </p>
      </Popup>

      <h4
        onClick={() => setModalShow(true)}
        className="font-semibold text-xl bg-blue-400 w-fit px-4 py-1 text-white rounded-md mb-3 cursor-pointer "
      >
        Tag
      </h4>

      <div className=" w-full">
        <table className="w-full  font-semibold ">
          <tr className="w-full bg-slate-100 border  ">
            <th className="p-2 ">Name</th>

            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          {alltag?.map((item, key) => {
            return (
              <tr
                key={key}
                className="w-full  hover:bg-slate-50 border  text-gray-600   "
              >
                <td className="p-2 w-4/12">{item.name}</td>
                <td className="w-3/12">{item.slug}</td>
                <td className="w-3/12 cursor-pointer   text-center">
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

export default Tag;
