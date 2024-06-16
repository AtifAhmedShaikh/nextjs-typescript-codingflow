import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find requested resource</p>
      <Link href="/">
        <p className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Return to Home
        </p>
      </Link>
    </div>
  );
}
