import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Header";
import WebFooter from "../../Pages/WebFooter/WebFooter";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <WebFooter></WebFooter>
    </div>
  );
};

export default Root;
