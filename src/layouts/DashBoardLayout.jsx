import { Link, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="flex p-7 space-x-10">
      <div className="w-[20%] bg-gray-400">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/editedprofile">Edited Profile</Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayout;
