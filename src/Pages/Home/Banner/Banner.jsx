import doc1 from "../../../assets/Doctor Image/doc1.png";
import doc2 from "../../../assets/Doctor Image/doc2.png";
import doc3 from "../../../assets/Doctor Image/doc3.png";
import bannerDot from "../../../assets/Doctor Image/BannerDot.svg";

const Banner = () => {
  return (
    <div className="bg-main h-[800px] absolute top-0 w-full pt-16">
      <div className="flex flex-col gap-10 mt-20 pb-10 justify-center items-center container mx-auto my-auto md:flex-row md:gap-0 text-center md:text-left">
        <div className="text-white space-y-4 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Your Best Medical Help Center
          </h1>
          <p>
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s standard.
          </p>
          <button className="btn btn-primary bg-second normal-case border-0">
            All Service
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center md:relative">
          <div className="flex flex-wrap relative">
            {/* circle bg */}
            <div className="rounded-full bg-[#f7a58233] h-60 w-60 md:h-96 md:w-96"></div>
            {/* doc1 */}
            <div className="bg-white p-2 w-32 md:w-60 absolute top-16 -left-10 md:-left-20 transform -skew-x-6 z-10">
              <img className="h-32 md:h-64 bg-[#D4D5D7]" src={doc1} alt="" />
            </div>
            {/* doc 2 */}
            <div className="bg-white p-2 w-32 md:w-60 absolute z-30 top-3 left-28 md:left-52 transform -skew-x-6">
              <img className="h-32 md:h-64 bg-[#D4D5D7]" src={doc2} alt="" />
            </div>
            {/* doc 3 */}
            <div className="bg-white p-2 w-32 md:w-60 absolute z-20 top-44 md:top-52 left-4 md:left-14 transform -skew-x-6">
              <img className="h-32 md:h-64 bg-[#D4D5D7]" src={doc3} alt="" />
            </div>
            {/* Rotate the background image */}
            <div className="banner-bg rotate-bg"></div>
            <div className="banner-bg-two rotate-bg-two"></div>
            <div className="banner-bg-three rotate-bg-three"></div>
            <div className="absolute top-56 md:-left-44 -left-10">
              <img src={bannerDot} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
