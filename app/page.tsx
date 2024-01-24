"use client";

import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "./api/apiSlice";
// import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import CustomButton from "./components/CustomButton";
import { useAppSelector } from "@/lib/hooks";


interface HomeProps {
  // Add any other props if needed
}

const Home: React.FC<HomeProps> = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(10);
  const { data: productData, isLoading, refetch } = useGetAllProductsQuery("");
  const isCartOpen =useAppSelector((state) => state.cart.isCartOpen);
  const isWishlistOpen=useAppSelector((state) => state.wishlist.isWishlistOpen);
 

  useEffect(() => {
    // Refetch products when the number of visible products changes
    refetch();
  }, [visibleProducts, refetch]);

  const handleLoadMore = () => {
    // Increase the number of visible products by 5
    setVisibleProducts((prev) => prev + 5);
  };

  return (
    <>
    {!isCartOpen && !isWishlistOpen && (
      <div className="w-full font-montserrat">
      {/* <HeroSection /> */}
      <div className="text-center mt-9">
        <h4 className="font-normal text-xl text-gray-light">
          Featured Products
        </h4>
        <h3 className="font-bold text-2xl text-blue-dark">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-normal text-base text-blue-dark">
          Problems trying to resolve the conflict between{" "}
        </p>
        <div className="mt-10 bg-[hsl(210,26%,78%,0.1)] px-16 py-10">
          {isLoading ? (
            // Display a loading indicator while products are being fetched
            <p>Loading...</p>
          ) : (
            // Render ProductGrid with the visible products
            productData?.products && (
              <ProductGrid
                products={productData.products.slice(0, visibleProducts)}
              />
            )
          )}
        </div>
        {visibleProducts < productData?.products.length && (
          <div  className="mt-12">
            <CustomButton
              variant="outlined"
              onClick={handleLoadMore}
            >
              LOAD MORE PRODUCTS
            </CustomButton>
          </div>
        )}
      </div>

      <div className="text-center mt-9">
        <h4 className="font-normal text-xl text-gray-light">
          Featured Products
        </h4>
        <h3 className="font-bold text-2xl text-blue-dark">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-normal text-base text-gray-light">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
    </div>
    )}
     </>
  );
};

export default Home;
