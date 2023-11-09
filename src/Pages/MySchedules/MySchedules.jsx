import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/bookings?bookingEmail=${user?.email}`)
      .then((res) => {
        setBookings(res.data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="text-center font-bold text-6xl">
        You Have Booked{" "}
        <span className="text-[#ed1e3d] py-5"> {bookings.length}</span> Items
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-lg">Services</th>
              <th className="font-bold text-lg">Service Date</th>
              <th className="font-bold text-lg">Price</th>
              <th className="font-bold text-lg">Service Area</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              // <Bookings key={booking._id} booking={booking}></Bookings>
              <tr key={booking?._id}>
                <th>
                  <button className="btn ml-5 text-red-600 btn-circle btn-outline"></button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {booking?.serviceDate}
                  <br />
                </td>
                <td>{booking?.price} $</td>
                <td>{booking?.serviceArea} </td>
                <th>
                  {/* <Link to={`/updateService/${service._id}`}>
                    <button className="text-green-500 cursor-pointer text-lg">
                      Edit
                    </button>
                  </Link> */}
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

export default MySchedules;
