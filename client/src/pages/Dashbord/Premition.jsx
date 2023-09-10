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
import { setMessageEmpty } from "../../features/Auth/authSlice";
import { setAdminMessageEmpty } from "../../features/Admin/adminSlice";
import { timeAgoFromMongoDB } from "../../utils/timeagoFunction";

const Premition = () => {
  const [type, settype] = useState("create");
  const [id, setid] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const admin = useSelector((state) => state.admin);
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  console.log(admin.permission);

  const handlepermitonsubmit = () => {
    dispatch(Createpermition({ name: input }));
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
    if (admin.error) {
      CreateTost(admin.error, "error");
      dispatch(setAdminMessageEmpty());
    }
    if (admin.message) {
      CreateTost(admin.message, "success");
      dispatch(setAdminMessageEmpty());
    }
  }, [admin.error, admin.message]);

  return (
    <>
      <p
        onClick={() => setModalShow(true)}
        className="bg-blue-400 p-2 rounded-md text-white font-semibold w-fit mb-2"
      >
        Permitions
      </p>

      <div className="row">
        {type == "create" ? (
          <Popup
            Header="Add pemition"
            show={modalShow}
            onHide={handleclosemodel}
          >
            <p>Name :</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              name="name"
              className="border  w-full my-2 p-1 rounded-md"
            />
            <p
              onClick={handlepermitonsubmit}
              className="bg-blue-400 text-white font-semibold text-center py-1 rounded-md  cursor-pointer"
            >
              Save
            </p>
          </Popup>
        ) : (
          <Popup
            Header="Edit pemition"
            show={modalShow}
            onHide={handleclosemodel}
          >
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
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className=" table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Create at</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admin.permission?.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.name}</td>
                          <td>{item.slug}</td>
                          <td>{timeAgoFromMongoDB(item.createdAt)}</td>

                          <td
                            onClick={() =>
                              dispatch(
                                updatepermitionstatus({
                                  status: !item.status,
                                  _id: item._id,
                                })
                              )
                            }
                            className="   cursor-pointer"
                          >
                            {item.status ? (
                              <MdOutlineToggleOn className="text-4xl rounded-md text-green-400 w-fit border p-1 " />
                            ) : (
                              <MdOutlineToggleOff className="text-4xl rounded-md text-red-400 w-fit border p-1 " />
                            )}
                          </td>
                          <td className="flex gap-2">
                            <MdVisibility className="bg-blue-400 cursor-pointer text-white text-2xl px-1 rounded-md" />
                            <MdEdit
                              onClick={() => handleupdate(item)}
                              className="bg-yellow-400 text-white text-2xl cursor-pointer px-1 rounded-md"
                            />
                            <MdDelete
                              onClick={() =>
                                dispatch(
                                  permitiondelete({
                                    _id: item._id,
                                  })
                                )
                              }
                              className="bg-red-400 text-white text-2xl px-1 rounded-md cursor-pointer"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premition;
