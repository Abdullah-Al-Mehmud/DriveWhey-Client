import { useLoaderData } from "react-router-dom";
import IndividualService from "./IndividualService";

const Services = () => {
  const allServices = useLoaderData();

  return (
    <div>
      services
      {allServices.length}
      <div className="grid md:grid-cols-2 gap-5 px-10 py-20">
        {allServices.map((service) => (
          <IndividualService
            key={service._id}
            service={service}></IndividualService>
        ))}
      </div>
    </div>
  );
};

export default Services;
