import React from 'react'

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Selamat Datang di Halaman Home
      </h1>
      <p className="max-w-xl text-center text-lg mb-8 drop-shadow-md">
        Ini adalah tempat di mana ide bertemu teknologi. Jelajahi fitur kami dan rasakan pengalaman terbaik.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
        Mulai Sekarang
      </button>
    </div>
  )
}
