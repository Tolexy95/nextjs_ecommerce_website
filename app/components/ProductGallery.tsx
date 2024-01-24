"use client";

import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";

interface Product {
  id: number;
  images: string;
  title: string;
  category: string;
  price: string;
  discountPercentage: string;
}

const ProductGallery: React.FC<{ product: Product }> = ({ product }) => {
  // Check if 'product' and 'product.images' are defined before accessing 'images'
  const hasImages = product && product.images && product.images.length > 0;

  return (
    <div className="md:w-[32rem] md:h-[32rem] w-[16rem] h-[16rem]">
      <div className="aspect-h-1 aspect-w-1  rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800 h-full">
      {hasImages && (
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml; base64, ${toBase64(
              shimmer(200, 200)
            )}`}
            src={product.images[0]}
            alt={product.title || ""}
            width={600}
            height={750}
            className="object-cover w-full object-center h-full shadow-sm"
          />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
