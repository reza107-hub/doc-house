import ExpertDoctor from "../../ExpertDoctor/ExpertDoctor";
import InformationSection from "../../InformationSection/InformationSection";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <InformationSection />
      <ExpertDoctor />
    </>
  );
};

export default Home;
