import { RiDeleteBin5Fill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import ModalUpdate from "./ModalUpdate";

const ManageServices = () => {
  const services = useLoaderData();
  return (
    <div className="mb-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-lg">Service Provider</th>
              <th className="font-bold text-lg">Services</th>
              <th className="font-bold text-lg">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <th>
                  <button className="btn ml-5 text-red-600 btn-circle btn-outline">
                    <RiDeleteBin5Fill className="text-lg"></RiDeleteBin5Fill>
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={service?.providerImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.providerName}</div>
                      <div className="text-sm opacity-50">
                        {service?.providerEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {service?.serviceName}
                  <br />
                </td>
                <td>{service?.price} $</td>
                <th>
                  {/* <button className="text-green-500 cursor-pointer text-lg">
                    Edit
                  </button> */}
                  <button
                    className="text-green-500 cursor-pointer text-lg"
                    onClick={() =>
                      document
                        .getElementById(`my_modal_${service?._id}`)
                        .showModal()
                    }>
                    Edit
                  </button>
                  <dialog
                    id={`my_modal_${service?._id}`}
                    className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <ModalUpdate service={service}></ModalUpdate>

                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
