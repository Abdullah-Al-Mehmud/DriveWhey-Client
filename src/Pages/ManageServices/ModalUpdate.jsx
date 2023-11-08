import axios from "axios";
import PropTypes from "prop-types";
// import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const ModalUpdate = () => {
  const navigate = useNavigate();
  const serviceUpdate = useLoaderData();
  console.log(serviceUpdate);
  // const { user } = useContext(AuthContext);
  const {
    _id,
    photo,
    serviceName,
    providerName,
    providerEmail,
    price,
    description,
    serviceArea,
  } = serviceUpdate;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;

    const update = {
      photo,
      serviceName,
      price,
      serviceArea,
      description,
    };
    // update data in database
    axios
      .put(`http://localhost:3000/services/update/${_id}`, update)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          Swal.fire("WoooW!!", "Service Updated!", "success");
        }
        navigate("/manageServices");
        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="w-full">
          <div className="grid px-10 py-10  gap-4 mb-6 md:grid-cols-2">
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
                defaultValue={photo}
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
                defaultValue={serviceName}
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
                defaultValue={providerName}
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
                defaultValue={providerEmail}
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
                defaultValue={price}
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
                defaultValue={serviceArea}
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
            <textarea
              defaultValue={description}
              name="description"
              required
              className="w-full h-40"
            />
          </div>
          <div className=" mb-20 flex justify-center">
            <button className="bg-[#ee3e58] px-20 py-3 rounded-lg font-bold text-white">
              Update Service
            </button>
          </div>
        </div>
      </form>
      ;
    </div>
  );
};

ModalUpdate.propTypes = {
  service: PropTypes.object,
};

export default ModalUpdate;
