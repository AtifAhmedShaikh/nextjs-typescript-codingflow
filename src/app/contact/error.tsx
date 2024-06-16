'use client'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Oops! An error occurred
        </h2>
        <div className="text-gray-700 mb-6">
          Something went wrong. But {"don't"} worry{","} our team of highly trained
          monkeys is on it!
        </div>
        <div className="text-lg text-gray-500 mb-6">🙈 🙉 🙊</div>
        <div className="text-gray-700 mb-6">
          In the meantime{","} why not enjoy this mesmerizing bouncing text?
        </div>
        <div className=" animate-bounce text-4xl text-blue-500 mb-6">
          &#128558; Awesome! &#128558;
        </div>
        <div className="text-gray-700">
          Feel free to contact support if the issue persists.
        </div>
      </div>
    </div>

  )
}