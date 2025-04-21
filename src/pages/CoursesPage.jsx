import { useEffect } from "react";

export default function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-22">
      <div className="flex flex-col justify-center text-center p-8 min-h-[300px]">
        <h2 className="mb-4 text-3xl">FITCLUB – OUR SERVICES FOR YOUR GOALS</h2>
        <p className="w-2/3 mx-auto">
          Whether you're into intense workouts or relaxed recovery – at FITCLUB,
          the choice is yours. Discover a wide range of classes, modern
          equipment, and functional training to challenge yourself and push your
          limits. Our nutrition coaching and weight loss programs also support
          you on your journey to reaching your personal goals.
        </p>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="bg-black text-white text-center p-12 flex flex-col justify-center order-0">
          <h2 className="mb-4 text-3xl uppercase">Course Offerings</h2>
          <p className="w-2/3 mx-auto">
            Get inspired by our energy and become part of our fitness community!
            We provide everything you need to reach your goals – whether you
            want to lose weight, get fitter, or simply add more movement to your
            daily life. Our diverse range of classes like ZUMBA, Cycling, and
            Yoga offers the perfect mix of fun and challenge. Together with
            others, you'll push your limits, stay motivated, and celebrate your
            successes. Get stronger, experience a great sense of community, and
            grow beyond yourself!
          </p>
        </div>
        <img className="object-cover w-full h-full order-1" src="course1.jpg" />
        <img
          className="object-cover w-full h-full  order-3 md:order-2 "
          src="course2.jpg"
        />
        <div className="bg-black text-white text-center p-12 flex flex-col justify-center order-2 md:order-2">
          <h2 className="mb-4 text-3xl uppercase">Personal Training</h2>
          <p className="w-2/3 mx-auto">
            To help you get the best out of yourself, our qualified team of
            trainers provides full support. In personalized 1:1 sessions, we’ll
            show you how to optimize your training and nutrition. Together,
            we’ll create a plan that fits you perfectly and guide you on-site to
            ensure proper exercise technique and ongoing improvement. Your
            success is our priority – everything is tailored to your goals and
            needs.
          </p>
        </div>
        <div className="bg-black text-white text-center p-12 flex flex-col justify-center order-4">
          <h2 className="mb-4 text-3xl uppercase">Wellness & Relaxation</h2>
          <p className="w-2/3 mx-auto">
            For your perfect recovery – whether you simply want to unwind or
            need optimal regeneration after your workout. In our saunas, you can
            relax your muscles, boost circulation, and speed up recovery.
            Afterwards, our waterfall showers provide a refreshing cooldown
            before you enjoy some peace and quiet on our cozy sauna loungers.
            Not into saunas? Then soak up the sun in our solariums, replenish
            your vitamin D, and enjoy a natural tan.
          </p>
        </div>
        <img className="object-cover w-full h-full order-5" src="course3.jpg" />
      </div>
    </div>
  );
}
