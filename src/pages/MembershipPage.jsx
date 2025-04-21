import { useEffect } from "react";

export default function MembershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <h1 className="text-4xl text-center mt-24 mb-12">
        Choose Your Membership
      </h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl max-h-200 mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col justify-between">
          <h2 className="text-2xl mb-4">Basic</h2>
          <p className="text-lg mb-4">Access to gym and basic equipment</p>
          <p className="text-3xl font-bold mb-6">€29/mo</p>
          <button className="border border-black px-6 py-2 rounded-full hover:bg-yellow-300 cursor-pointer">
            Select
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-black flex flex-col justify-between">
          <h2 className="text-2xl mb-4">Standard</h2>
          <p className="text-lg mb-4">Includes group classes & sauna</p>
          <p className="text-3xl font-bold mb-6">€49/mo</p>
          <button className="border border-black px-6 py-2 rounded-full hover:bg-yellow-300 cursor-pointer">
            Select
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col justify-between">
          <h2 className="text-2xl mb-4">Premium</h2>
          <p className="text-lg mb-4">All-inclusive access + coaching</p>
          <p className="text-3xl font-bold mb-6">€69/mo</p>
          <button className="border border-black px-6 py-2 rounded-full hover:bg-yellow-300 cursor-pointer">
            Select
          </button>
        </div>
      </div>
      <div className="text-center mt-12 w-3/4 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-6">
          At FITCLUB, we offer more than just a gym. Our memberships are
          designed to provide a holistic fitness experience, with access to
          top-quality equipment, expert coaching, and a wide variety of fitness
          classes.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you’re looking to lose weight, build strength, or simply
          improve your fitness, we have something for everyone. Join us today
          and start your fitness journey with the best team by your side!
        </p>
        <button className="mt-6 px-8 py-3 border border-black text-xl rounded-full bg-black text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}
