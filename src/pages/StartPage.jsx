import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function StartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="relative">
        <img className="w-full h-[800px] object-cover" src="homepic.jpg" />
        <div className="flex  flex-col items-center absolute top-1/6 left-1/2 -translate-x-1/2  p-4">
          <p className="text-3xl text-white font-bold">JOIN NOW & GET</p>
          <p className="text-4xl lg:text-8xl text-white bg-black p-4 mt-4 skew-x-[-10deg]">
            12 WEEKS
          </p>
          <p className="text-4xl lg:text-8xl text-white bg-black p-4 mt-4 skew-x-[-10deg]">
            FREE
          </p>
          <button className="cursor-pointer w-[250px] md:w-full text-xl lg:text-4xl text-white mt-12 border border-3 p-4 rounded-full bg-black/75 transform transition hover:scale-105 duration-500">
            GET YOUR 12 FREE WEEKS
          </button>
        </div>
        <p className="w-full lg:w-1/2 absolute bottom-0 text-center text-gray-200 text-sm p-4 right-1/2 transform translate-x-1/2">
          * By signing up for a membership with a minimum commitment of 2 years,
          you will receive 12 weeks for free. The registration fee and service
          charge remain unaffected by this offer and will be due on the next 1st
          of the month. This offer is valid until August 31, 2025.
        </p>
      </div>
      <div className="mt-8 mb-8 p-12 w-full md:w-2/3 text-center  bg-white-400 flex flex-col mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold self-center font-amulya">
          MORE THAN A SIMPLE GYM
        </h2>
        <p className="text-md md:text-xl text-center font-synonym">
          FITCLUB is more than just a traditional gym. The FITCLUB group
          consists of 38 studios and is characterized by unique design, fitness
          equipment from award-winning brands, a wide range of classes, and
          inviting sauna and wellness areas for relaxation. The offer is rounded
          off by the training support from our qualified trainers, who help and
          motivate you to achieve your goals. Whether during training or with
          your nutrition – we are here for you.
        </p>
      </div>
      <div className="relative">
        <img
          className="w-full h-[800px] object-cover brightness-40"
          src="homepic2.jpg"
        />
        <div className="flex  flex-col   absolute top-1/6 md:top-1/3  text-center items-center right-1/2 transform translate-x-1/2">
          <p className="text-3xl text-white font-amulya">
            REQUEST A FREE TRIAL WORKOUT
          </p>
          <p className="text-md md:text-2xl w-full md:w-3/4  text-white p-4 mt-4 text-center font-synonym">
            Choose one of our many fitness options for a personalized trial
            session, or join one of our wide range of classes.
          </p>

          <button className="cursor-pointer lg:w-[500px]  text-md md:text-3xl text-black uppercase mt-12 p-4  bg-white rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
            <Link to="/membership">Discover Our Offers Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
