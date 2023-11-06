import { useLoaderData } from "react-router-dom";
import ServiceProvider from "./ServiceProvider";
import BookNow from "./BookNow/BookNow";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { price, serviceName, photo, description } = serviceDetails;
  return (
    <div className="lg:flex px-10">
      <div className="py-10 w-3/4">
        <div className="w-full flex justify-center">
          <img className="lg:w-auto lg:h-96" src={photo} alt="" />
        </div>
        <div className="lg:px-20">
          <p className="font-bold  text-3xl text-center mt-10 ">
            {" "}
            {serviceName}
          </p>
          <div className="md:text-start text-center">
            <p className="font-bold text-lg mt-6">{description}</p>
            <p className="text-lg font-bold mt-4">Price : {price} $</p>
            <div>
              <BookNow serviceDetails={serviceDetails}></BookNow>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4 mt-10">
        <ServiceProvider serviceDetails={serviceDetails}></ServiceProvider>
      </div>
    </div>
  );
};

export default ServiceDetails;
