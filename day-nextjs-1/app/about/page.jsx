import Link from "next/link";


export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <h1>Welcome About.</h1>
            <Link 
            href={"/"} 
            className="bg-white text-blue-600 px-6 py-3 font-semibold"
            >
                Home</Link>
        </main>
    );
}
