import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayOuts = () => {
  const navigation = useNavigation();
  const isLoadingData = navigation.state === "loading";
  return (
    <div>
      <section className="flex justify-between py-7 shadow-lg">
        <h1 className="ml-12 text-2xl text-blue-700 font-bold">EasyBuy</h1>
        <nav>
          <ul className="flex space-x-10 mr-12">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-200" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-200" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-200" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>

      {navigation.state === "loading" ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayOuts;
