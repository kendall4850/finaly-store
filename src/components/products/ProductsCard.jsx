"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const ProductsCard = ({ product }) => {
  const { addProduct } = useCartStore();

  return (
    <Card className="flex flex-col bg-orange-50 border border-orange-200 hover:shadow-lg transition">
      <CardHeader>
        {/* Contenedor de la imagen */}
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle className="truncate h-7 mt-4 text-orange-700 font-semibold">
          {product.title}
        </CardTitle>
        <CardDescription className="text-orange-600">
          {product.category}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="font-bold text-lg text-orange-700">${product.price}</p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-col gap-2">
          <Link
            href={`/products/${product.id}`}
            className="w-full text-center text-orange-700 font-semibold hover:underline"
          >
            Ver Detalle
          </Link>
          <button
            onClick={() => addProduct(product)}
            className="w-full p-2 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-700 transition"
          >
            Añadir al carrito
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
