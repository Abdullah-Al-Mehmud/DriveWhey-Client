import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DriveWhey | Home</title>
      </Helmet>
      <Hero></Hero>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
