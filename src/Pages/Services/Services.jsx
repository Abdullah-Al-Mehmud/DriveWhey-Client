import IndividualService from "./IndividualService";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsSearch } from "react-icons/bs";

const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);

  const handleFilterData = (e) => {
    e.preventDefault();

    const filterData = data.filter((item) => {
      if (search === "") {
        return item;
      } else if (
        item.serviceName.toLowerCase().includes(search.toLowerCase())
      ) {
        return item;
      }
    });
    setDisplay(filterData);
  };
  useEffect(() => {
    fetch("https://assignment-11-ride-share-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setDisplay(data);
        setData(data);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>DriveWhey | Services</title>
      </Helmet>
      <div className="flex justify-center">
        <form onSubmit={handleFilterData}>
          <input
            className="w-72 relative rounded-full pl-5 font-bold border-2 border-[#e93f58] focus:border-[#e93f58] outline-none"
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="-ml-10 mt-3 absolute text-lg ">
            <BsSearch></BsSearch>
          </button>
        </form>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 px-10 py-20">
        {showMore
          ? display.map((service) => (
              <IndividualService
                key={service._id}
                service={service}></IndividualService>
            ))
          : display
              .slice(0, 4)
              .map((service) => (
                <IndividualService
                  key={service._id}
                  service={service}></IndividualService>
              ))}
      </div>
      {display.length > 4 ? (
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
