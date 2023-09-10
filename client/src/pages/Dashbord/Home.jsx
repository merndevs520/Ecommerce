import { MdShoppingCartCheckout } from "react-icons/md";
import "../../assets/plugins/datatables/datatables.min.css";
import DataTable from "datatables.net-dt";

const Home = () => {
  new DataTable(".datatable");
  return (
    <>
      <p className="text-3xl font-semibold text-zinc-600 mb-4">
        Welcome to deshbord
      </p>

      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card hover:bg-green-400 group group-hover:text-white duration-300 cursor-pointer">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className=" ring-2 ring-green-400  p-2 rounded-full group-hover:ring-white  ">
                  <MdShoppingCartCheckout className=" group-hover:text-white text-2xl text-green-400" />
                </span>
                <div className="dash-count group-hover:text-white font-semibold">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-zinc-800 font-semibold mt-4 group-hover:text-white">
                  Salse
                </h6>
                <div className="progress progress-sm group-hover:bg-slate-400">
                  <div className="progress-bar bg-green-400 group-hover:bg-white w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card hover:bg-green-400 group group-hover:text-white duration-300 cursor-pointer">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className=" ring-2 ring-green-400  p-2 rounded-full group-hover:ring-white  ">
                  <MdShoppingCartCheckout className=" group-hover:text-white text-2xl text-green-400" />
                </span>
                <div className="dash-count group-hover:text-white font-semibold">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-zinc-800 font-semibold mt-4 group-hover:text-white">
                  Salse
                </h6>
                <div className="progress progress-sm group-hover:bg-slate-400">
                  <div className="progress-bar bg-green-400 group-hover:bg-white w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card hover:bg-green-400 group group-hover:text-white duration-300 cursor-pointer">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className=" ring-2 ring-green-400  p-2 rounded-full group-hover:ring-white  ">
                  <MdShoppingCartCheckout className=" group-hover:text-white text-2xl text-green-400" />
                </span>
                <div className="dash-count group-hover:text-white font-semibold">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-zinc-800 font-semibold mt-4 group-hover:text-white">
                  Salse
                </h6>
                <div className="progress progress-sm group-hover:bg-slate-400">
                  <div className="progress-bar bg-green-400 group-hover:bg-white w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card hover:bg-green-400 group group-hover:text-white duration-300 cursor-pointer">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className=" ring-2 ring-green-400  p-2 rounded-full group-hover:ring-white  ">
                  <MdShoppingCartCheckout className=" group-hover:text-white text-2xl text-green-400" />
                </span>
                <div className="dash-count group-hover:text-white font-semibold">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-zinc-800 font-semibold mt-4 group-hover:text-white">
                  Salse
                </h6>
                <div className="progress progress-sm group-hover:bg-slate-400">
                  <div className="progress-bar bg-green-400 group-hover:bg-white w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="datatable  table table-hover table-center mb-0 ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Specialities</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#SP001</td>

                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img"
                              src="assets/img/specialities/specialities-01.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile.html">Urology</a>
                        </h2>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i> Edit
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
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

export default Home;
