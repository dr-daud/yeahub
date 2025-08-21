import { Outlet } from "react-router-dom";

import Header from "../../widgets/header/ui/header/Header";
import Footer from "../../widgets/footer/ui/footer/Footer";
import Breadcrumbs from "../../widgets/breadcrumbs/ui/Breadcrumbs";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Breadcrumbs />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
