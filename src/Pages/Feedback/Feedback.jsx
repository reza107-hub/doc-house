import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Feedback.css";
import { Autoplay, Navigation } from "swiper/modules";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch("feedback.json")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data));
  }, []);

  return (
    <div className="max-w-6xl md:mx-auto mx-2 mt-20">
      <div className="p-4 text-center space-y-4">
        <h1 className="text-4xl font-bold">What Our Patients Says</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={24}
          className="mySwiper"
        >
          {feedbackData.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-5">
                    <img
                      className="rounded-full w-16 h-16"
                      src={feedback.image}
                      alt="Profile Image"
                    />
                    <div className="text-left">
                      <h2 className="text-xl font-bold">{feedback.name}</h2>
                      <p className="text-gray-500">{feedback.profession}</p>
                    </div>
                  </div>
                  <div>
                    <img src="quotation.svg" alt="" />
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-gray-700 text-left">{feedback.message}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
