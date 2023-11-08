import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const SinglePopular = ({ item }) => {
  const {
    _id,
    photo,
    serviceName,
    price,
    description,
    providerImg,
    providerName,
    serviceArea,
  } = item;
  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={photo}>
        <div className="flex items-center gap-4">
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
                img={providerImg}
                rounded
              />
              <p className="font-bold ml-5">{providerName}</p>
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

SinglePopular.propTypes = {
  item: PropTypes.object,
};

export default SinglePopular;
