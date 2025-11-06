import React from "react";
import HeroImage from "../assets/fundHero.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-purple-700 mb-4">
              The modern alternative to old fundraising platforms
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              A no-fee healthcare fundraising platform enabling campaigns across the globe.
            </p>
            <button
              onClick={() => navigate("/create-campaign")}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 cursor-pointer"
            >
              Start a Campaign
            </button>
          </div>

          <div className="mt-10 lg:mt-0 lg:flex-1">
            <img
              src={HeroImage}
              alt="Fundraising"
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-700">0%</h3>
            <p className="text-gray-600">Platform Fees</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-700">100%</h3>
            <p className="text-gray-600">Countries Supported</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-700">100%</h3>
            <p className="text-gray-600">Direct to Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
