import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const BookNow = ({ serviceDetails }) => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const {
    price,
    serviceName,
    photo,
    serviceArea,
    providerName,
    providerEmail,
  } = serviceDetails;

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const serviceName = form.serviceName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const serviceDate = form.serviceDate.value;
    const receiveArea = form.receiveArea.value;
    const bookingEmail = user?.email;

    const booking = {
      photo,
      serviceName,
      name,
      email,
      price,
      serviceArea,
      serviceDate,
      receiveArea,
      bookingEmail,
    };

    axios.post("http://localhost:3000/bookings", booking).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("WoooW!!", "Service Purchased!", "success");
        setOpenModal(false);
      }
      form.reset();
    });
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className='mt-5 shadow-xl px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20"'>
        Book Now
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Book The Service</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleBooking}>
            <div className="w-full">
              <div className="grid  px-10 pt-5 gap-4 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Picture URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
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
                    defaultValue={serviceName}
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
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
                    defaultValue={price}
                    id="website"
                    name="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                    readOnly
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
                    defaultValue={serviceArea}
                    name="serviceArea"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Service Area"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Service Date
                  </label>
                  <input
                    type="date"
                    name="serviceDate"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Service Area"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Receive Area
                  </label>
                  <input
                    type="text"
                    name="receiveArea"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Receive Area"
                    required
                  />
                </div>
              </div>

              <div className=" mb-20 flex justify-center">
                <button className="bg-[#ee3e58] px-20 py-3 rounded-lg font-bold text-white">
                  Purchase Service
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
BookNow.propTypes = {
  serviceDetails: PropTypes.object,
};
export default BookNow;
