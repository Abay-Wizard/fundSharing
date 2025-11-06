import React, { useState } from "react";

const StartCampaign = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign submitted:", form);
    alert("Your campaign has been created successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-start py-16 px-6 md:px-10">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-2xl p-8 md:p-10 border border-gray-100">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Start a Campaign
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Campaign Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Help Sarah Get Surgery"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the purpose and details of your campaign..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Goal Amount (USD)
              </label>
              <input
                type="number"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                placeholder="e.g., 5000"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              >
                <option value="">Select category</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Community">Community</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Paste campaign image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition cursor-pointer"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartCampaign;
