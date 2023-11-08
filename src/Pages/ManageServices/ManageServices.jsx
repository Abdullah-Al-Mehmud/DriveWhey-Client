import { RiDeleteBin5Fill } from "react-icons/ri";
// import ModalUpdate from "./ModalUpdate";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-ride-share-server.vercel.app/services?email=${user?.email}`
      )
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
          .delete(
            `https://assignment-11-ride-share-server.vercel.app/services/delete/${id}`
          )
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
      <Helmet>
        <title>DriveWhey | Manage Services</title>
      </Helmet>

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
