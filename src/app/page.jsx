import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Hero / Banner */}
      <section className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a Mi Tienda Virtual
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Encuentra los mejores productos al mejor precio
        </p>

        {/* Botón con Link */}
        <Link href="/products">
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
            Comprar ahora
          </button>
        </Link>
      </section>

      {/* Productos destacados */}
      <section className="flex-1 p-6 bg-gray-50 w-full">
        <h2 className="text-2xl font-bold text-orange-700 mb-8 text-center">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border border-orange-100"
            >
              <img
                src={``}
                alt="Producto"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-orange-700">
                  Producto {i}
                </h3>
                <p className="text-gray-600">$ {(i * 25).toFixed(2)}</p>
                <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center w-full">
        © {new Date().getFullYear()} Mi Tienda Virtual
      </footer>
    </div>
  );
}
