
import Link from "next/link";

const Services = () => {
  return (
    <main className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-10">

      <div className="max-w-4xl w-full text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome Services Page
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Explore our development services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Web Development */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-5">💻</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Web Development
            </h2>

            <p className="text-gray-600 mb-6">
              Build modern, responsive and user-friendly websites.
            </p>

            <Link
              href="/services/web-dev"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Web Dev →
            </Link>

          </div>

          {/* App Development */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-5">📱</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              App Development
            </h2>

            <p className="text-gray-600 mb-6">
              Create powerful and user-friendly mobile applications.
            </p>

            <Link
              href="/services/app-dev"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Explore App Dev →
            </Link>

          </div>

        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-950 hover:scale-105 transition duration-300 shadow-md"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </main>
  );
};

export default Services;
