import PropTypes from "prop-types";

const Bookings = ({ booking }) => {
  const { price, photo, serviceName, serviceDate } = booking;
  return (
    <div className="">
      <tr>
        <th>
          <button className="btn ml-5 text-red-600 btn-circle btn-outline"></button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">
                {/* {service?.providerEmail} */}
              </div>
            </div>
          </div>
        </td>
        <td>
          {serviceDate}
          <br />
        </td>
        <td>{price} $</td>
        <th>
          {/* <Link to={`/updateService/${service._id}`}>
              <button className="text-green-500 cursor-pointer text-lg">
                Edit
              </button>
            </Link> */}
        </th>
      </tr>
    </div>
  );
};

Bookings.propTypes = {
  booking: PropTypes.object,
};

export default Bookings;
