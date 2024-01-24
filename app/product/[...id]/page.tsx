"use client";
import React from "react";
import { useGetIndividualProductQuery } from "../../api/productSlice";
import { useParams } from "next/navigation";
import ProductGrid from "@/app/components/ProductGrid";
import ProductGallery from "@/app/components/ProductGallery";
import ProductInfo from "@/app/components/ProductInfo";
import { useGetAllProductsQuery } from "@/app/api/apiSlice";

interface ProductDetailsProps {
  id: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const {id} = useParams();

  // Convert the string id to a number
  const productId: number = +id;

  const { data: product } = useGetIndividualProductQuery(productId);
  const { data: productData } = useGetAllProductsQuery("");

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-[hsl(210,26%,78%,0.1)] px-20 py-10">
        {/* Product gallery */}
        <div className="flex items-center justify-center ">
          <ProductGallery product={product} />
        </div>
        {/* Product info */}
        <div className="flex">
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="mt-20 px-16 bg-[hsl(210,26%,78%,0.1)]">
        <h2 className="pt-10 pb-6 font-bold text-2xl text-blue-dark">BESTSELLER PRODUCTS</h2>
        <div className="mb-8">
        <hr />
      </div>
        {productData && productData.products ? (
          <ProductGrid products={productData.products} />
        ) : (
          <p>No bestseller products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
