import workout from "../assets/workout.png";
import nutrients from "../assets/nutrients.png";
import goal from "../assets/goal.png";

export const Section = () => {
  return (
    <div
      className={`bg-[url('../src/assets/background.jpg')] bg-cover bg-center  relative`}
    >
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <div className="relative min-h-screen bg-gray-50 bg-transparent">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Take your health</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                to the next level
              </span>
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Our health and wellness platform is here to help you achieve your
              fitness goals and lead a healthier lifestyle.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <img
                  src={workout}
                  alt="workout"
                  className=" rounded-full w-3/5 mb-4 border-4 border-blue-500 "
                />
                <h2 className="text-lg font-medium text-white">
                  Workout Routines
                </h2>
                <p className="mt-2 text-base text-white ">
                  Our platform provides a wide variety of workout routines
                  tailored to your fitness level and goals.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={nutrients}
                  alt="nutrition"
                  className="rounded-full w-3/5 mb-4 border-4 border-blue-500 "
                />
                <h2 className="text-lg font-medium text-white">
                  Nutritional Guidance
                </h2>
                <p className="mt-2 text-base text-white">
                  Our nutrition experts will help you make informed choices
                  about your diet and provide personalized recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={goal}
                  alt="goal tracking"
                  className="rounded-full w-3/5 mb-4 border-4 border-blue-500"
                />
                <h2 className="text-lg font-medium text-white">
                  Goal Tracking
                </h2>
                <p className="mt-2 text-base text-white">
                  Set your fitness objectives and track your progress with our
                  goal tracking feature. Stay motivated and achieve your goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
