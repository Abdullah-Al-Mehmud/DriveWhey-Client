import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import addServiceImg from "../../assets/images/addService.jpg";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const serviceName = form.serviceName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const providerImg = user?.photoURL;
    const providerEmail = user?.email;
    const providerName = user?.displayName;

    const service = {
      photo,
      serviceName,
      name,
      email,
      price,
      serviceArea,
      description,
      providerImg,
      providerEmail,
      providerName,
    };

    // posting data on database
    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("WoooW!!", "Service Added!", "success");
        }
        form.reset();
      });
  };
  console.log(user);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>DriveWhey | Add Services</title>
      </Helmet>
      <form onSubmit={handleAddService} className="md:flex h-2/3 items-center">
        <div className="w-fit">
          <img className="lg:w-[800px]" src={addServiceImg} alt="" />
        </div>
        <div className="w-full">
          <div className="grid  px-10 py-10  gap-4 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Picture URL
              </label>
              <input
                type="text"
                name="photo"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Picture URL"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Service Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Author Name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Author Email
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                name="email"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="text"
                id="website"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Service Area
              </label>
              <input
                type="text"
                name="serviceArea"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Service Area"
                required
              />
            </div>
          </div>
          <div className="-mt-10 mb-5 px-10">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Description
            </label>
            <textarea name="description" required className="w-full h-40" />
          </div>
          <div className=" mb-20 flex justify-center">
            <button className="bg-[#ee3e58] px-20 py-3 rounded-lg font-bold text-white">
              Add Service
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
