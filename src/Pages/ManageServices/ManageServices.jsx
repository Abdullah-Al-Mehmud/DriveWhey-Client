import { RiDeleteBin5Fill } from "react-icons/ri";
// import ModalUpdate from "./ModalUpdate";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/services?email=${user?.email}`)
      .then((res) => {
        setServices(res.data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/services/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = services.filter(
                (service) => service._id !== id
              );
              setServices(remaining);
            }
          });
      }
    });
  };
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
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn ml-5 text-red-600 btn-circle btn-outline">
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
                  <Link to={`/updateService/${service._id}`}>
                    <button className="text-green-500 cursor-pointer text-lg">
                      Edit
                    </button>
                  </Link>
                  {/* <ModalUpdate service={service}></ModalUpdate> */}

                  {/* <dialog
                    id={`my_modal_${service?._id}`}
                    className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                     

                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog> */}
                  {/*  */}
                  {/* <dialog id={`my_modal_${service?._id}`} className="modal">
                    <div className="modal-box">
                      <ModalUpdate service={service}></ModalUpdate>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog> */}
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
