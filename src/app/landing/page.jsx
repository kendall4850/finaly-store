"use client";

import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero / Banner */}
      <section className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-28 px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          La tienda de Kendall
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Encuentra los mejores productos para todas tus necesidades
        </p>
        <Link href="/products">
          <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-200 transition text-lg">
            Comprar ahora
          </button>
        </Link>
      </section>

      {/* Productos destacados */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-12">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-orange-100"
            >
              <img
                src={``}
                alt={`Producto ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-orange-700 mb-2">
                  Producto {i}
                </h3>
                <p className="text-gray-600 mb-4">$ {(i * 25).toFixed(2)}</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¡Ofertas exclusivas!
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          No te pierdas descuentos de hasta el 50% en tus productos favoritos.
        </p>
        <Link href="/products">
          <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-200 transition text-lg">
            Ver ofertas
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} La tienda de Kendall - Todos los derechos
        reservados
      </footer>
    </div>
  );
};

export default LandingPage;
