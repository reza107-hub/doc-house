import ServiceTabs from "../../../Components/ServiceTabs/ServiceTabs";
import serviceImg from "../../../assets/Doctor Image/service-section-image.png";
const Service = () => {
  return (
    <div className="mt-[765px] space-y-4 md:flex justify-center max-w-6xl mx-auto">
      <div className="md:w-10/12">
        <img src={serviceImg} alt="" className="p-4 md:h-full w-full" />
      </div>
      <div className="p-4 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <ServiceTabs />
      </div>
    </div>
  );
};

export default Service;
