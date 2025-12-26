export default function AdminProfileEdit({ onCancel }) {
  return (
    <div className="max-w-3xl bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Edit Profile</h2>

      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Admin ID" />
        <Input label="Hospital Name" />
        <Input label="Contact Number" />
        <Input label="Email" />
        <Input label="Country" />
        <Input label="Language" />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button onClick={onCancel} className="px-4 py-2 border rounded">
          Cancel
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded">
          Update
        </button>
      </div>
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input className="w-full border p-2 rounded" />
    </div>
  );
}
