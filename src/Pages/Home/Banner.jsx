import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full text-black"
      >
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?cs=srgb&dl=pexels-fauxels-3184192.jpg&fm=jpg')`,
            }}
            role="img"
            aria-label="Enjoy delicious and healthy office lunches"
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Enjoy delicious and healthy office lunches delivered to your workplace!
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Order Now
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg?cs=srgb&dl=pexels-fauxels-3184331.jpg&fm=jpg')`,
            }}
            role="img"
            aria-label="Fresh and tasty meals for your team"
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Fresh and tasty meals for your team, customized to your needs.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?cs=srgb&dl=pexels-fauxels-3184287.jpg&fm=jpg')`,
            }}
            role="img"
            aria-label="Convenient and hassle-free catering services"
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Convenient and hassle-free catering services for all office events.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/3182827/pexels-photo-3182827.jpeg?cs=srgb&dl=pexels-fauxels-3182827.jpg&fm=jpg')`,
            }}
            role="img"
            aria-label="Experience the best office catering"
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Experience the best office catering, making lunchtime the highlight of your day.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
