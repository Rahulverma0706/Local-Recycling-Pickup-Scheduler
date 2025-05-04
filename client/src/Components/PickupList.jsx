import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleForm from "./ScheduleForm";
import process from "process";
process.config()

function PickupList() {
  const [pickups, setPickups] = useState([]);

  const fetchPickups = async () => {
    try {
      const response = await axios.get(`https://local-recycling-pickup-scheduler.onrender.com/pickups`);
      setPickups(response.data);
    } catch (error) {
      console.error("Error fetching pickups:", error);
    }
  };

  useEffect(() => {
    fetchPickups();
  }, []);

  const addPickup = (newPickup) => {
    setPickups((prevPickups) => [...prevPickups, newPickup]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Scheduled Pickups</h2>

      <ScheduleForm addPickup={addPickup} />

      <div className="mt-8 space-y-4">
        {pickups.length > 0 ? (
          pickups.map((p) => (
            <div
              key={p._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-xl font-semibold text-gray-800">{p.name}</div>
              <div className="text-gray-600">{p.type} - {p.date} {p.time}</div>
              <div className="text-gray-500">{p.address}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No pickups scheduled yet.</p>
        )}
      </div>
    </div>
  );
}

export default PickupList;
