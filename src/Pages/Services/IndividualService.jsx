import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const IndividualService = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, photo, serviceName, name, price, serviceArea, description } =
    service;
  return (
    <div>
      <Card className="w-full " imgSrc={photo} horizontal>
        <div className="flex items-center gap-4">
          {/* <div className="w-full ">
            <img className="h-full" src={photo} />
          </div> */}
          <div className="w-full">
            <p className="font-bold">Service Name : {serviceName}</p>
            <p className="font-bold">Price : {price} $</p>
            <p className="font-bold">
              Description :{" "}
              {description.length > 50 ? description.slice(0, 50) : description}
              ....
            </p>

            <div className="flex font-bold items-center">
              Service Provider :{" "}
              <Avatar
                className=" ml-5 justify-start py-2"
                alt="User settings"
                img={user?.photoURL}
                rounded
              />
              <p className="font-bold ml-5">{name}</p>
            </div>
            <p className="font-bold">Service Area : {serviceArea}</p>
            <Link to={`/services/${_id}`}>
              <button className="px-6 shadow-xl py-2 bg-[#e93f58] text-white mt-4">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

IndividualService.propTypes = {
  service: PropTypes.object,
};

export default IndividualService;
