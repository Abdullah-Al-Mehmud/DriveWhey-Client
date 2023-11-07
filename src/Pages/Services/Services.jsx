import { useLoaderData } from "react-router-dom";
import IndividualService from "./IndividualService";
import { useEffect, useState } from "react";

const Services = () => {
  const allServices = useLoaderData();
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState("");
  // const [userData, setUserData] = useState([]);
  // const [filteredData, setFilteredData] = useState("");

  const handleFilterData = () => {
    allServices.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.serviceName.toLowerCase().includes(search);
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-red-500 text-white" onClick={handleFilterData}>
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 px-10 py-20">
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
