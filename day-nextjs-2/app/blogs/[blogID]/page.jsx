
import Link from "next/link";
import { notFound } from "next/navigation";

const Blogs1 = async ({ params }) => {
  const { blogID } = await params;

  if (!/^\d+$/.test(blogID)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">

      <div className="bg-white max-w-xl w-full p-10 rounded-2xl shadow-2xl text-center">

        <div className="text-6xl mb-6">
          📖
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Blog
        </h1>

        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Blog {blogID} Page
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Thanks for visiting our blog. Explore interesting articles
          and learn something new!
        </p>

        <div className="flex justify-center gap-4">

          <Link
            href="/blogs"
            className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
          >
            ← All Blogs
          </Link>

          <Link
            href="/"
            className="bg-gray-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:scale-105 transition duration-300 shadow-md"
          >
            Home
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Blogs1;
