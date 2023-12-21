import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import registerImg from "../../assets/images/register.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [show, setShow] = useState(true);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo);
    const user = {
      name,
      photo,
      email,
    };

    // sending
    fetch("https://assignment-11-ride-share-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // register user
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(name, photo).then().catch();
        Swal.fire("Woohoo!!", "Registration Successful !", "success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className=" bg-[#160938] py-10 flex h-auto items-center">
      <Helmet>
        <title>DriveWhey | Register</title>
      </Helmet>
      <div className=" bg-white shadow-xl max-w-5xl px-10 py-10 mx-auto md:flex items-center gap-4">
        <div className="w-full">
          <img src={registerImg} alt="" />
        </div>
        <div className="w-full">
          <div className="w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 ">
            <form onSubmit={handleRegister} className="space-y-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                Register in to our platform
              </h5>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-72 relative rounded-full pl-5 font-bold border-2 border-[#e93f58] focus:border-[#e93f58] outline-none"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="w-72 relative rounded-full pl-5 font-bold border-2 border-[#e93f58] focus:border-[#e93f58] outline-none"
                  placeholder="Photo URL"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-72 relative rounded-full pl-5 font-bold border-2 border-[#e93f58] focus:border-[#e93f58] outline-none"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                  Your password
                </label>

                <input
                  className="w-72 relative rounded-full pl-5 font-bold border-2 border-[#e93f58] focus:border-[#e93f58] outline-none"
                  type={show ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                />

                <button
                  onClick={() => setShow(!show)}
                  type="submit"
                  className="-ml-10 mt-3 absolute text-lg ">
                  {show ? (
                    <BiSolidHide></BiSolidHide>
                  ) : (
                    <BiSolidShow></BiSolidShow>
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#e93f58] hover:bg-[#d14157] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#e93f58] dark:hover:bg-[#e93f58] dark:focus:ring-[#e93f58]">
                Register account
              </button>
              <div>
                {error ? <p className="font-bold text-red-600">{error}</p> : ""}
              </div>

              <div className="text-sm font-bold text-gray-500 dark:text-gray-300">
                Have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#e93f58] hover:underline dark:text-[#e93f58]">
                  Login Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
