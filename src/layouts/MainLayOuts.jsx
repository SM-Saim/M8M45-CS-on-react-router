import { Outlet } from "react-router-dom";

const MainLayOuts = () => {
  return (
    <div>
      <section className="flex justify-between py-7 shadow-lg">
        <h1 className="ml-16 text-2xl text-blue-700 font-bold">EasyBuy</h1>
        <nav>
          <ul className="flex space-x-10 mr-16">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOuts;
