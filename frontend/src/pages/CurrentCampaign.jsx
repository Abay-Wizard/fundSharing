import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetch
  useEffect(() => {
    setTimeout(() => {
      setCampaigns([
        {
          id: 1,
          title: "Help John Receive Heart Surgery",
          description:
            "John, a father of three, urgently needs heart surgery. Every contribution brings him closer to recovery.",
          goal: "$10,000",
          raised: "$6,700",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "Support Amina’s Cancer Treatment",
          description:
            "Amina is battling cancer and needs financial help for her chemotherapy sessions. Your kindness can save her life.",
          goal: "$8,000",
          raised: "$5,200",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg-UffaA-cVo5MT9IMnIC5a4DeyMhYIxZwQ&s",
        },
        {
          id: 3,
          title: "Wheelchairs for Children in Kenya",
          description:
            "Help us provide mobility aids to children in rural Kenya. Your donation makes independence possible.",
          goal: "$12,000",
          raised: "$9,400",
          image:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Active Campaigns
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
          </div>
        ) : campaigns.length === 0 ? (
          <p className="text-center text-gray-500">No campaigns found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="flex justify-between items-center text-sm mt-4">
                    <span className="text-gray-500">Goal: {c.goal}</span>
                    <span className="text-purple-700 font-semibold">
                      Raised: {c.raised}
                    </span>
                  </div>
                  <button className="w-full mt-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition cursor-pointer">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaigns;
