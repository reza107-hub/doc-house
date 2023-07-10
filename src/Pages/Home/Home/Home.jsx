import ExpertDoctor from "../../ExpertDoctor/ExpertDoctor";
import Feedback from "../../Feedback/Feedback";
import InformationSection from "../../InformationSection/InformationSection";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <InformationSection />
      <Feedback />
      <ExpertDoctor />
    </>
  );
};

export default Home;
