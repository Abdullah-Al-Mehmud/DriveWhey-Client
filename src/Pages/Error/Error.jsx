import { Link } from "react-router-dom";
import errorImg from "../../assets/images/404.png";

const Error = () => {
  return (
    <div className="md:flex justify-evenly h-screen items-center ">
      <div className="w-fit">
        <h1 className="text-6xl font-bold">Oooops !</h1>
        <p className="mt-4 text-lg font-bold">
          We can't seem to find a page you <br /> are looking for
        </p>
        <Link to="/">
          <button className="mt-5 px-6 py-3 bg-[#7d05ee] text-white font-bold rounded-t-xl rounded-bl-xl">
            Back to home
          </button>
        </Link>
      </div>
      <div className="w-fit">
        <img className="w-full" src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default Error;
