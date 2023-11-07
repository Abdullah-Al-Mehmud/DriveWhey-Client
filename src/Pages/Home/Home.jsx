import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Faq from "./FAQ/Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DriveWhey | Home</title>
      </Helmet>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Faq></Faq>
    </div>
  );
};

export default Home;
