import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { updateProfile } from "firebase/auth";
import auth from "../../FirebaseConfig/firebase.config";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // const [update, setUpdate] = useState(true);
  const [show, setShow] = useState(true);
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    console.log(name, image);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });

    setShow(!show);
  };
  return (
    <div>
      <div className="flex justify-center items-center py-10 h-auto">
        <div className="bg-[#160938] relative py-10 text-main-blue-50 rounded-lg w-auto px-20 h-auto">
          <div className="avatar flex justify-center">
            <div className="w-36 rounded-full mt-5 ">
              <img src={user?.photoURL} />
            </div>
          </div>

          {show ? (
            <div className="mt-10">
              <div className="text-center mt-5">
                <p className="text-sm text-white font-bold">
                  {" "}
                  Name :{" "}
                  <span className="text-lg text-white font-bold mt-2">
                    {user?.displayName}
                  </span>
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-white font-bold">
                  Email :{" "}
                  <span className="text-lg font-bold text-white mt-2">
                    {user?.email}
                  </span>
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShow(!show)}
                  type="submit"
                  className="mt-5 shadow-xl px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20">
                  {show ? `Update Profile` : `Save Changes`}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="mt-10">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-main-blue-50 ">
                  Your Image
                </label>
                <input
                  type="text"
                  defaultValue={user?.photoURL}
                  name="image"
                  className="w-72 relative text-main-blue-950 rounded-full pl-5 py-1 font-bold border-2 border-[#ed1e3d] focus:border-[#ed1e3d] outline-none"
                  placeholder="Your Image"
                  required=""
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-main-blue-50 ">
                  Your Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  className="w-72 relative text-main-blue-950 rounded-full pl-5 py-1 font-bold border-2 border-[#ed1e3d] focus:border-[#ed1e3d] outline-none"
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-main-blue-50 ">
                  Email (Email cannot be changed)
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  readOnly
                  className="w-72 relative text-main-blue-950 rounded-full pl-5 py-1 font-bold border-2 border-[#ed1e3d] focus:border-[#ed1e3d] outline-none"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  value="Save Changes"
                  className="mt-5 shadow-xl cursor-pointer px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
