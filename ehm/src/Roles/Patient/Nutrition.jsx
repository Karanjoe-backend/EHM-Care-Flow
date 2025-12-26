import { useEffect, useState } from "react";

export default function PatientNutrition() {
  const [plan, setPlan] = useState([]);
  const [tracker, setTracker] = useState({});

  useEffect(() => {
    // Dummy doctor-provided nutrition plan
    setPlan([
      {
        time: "Morning",
        icon: "🌅",
        color: "yellow",
        items: [
          "Warm water",
          "Oats porridge",
          "Prescribed supplement"
        ]
      },
      {
        time: "Afternoon",
        icon: "☀️",
        color: "blue",
        items: [
          "Rice with vegetables",
          "Curd",
          "Fruits"
        ]
      },
      {
        time: "Evening",
        icon: "🌇",
        color: "orange",
        items: [
          "Herbal tea",
          "Handful of nuts"
        ]
      },
      {
        time: "Night",
        icon: "🌙",
        color: "indigo",
        items: [
          "Light dinner",
          "Warm milk (if advised)"
        ]
      }
    ]);
  }, []);

  const toggleItem = (time, item) => {
    const key = `${time}-${item}`;
    setTracker((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Nutrition Plan
        </h1>
        <p className="text-base text-slate-500 mt-1">
          Your daily food plan prescribed by your care team
        </p>
      </div>

      {/* PLAN BLOCKS */}
      <div className="space-y-8">
        {plan.map((block, idx) => (
          <NutritionBlock
            key={idx}
            block={block}
            tracker={tracker}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function NutritionBlock({ block, tracker, toggleItem }) {
  const colors = {
    yellow: "bg-yellow-50 text-yellow-800",
    blue: "bg-blue-50 text-blue-800",
    orange: "bg-orange-50 text-orange-800",
    indigo: "bg-indigo-50 text-indigo-800"
  };

  return (
    <div className="bg-white border rounded-3xl p-6 shadow-sm space-y-4">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">{block.icon}</span>
        <h2 className="text-xl font-semibold text-slate-900">
          {block.time}
        </h2>
      </div>

      {/* ITEMS */}
      <div className={`rounded-2xl p-4 ${colors[block.color]}`}>
        <ul className="space-y-3">
          {block.items.map((item, idx) => {
            const key = `${block.time}-${item}`;
            const done = tracker[key];

            return (
              <li
                key={idx}
                className="flex items-center gap-3"
              >
                <button
                  onClick={() => toggleItem(block.time, item)}
                  className={`w-6 h-6 rounded-full border
                    ${
                      done
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-slate-400"
                    }`}
                />

                <span
                  className={`text-base
                    ${
                      done
                        ? "line-through opacity-70"
                        : ""
                    }`}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
