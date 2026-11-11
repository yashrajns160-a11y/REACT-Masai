import Link from "next/link";


export default function Services() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <h1>Welcome Services.</h1>
            <Link
                href={"/"}
                className="bg-white text-blue-600 px-6 py-3 font-semibold my-3"
            >
                Home
            </Link>
            
            <Link
                href={"/services/app-dev"}
                className="bg-white text-blue-600 px-6 py-4 font-semibold my-3"
            >
                App Development
            </Link>
            <Link
                href={"/services/web-dev"}
                className="bg-white text-blue-600 px-6 py-4 font-semibold my-3"
            >
                Web Development
            </Link>
            <Link
                href={"/"}
                className="bg-white text-blue-600 px-6 py-4 font-semibold my-3"
            >
                App/Web Design
            </Link>
        </main>
    );
}
