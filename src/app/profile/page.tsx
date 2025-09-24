import { Metadata } from "next";
import ProfileContent from "./components/ProfileContent";

export const metadata: Metadata = {
  title: "Profile - Real Estate Algarve | My Account",
  description: "Manage your Real Estate Algarve profile, preferences, and saved properties.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
            <ProfileContent />
          </div>
        </div>
      </div>
    </div>
  );
}
