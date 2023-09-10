import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup.jsx";
import { GenerateRandomPassword } from "../../utils/geneateRandompass.js";
import userFromField from "../../hooks/userFromField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Createusers } from "../../features/Admin/adminapiSlice.js";
import { CreateTost } from "../../utils/toastifyAlert.js";
import { setAdminMessageEmpty } from "../../features/Admin/adminSlice.js";
import { isValidEmail } from "../../utils/emailcheck.js";
import { timeAgoFromMongoDB } from "../../utils/timeagoFunction.js";

const User = () => {
  const users = useSelector((state) => state.admin.users);
  const admin = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const { resetForm, handleInputChange, input, setinput } = userFromField({
    username: "",
    email: "",
    role: [],
    password: "",
  });
  console.log(input);

  const [modalShow, setModalShow] = useState(false);

  const handlehidemodel = () => {
    setModalShow(false);
    resetForm();
  };

  const handlerendompass = () => {
    setinput({
      ...input,
      password: GenerateRandomPassword(10),
    });
  };
  const handlesubmite = () => {
    let checkemail = isValidEmail(input.email);
    if (checkemail) {
      dispatch(Createusers(input));
      setModalShow(false);
      resetForm();
    } else {
      CreateTost("Email is not valied", "error");
    }
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
        Add new
      </p>

      <div className="row">
        <Popup Header="Add user" show={modalShow} onHide={handlehidemodel}>
          <label className="mt-2 text-slate-600 font-semibold" htmlFor="">
            Name :
          </label>
          <input
            className="block border w-full p-1 rounded-md focus:outline-none"
            value={input.username}
            onChange={handleInputChange}
            type="text"
            name="username"
          />
          <label className="mt-2 text-slate-600 font-semibold" htmlFor="">
            Email :
          </label>
          <input
            className="block border w-full p-1 rounded-md focus:outline-none"
            value={input.email}
            onChange={handleInputChange}
            type="text"
            name="email"
          />
          <label className="mt-2 text-slate-600 font-semibold block" htmlFor="">
            Role :
          </label>
          <select
            onChange={handleInputChange}
            value={input.value}
            name="role"
            id=""
            className="block w-full p-1 rounded-md"
          >
            <option value="">-select-</option>
            {admin?.role?.map((item, key) => (
              <option className="" value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          <label className="mt-2 text-slate-600 font-semibold" htmlFor="">
            Password :
          </label>
          <p className="flex gap-1 mb-3 ">
            <input
              value={input.password}
              onChange={handleInputChange}
              className="block border w-9/12 p-1 rounded-md focus:outline-none"
              type="text"
              name="password"
            />

            <p
              onClick={handlerendompass}
              className="w-3/12 bg-slate-100 border text-green-400 font-semibold text-center p-1 rounded-md cursor-cell"
            >
              Random
            </p>
          </p>
          <p
            className="bg-blue-500 text-white font-semibold rounded-md text-center py-1"
            onClick={handlesubmite}
          >
            Save
          </p>
        </Popup>

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
                      <th>Email</th>
                      <th>Role</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((item, key) => (
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            ></a>
                            <a href="profile.html">{item.username}</a>
                          </h2>
                        </td>
                        <td>{item.email}</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            ></a>
                            <a href="profile.html">{item?.role?.name}</a>
                          </h2>
                        </td>
                        <td>{timeAgoFromMongoDB(item.createdAt)}</td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                    ))}
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

export default User;
