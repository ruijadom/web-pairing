import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen space-y-6 mx-auto my-[68px] max-w-[615px] px-4 md:px-0">
      <Outlet />
    </div>
  );
};

export default MainLayout;
