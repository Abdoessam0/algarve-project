import { Metadata } from "next";
import RegisterForm from "./components/RegisterForm";

export const metadata: Metadata = {
  title: "Register - Real Estate Algarve | Create Your Account",
  description: "Create your Real Estate Algarve account to access exclusive property listings and connect with verified professionals in Algarve, Portugal.",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 flex items-center justify-center px-4 py-12">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
      </div>

      <RegisterForm />
    </div>
  );
}
