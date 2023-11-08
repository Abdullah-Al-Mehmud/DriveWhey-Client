import axios from "axios";
import { useEffect, useState } from "react";
import SinglePopular from "./SinglePopular";
import { Link } from "react-router-dom";

const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://assignment-11-ride-share-server.vercel.app/services")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-5">
        {data.slice(0, 4).map((item) => (
          <SinglePopular key={item._id} item={item}></SinglePopular>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/services">
          <button className="mt-5 shadow-xl px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
