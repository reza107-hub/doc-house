const InformationSection = () => {
  return (
    <div className="max-w-6xl md:mx-auto mx-2 p-2 flex flex-col md:flex-row justify-between items-center gap-5 mt-20">
      {/* Opening Hours */}
      <div className="bg-main w-full rounded-lg p-7 flex gap-5 items-start">
        <img src="/clock.svg" alt="" />
        <div className="space-y-5">
          <h3 className="text-2xl text-white font-bold">Opening Hours</h3>
          <p className="text-white">Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      {/* Our Locations */}
      <div className="bg-second w-full rounded-lg p-7 flex gap-5 items-start">
        <img src="/location.svg" alt="" />
        <div className="space-y-5">
          <h3 className="text-2xl text-white font-bold">Our Locations</h3>
          <p className="text-white">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      {/* Contact Us */}
      <div className="bg-main w-full rounded-lg p-7 flex gap-5 items-start">
        <img src="/telephone.svg" alt="" />
        <div className="space-y-5">
          <h3 className="text-2xl text-white font-bold">Contact Us</h3>
          <p className="text-white">+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
