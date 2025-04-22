import { useLocation, Link } from "react-router-dom";

const planDetails = {
  Basic: {
    description: "Access to gym and basic equipment.",
    price: "29",
    features: ["Basic equipment", "Free weights area"],
  },
  Standard: {
    description: "Includes group classes & sauna.",
    price: "49",
    features: [
      "All Basic benefits",
      "Participation in group classes",
      "Sauna access",
    ],
  },
  Premium: {
    description: "All-inclusive access + coaching.",
    price: "69",
    features: [
      "All Standard benefits",
      "Individual coaching (1 session per month)",
      "Nutrition advice",
    ],
  },
};

export default function JoinPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const selectedPlanName = urlParams.get("plan");
  const selectedPlan = planDetails[selectedPlanName];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl text-center mt-24 mb-12 font-amulya">
        Join Us Today
      </h1>

      {selectedPlan ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 border border-gray-200">
          <div className="md:flex-shrink-0">
            <h2 className="text-3xl text-center mb-4">
              You have selected the{" "}
              <span className="font-semibold text-yellow-400">
                {selectedPlanName}
              </span>{" "}
              plan
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg text-gray-700 mb-4 flex justify-center">
              {selectedPlan.description}
            </p>
            <p className="text-2xl font-bold text-green-600 mb-6 text-center">
              Price: €{selectedPlan.price}/mo
            </p>
            {selectedPlan.features && selectedPlan.features.length > 0 && (
              <div className="mb-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Your benefits:
                </h3>
                <ul className="text-gray-700 text-center">
                  {selectedPlan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-center">
              <button className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                Join Now with {selectedPlanName}
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Or{" "}
                <Link
                  to="/membership"
                  className="text-blue-500 hover:underline"
                >
                  choose a different plan
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 border border-gray-200 text-center">
          <h2 className="text-3xl text-center mb-4 text-red-500">
            Please select a plan
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You have been directed to this page without selecting a membership
            plan. Please go back to the{" "}
            <Link
              to="/membership"
              className="text-blue-500 hover:underline font-semibold"
            >
              Membership Overview
            </Link>{" "}
            to find the plan that suits you best.
          </p>
        </div>
      )}
    </div>
  );
}
