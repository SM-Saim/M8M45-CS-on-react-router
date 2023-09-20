import { Outlet, useNavigation } from "react-router-dom";
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
