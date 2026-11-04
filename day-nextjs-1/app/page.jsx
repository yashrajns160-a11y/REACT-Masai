import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Welcome to my home.
      </h1>

      <Link
        href="/about"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
      >
        About
      </Link>
      <Link
        href="/services"
        className="bg-white text-blue-600 px-6 py-3 my-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
      >
        Service
      </Link>
    </main>
  );
}