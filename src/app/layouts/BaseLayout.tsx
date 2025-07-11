import { Outlet } from "react-router";

import Header from "../../widgets/header/ui/Header";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
