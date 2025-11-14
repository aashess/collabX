export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="text-xl font-semibold">User Name</h2>
            <p className="text-gray-600">@username</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            Email: user@example.com
          </p>
          <p className="text-gray-700">
            Role: User
          </p>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
