import animation from "../../../assets/images/aboutUs.json";
import Lottie from "lottie-react";
const AboutUs = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto">
      <div className=" md:flex items-center justify-evenly">
        <div className="w-full ">
          <Lottie className="w-96" loop animationData={animation} />
        </div>
        <div className="w-full ">
          <h1 className="text-5xl font-bold">
            <span className="text-[#ed1e3d]">About</span> Us
          </h1>
          <p className="mt-5 font-bold">
            Welcome to Drive Whey, where we're redefining the way people move
            from place to place. Our journey began with a simple idea: to
            provide safe, reliable, and convenient transportation services that
            empower our riders and support our driver community.Founded in ,
            we've since grown to become a leading force in the ride-sharing
            industry. Our story is one of ambition,
          </p>
          <button className='mt-5 shadow-xl px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20"'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
