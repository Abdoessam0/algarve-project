import { Metadata } from "next";
import RegisterForm from "./components/RegisterForm";

export const metadata: Metadata = {
  title: "Register - Real Estate Algarve | Real Estate Directory",
  description: "Create your Real Estate Algarve account to get personalized property recommendations and connect with verified professionals in Algarve, Portugal.",
  alternates: {
    canonical: "https://www.realestate-algarve.com/register",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            RE
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in here
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
