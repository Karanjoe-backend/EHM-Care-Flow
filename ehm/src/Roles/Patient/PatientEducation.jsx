export default function PatientEducation() {
  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Understanding Your Health Numbers
        </h1>
        <p className="text-base text-slate-500 mt-1">
          Simple explanation of the values you see in your dashboard
        </p>
      </div>

      {/* SPO2 */}
      <HealthExplain
        title="SpO₂ (Oxygen Level)"
        icon="🫁"
        normal="95% – 100%"
        why="Shows how well oxygen is carried in your blood."
        note="Low levels may cause breathlessness or fatigue."
      />

      {/* BP */}
      <HealthExplain
        title="Blood Pressure"
        icon="🩸"
        normal="Around 120 / 80 mmHg"
        why="Indicates the force of blood flowing through your arteries."
        note="Very high or very low values may need medical attention."
      />

      {/* HEART RATE */}
      <HealthExplain
        title="Heart Rate"
        icon="❤️"
        normal="60 – 100 bpm (at rest)"
        why="Measures how fast your heart is beating."
        note="Can increase with activity, stress, or illness."
      />

      {/* TEMPERATURE */}
      <HealthExplain
        title="Body Temperature"
        icon="🌡️"
        normal="36.5 – 37.5 °C"
        why="Helps detect fever or infection."
        note="Higher values may indicate fever."
      />

      {/* DISCLAIMER */}
      <div className="bg-blue-50 border border-blue-200
                      rounded-xl p-4 text-sm text-blue-700">
        These ranges are for general understanding only. Always follow your
        doctor’s guidance for your condition.
      </div>
    </div>
  );
}

/* ===== COMPONENT ===== */

function HealthExplain({ title, icon, normal, why, note }) {
  return (
    <div className="bg-white rounded-3xl p-6 border shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>
      </div>

      <div className="space-y-2 text-base">
        <p className="text-slate-700">
          <span className="font-medium">Why it matters:</span> {why}
        </p>

        <p className="text-slate-700">
          <span className="font-medium">Normal range:</span>{" "}
          <span className="text-emerald-600 font-semibold">
            {normal}
          </span>
        </p>

        <p className="text-slate-600">
          {note}
        </p>
      </div>
    </div>
  );
}
