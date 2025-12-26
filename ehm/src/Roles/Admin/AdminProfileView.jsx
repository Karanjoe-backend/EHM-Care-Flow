export default function AdminProfileView({ onEdit }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Profile Card */}
      <div className="bg-white rounded shadow p-4 text-center">
        <img
          src="https://i.pravatar.cc/100"
          className="mx-auto rounded-full mb-3"
        />
        <h3 className="font-bold">Max Smith</h3>
        <p className="text-sm text-gray-500">Admin</p>

        <button
          onClick={onEdit}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Edit Profile
        </button>
      </div>

      {/* Personal Info */}
      <div className="col-span-2 bg-white rounded shadow p-6">
        <h2 className="text-lg font-bold mb-4">Personal Information</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Info label="User Name" value="Max Smith" />
          <Info label="Admin ID" value="MG-01" />
          <Info label="Email" value="max@healthcare.com" />
          <Info label="Language" value="English" />
          <Info label="Hospital Name" value="MG Health Care" />
          <Info label="Country" value="India" />
          <Info label="Contact" value="+91 98765 43210" />
          <Info label="Time Zone" value="IST (UTC +5:30)" />
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
