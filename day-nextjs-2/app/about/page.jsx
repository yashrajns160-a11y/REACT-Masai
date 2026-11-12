
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-300 flex items-center justify-center px-4">

      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center">

        <h1 className="text-4xl font-bold text-black-400 mb-4">
          Welcome About Page
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          This is the About page of my website. Here you can learn more
          about us and our services.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
};

export default About;
