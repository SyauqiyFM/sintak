import React from "react";

const products = [
  {
    id: 1,
    name: "Kopi Arabika Gayo",
    origin: "Aceh, Sumatera Utara",
    description:
      "Kopi Arabika premium dengan cita rasa floral dan aftertaste yang lembut. Dipetik dari dataran tinggi Gayo yang terkenal kualitasnya.",
    price: "Rp 250.000 / kg",
  },
  {
    id: 2,
    name: "Kopi Robusta Lampung",
    origin: "Lampung",
    description:
      "Kopi Robusta dengan rasa bold dan aroma kuat, cocok untuk pencinta kopi pekat dan berkarakter.",
    price: "Rp 150.000 / kg",
  },
  {
    id: 3,
    name: "Kopi Liberika Kalimantan",
    origin: "Kalimantan",
    description:
      "Jenis kopi langka dengan aroma unik dan rasa khas buah-buahan eksotis, hasil dari perkebunan di Kalimantan.",
    price: "Rp 300.000 / kg",
  },
];

export default function Product() {
  return (
    <div className="min-h-[70vh] bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Produk Kopi Eksportir Terbaik Kami
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-2xl font-semibold text-yellow-700 mb-1">
                {product.name}
              </h2>
              <p className="text-sm italic text-gray-500 mb-3">
                Asal: {product.origin}
              </p>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="font-bold text-lg text-gray-900">
                {product.price}
              </span>
              <button className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
