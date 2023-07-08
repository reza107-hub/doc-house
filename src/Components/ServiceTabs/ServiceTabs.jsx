import { useState, useEffect } from "react";

const ServiceTabs = () => {
  const [services, setServices] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setActiveTab(data.services[0].name);
      });
  }, []);

  const getContent = () => {
    const activeService = services?.find(
      (service) => service.name === activeTab
    );
    return activeService ? (
      <div className="flex justify-center md:justify-start md:items-start items-center flex-col space-y-4">
        <img
          className="h-52 md:h-96"
          src={activeService?.image}
          alt={activeService?.name}
        />
        <h2 className="text-4xl font-bold">{activeService.name}</h2>
        <p className="text-gray-600">
          {activeService?.description.length > 300
            ? activeService.description.slice(0, 300) + "..."
            : activeService.description}
        </p>
        {activeService?.description.length > 300 && (
          <button className="btn-second-outline">More Details</button>
        )}
      </div>
    ) : null;
  };

  return (
    <>
      <div className="flex justify-center items-center md:justify-start md:items-start">
        <div className="md:tabs tabs-boxed">
          {services.map((service) => (
            <a
              key={service._id}
              className={`tab tab-lg ${
                activeTab === service.name ? "bg-second" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab(service.name)}
            >
              {service.name}
            </a>
          ))}
        </div>
      </div>
      <div>{getContent()}</div>
    </>
  );
};

export default ServiceTabs;
