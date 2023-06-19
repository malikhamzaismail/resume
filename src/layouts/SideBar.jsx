import React from "react";
import SideBarHeader from './SideBarHeader';
import SideBarBody from './SideBarBody';
import SideBarFooter from './SideBarFooter';

const SideBar = () => {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
        {/* <!-- ======= Mobile nav toggle button ======= --> */}
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
          <SideBarHeader />
          <SideBarBody />
          <SideBarFooter />
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default SideBar;
