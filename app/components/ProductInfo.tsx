"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import CustomButton from "./CustomButton";
import { IoCartSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { incQty, decQty, addToCart } from "@/lib/features/cart/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToWishlist,
  clearWishlist,
} from "@/lib/features/wishlist/productWishlistSlice";
import { Product } from "../types/types";

const ProductInfo: React.FC<{ product: Product }> = ({ product }) => {
  const initialRatings = [0, 0, 0, 0, 0];
  const [ratings, setRatings] = useState(initialRatings);

  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.cart.quantity);

  useEffect(() => {
    // Load user ratings from local storage
    const savedRatings = localStorage.getItem("userRatings");
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Function to handle star rating click
  const handleStarClick = (index: number) => {
    const newRatings = [...ratings];
    newRatings[index] = newRatings[index] === 0 ? 1 : 0;
    setRatings(newRatings);
    localStorage.setItem("userRatings", JSON.stringify(newRatings));
  };

  // Function to handle quantity increment
  const handleIncrement = () => {
    dispatch(incQty());
  };

  // Function to handle quantity decrement
  const handleDecrement = () => {
    dispatch(decQty());
  };

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          images: product.images[0],
          description: product.description,
          quantity: quantity,
        },
        quantity: quantity,
      })
    );

    // Display a toast notification
    toast.success(`${quantity} ${product.title} added to cart!`);
  };

  // Function to handle adding the product to the wishlist
  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        thumbnail: product.thumbnail,
        description: product.description,
      })
    );
  };

  //function to clear the wishlist
  const handleReset = () => {
    // Dispatch the clearCart action to clear all data from local storage
    dispatch(clearWishlist());
  };

  const handleColourChange = () => {
    // Implement color change logic if needed
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="w-full font-montserrat">
        <p className="text-2xl font-bold tracking-tight">{product?.title}</p>

        {/* Star ratings */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex text-xl items-center pt-2 cursor-pointer">
            {ratings.map((rating, index) => (
              <div key={index} onClick={() => handleStarClick(index)}>
                {rating === 0 ? (
                  <AiOutlineStar />
                ) : (
                  <AiFillStar className=" text-yellow-400" />
                )}
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-sm">10 Reviews</h1>
          </div>
        </div>

        {/* Product price */}
        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight">$ {product?.price}</p>
        </div>

        {/* Product description */}
        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-xl tracking-tight">{product?.description}</p>
        </div>

        {/* Product availability */}
        <div className="mt-3 flex gap-3 items-center">
          <h2>Availability :</h2>
          <p className="text-xl">in stock</p>
        </div>

        {/* Quantity controls */}
        <div className="mt-7 mb-6">
          <p className="flex items-center border border-gray-500 gap-5 w-32 py-2 px-6">
            <span className="text-xl cursor-pointer" onClick={handleDecrement}>
              <AiOutlineMinus />
            </span>
            <span className="text-xl">{quantity}</span>
            <span
              className="text-xl cursor-pointer bg"
              onClick={handleIncrement}
            >
              <AiOutlinePlus />
            </span>
          </p>
        </div>

        <div className="mt-10">
          <hr />
        </div>

        {/* Colors button */}
        <div className="flex gap-3 mt-3">
          <div
            className="w-7 h-7 rounded-full bg-blue-700 cursor-pointer"
            onClick={handleColourChange}
          />
          <div
            className="w-7 h-7 rounded-full bg-green-500 cursor-pointer"
            onClick={handleColourChange}
          />
          <div
            className="w-7 h-7 rounded-full bg-orange-500 cursor-pointer"
            onClick={handleColourChange}
          />
          <div
            className="w-7 h-7 rounded-full bg-black cursor-pointer"
            onClick={handleColourChange}
          />
        </div>

        {/* Custom button */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-4">
          <CustomButton
            variant="outlined"
            onClick={handleColourChange}
            className=""
          >
            Select Options
          </CustomButton>

          <div className="flex items-center gap-4">
            <button
              className="w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center shadow-[0_2px_4px_0_hsla(0,0%,0%,0.1)]"
              onClick={handleAddToCart}
            >
              <IoCartSharp className="" />
            </button>

            <button
              className="w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center shadow-[0_2px_4px_0_hsla(0,0%,0%,0.1)]"
              onClick={handleAddToWishlist}
            >
              <MdOutlineFavoriteBorder className="" />
            </button>
{/*for development purpose only */}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
