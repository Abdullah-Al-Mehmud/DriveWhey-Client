import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Faq from "./FAQ/Faq";
import Popular from "../Popular/Popular";
import AddReview from "./AddReview/AddReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DriveWhey | Home</title>
      </Helmet>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Popular></Popular>
      <Faq></Faq>
      <AddReview></AddReview>
    </div>
  );
};

export default Home;
