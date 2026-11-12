
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 px-8 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <h1 className="text-2xl font-bold text-white">
            MyWebsite
          </h1>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              Services
            </Link>

            <Link
              href="/blogs"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              Blogs
            </Link>
          </div>

        </div>
      </nav>

      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to My Website!
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Learn Next.js with Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
