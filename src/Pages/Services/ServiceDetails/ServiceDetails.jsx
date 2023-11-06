import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { name } = serviceDetails;
  return (
    <div className="flex h-screen">
      <div className="bg-red-500"></div>
      <div className="bg-green-500"></div>
    </div>
  );
};

export default ServiceDetails;
