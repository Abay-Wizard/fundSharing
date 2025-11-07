import React from "react";

const About = () => (
  <section className="max-w-5xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-purple-700 mb-6">About Us</h2>
    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
      ShifaLink is a community-driven fundraising platform with a mission to make healthcare
      assistance accessible to everyone. We remove unnecessary fees so that every dollar you
      donate reaches the people who need it most.
    </p>

    <div className="mt-10 grid md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-700 mb-3">Transparency</h3>
        <p className="text-gray-600">
          100% of funds go directly to patient care, verified through our trusted partners.
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-700 mb-3">Community</h3>
        <p className="text-gray-600">
          Built on the spirit of giving and connection across continents.
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-purple-700 mb-3">Innovation</h3>
        <p className="text-gray-600">
          A secure, modern platform designed to support scalable and transparent impact.
        </p>
      </div>
    </div>
  </section>
);

export default About;
