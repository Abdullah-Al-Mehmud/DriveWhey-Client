import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Avatar } from "flowbite-react";

const IndividualService = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { photo, serviceName, name, price, serviceArea, description } = service;
  return (
    <div className="">
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
            <button className="px-6 py-2 bg-[#e93f58] text-white mt-4">
              View Details
            </button>
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
