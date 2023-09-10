import React from "react";

const ShopPageSidebar = () => {
  return (
    <>
      {" "}
      {/* Start of Sidebar, Shop Sidebar */}
      <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
        {/* Start of Sidebar Overlay */}
        <div className="sidebar-overlay" />
        <a className="sidebar-close" href="#">
          <i className="close-icon" />
        </a>
        {/* Start of Sidebar Content */}
        <div className="sidebar-content scrollable">
          {/* Start of Sticky Sidebar */}
          <div className="sticky-sidebar">
            <div className="filter-actions">
              <label>Filter :</label>
              <a href="#" className="btn btn-dark btn-link filter-clean">
                Clean All
              </a>
            </div>
            {/* Start of Collapsible widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>All Categories</span>
              </h3>
              <ul className="widget-body filter-items search-ul">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Babies</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Price</span>
              </h3>
              <div className="widget-body">
                <ul className="filter-items search-ul">
                  <li>
                    <a href="#">$0.00 - $100.00</a>
                  </li>
                  <li>
                    <a href="#">$100.00 - $200.00</a>
                  </li>
                </ul>
                <form className="price-range">
                  <input
                    type="number"
                    name="min_price"
                    className="min_price text-center"
                    placeholder="$min"
                  />
                  <span className="delimiter">-</span>
                  <input
                    type="number"
                    name="max_price"
                    className="max_price text-center"
                    placeholder="$max"
                  />
                  <a href="#" className="btn btn-primary btn-rounded">
                    Go
                  </a>
                </form>
              </div>
            </div>
            {/* End of Collapsible Widget */}

            {/* Start of Collapsible Widget */}
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <span>Brand</span>
              </h3>
              <ul className="widget-body filter-items item-check mt-1">
                <li>
                  <a href="#">Elegant Auto Group</a>
                </li>
                <li>
                  <a href="#">Green Grass</a>
                </li>
                <li>
                  <a href="#">Node Js</a>
                </li>
              </ul>
            </div>
            {/* End of Collapsible Widget */}
          </div>
          {/* End of Sidebar Content */}
        </div>
        {/* End of Sidebar Content */}
      </aside>
      {/* End of Shop Sidebar */}
    </>
  );
};

export default ShopPageSidebar;
