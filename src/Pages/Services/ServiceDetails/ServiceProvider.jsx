import PropTypes from "prop-types";

import { Avatar } from "flowbite-react";

const ServiceProvider = ({ serviceDetails }) => {
  const { serviceArea, providerImg, providerName } = serviceDetails;
  return (
    <div className="bg-slate-100 font-bold px-6 py-7">
      <p className="text-xl font-bold ">Service Provider Information</p>

      <p className="mt-6 ">Name : {providerName}</p>
      <div className="flex justify-start mt-5">
        <Avatar img={providerImg} size="lg" />
      </div>
      <p className="font-bold  mt-4">Service location : {serviceArea}</p>
    </div>
  );
};

ServiceProvider.propTypes = {
  serviceDetails: PropTypes.object,
};

export default ServiceProvider;
