
import Link from "next/link";

const Blogs = () => {
  return (
    <main className="min-h-screen bg-gray-300 px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-black-600 mb-4">
          Welcome to Our Blogs
        </h1>

        <p className="text-gray-600 text-center mb-12 text-lg">
          Explore our latest blogs and articles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Blog 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Blog 1
            </h2>

            <p className="text-gray-600 mb-6">
              Explore our first blog and learn something new.
            </p>

            <Link
              href="/blogs/1"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Read More →
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Blog 2
            </h2>

            <p className="text-gray-600 mb-6">
              Discover interesting information in our second blog.
            </p>

            <Link
              href="/blogs/2"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Read More →
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Blog 3
            </h2>

            <p className="text-gray-600 mb-6">
              Read our third blog for more exciting content.
            </p>

            <Link
              href="/blogs/3"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Read More →
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Blogs;
