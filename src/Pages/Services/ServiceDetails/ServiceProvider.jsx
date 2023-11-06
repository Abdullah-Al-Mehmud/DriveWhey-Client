import PropTypes from "prop-types";

import { Avatar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const ServiceProvider = ({ serviceDetails }) => {
  const { user } = useContext(AuthContext);
  const { name, serviceArea } = serviceDetails;
  return (
    <div className="bg-slate-100 font-bold px-6 py-7">
      <p className="text-xl font-bold ">Service Provider Information</p>

      <p className="mt-6 ">Name : {name}</p>
      <div className="flex justify-start mt-5">
        <Avatar img={user?.photoURL} size="lg" />
      </div>
      <p className="font-bold  mt-4">Service location : {serviceArea}</p>
    </div>
  );
};

ServiceProvider.propTypes = {
  serviceDetails: PropTypes.object,
};

export default ServiceProvider;
