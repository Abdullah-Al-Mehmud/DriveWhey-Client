import heroImg from "../../assets/images/hero.jpg";
const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:flex items-center pt-10">
        <div className="w-fit">
          <div className="px-10">
            <h1 className="text-5xl font-bold">
              <span className="text-[#ed1e3d]">Ride</span> Share !!
            </h1>
            <p className="mt-4 pr-20 font-bold ">
              Ride-sharing involves individuals sharing a ride in a single
              vehicle, often with people who are headed in the same general
              direction or have similar destinations. This can help reduce the
              number of cars on the road and alleviate traffic
              congestion.Ride-sharing can take place through organized platforms
              and apps such as Uber, Lyft.
            </p>
            <button className="mt-5 shadow-xl px-6 py-3 bg-[#ed1e3d] text-white font-bold rounded-t-xl rounded-bl-xl md:mb-20">
              Read More
            </button>
          </div>
        </div>
        <div className="w-fit">
          <img className="" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
