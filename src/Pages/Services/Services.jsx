import { useLoaderData } from "react-router-dom";
import IndividualService from "./IndividualService";
import { useState } from "react";

const Services = () => {
  const allServices = useLoaderData();
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 px-10 py-20">
        {showMore
          ? allServices.map((service) => (
              <IndividualService
                key={service._id}
                service={service}></IndividualService>
            ))
          : allServices
              .slice(0, 4)
              .map((service) => (
                <IndividualService
                  key={service._id}
                  service={service}></IndividualService>
              ))}
      </div>
      {allServices.length > 4 ? (
        <div
          onClick={() => setShowMore(!showMore)}
          className="flex mb-10 justify-center ">
          <button className="px-6 font-bold text-white py-3 bg-[#e93f58]">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Services;
