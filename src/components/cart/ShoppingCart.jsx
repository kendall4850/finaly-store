"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Separator } from "../ui/separator";

const ShoppingCart = () => {
  const {
    items,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      {/* Botón de abrir carrito */}
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 p-3 rounded-lg hover:bg-orange-200 transition-colors shadow-md">
          <ShoppingBasket className="text-orange-600 w-6 h-6" />
          <span className="text-orange-700 font-bold text-lg">Mi Carrito</span>
        </button>
      </SheetTrigger>

      {/* Contenido del carrito */}
      <SheetContent className="w-[400px] sm:w-[540px] bg-gradient-to-b from-orange-400 to-orange-600 text-white shadow-xl rounded-xl">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-white">
            Mi Carrito de compras
          </SheetTitle>
        </SheetHeader>

        {/* Lista de productos */}
        <div className="space-y-4 mt-6 px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-orange-100 text-orange-800 rounded-xl p-3 shadow hover:shadow-lg transition"
            >
              <span className="font-semibold text-orange-900">
                {item.title}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-orange-300 text-orange-900 font-bold px-3 py-1 rounded-lg hover:bg-orange-400 transition transform hover:scale-110"
                >
                  -
                </button>
                <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-lg font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition transform hover:scale-110"
                >
                  +
                </button>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg hover:bg-red-700 transition transform hover:scale-110"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6 border-orange-300" />

        {/* Totales */}
        <div className="px-4 space-y-2">
          <div className="flex justify-between font-bold text-white text-lg">
            <span>Total productos:</span> <span>{totalItems}</span>
          </div>
          <div className="flex justify-between font-bold text-white text-lg">
            <span>Total a pagar:</span> <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Botón de finalizar compra */}
        <div className="px-4 mt-6">
          <button className="w-full bg-white text-orange-600 font-bold py-3 rounded-xl shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Finalizar compra
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
