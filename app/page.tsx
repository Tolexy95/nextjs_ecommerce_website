"use client";

import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "./api/apiSlice";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import CustomButton from "./components/CustomButton";
import arrow from "../public/uil_arrow-growth.svg";
import carbonBook from "../public/carbon_book.svg";
import bookReader from "../public/bx_bxs-book-reader.svg";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import gridOne from "../public/unsplash_0y8p69vwIYM.png";
import gridTwo from "../public/unsplash_1R1ecHV4i0Y.png";
import gridThree from "../public/unsplash_6_dx4H4yi1Y.png";
import gridFour from "../public/unsplash_GHztzvLLOdQ.png";
import gridFive from "../public/unsplash_QLGA5Zv3doo.png";
import gridSix from "../public/unsplash_UUTOuXqaExk.png";
import gridSeven from "../public/unsplash_ah7yIXWrtKs.png";
import gridEight from "../public/unsplash_jo40QKbxUP0.png";
import gridNine from "../public/unsplash_rhn8ff1G_QY.png";
import userImage from "../public/#user.1.svg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface HomeProps {}
const imageData = [
  {
    image: gridOne,
    alt: "grid one",
  },
  {
    image: gridTwo,
    alt: "grid two",
  },
  {
    image: gridThree,
    alt: "grid three",
  },
  {
    image: gridFour,
    alt: "grid four",
  },
  {
    image: gridFive,
    alt: "grid five",
  },
  {
    image: gridSix,
    alt: "grid six",
  },
  {
    image: gridSeven,
    alt: "grid seven",
  },
  {
    image: gridEight,
    alt: "grid eight",
  },
  {
    image: gridNine,
    alt: "grid nine",
  },
];

const Home: React.FC<HomeProps> = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(10);
  const { data: productData, isLoading, refetch } = useGetAllProductsQuery("");
  const initialRatings = [0, 0, 0, 0, 0];
  const [ratings, setRatings] = useState(initialRatings);

  useEffect(() => {
    // Refetch products when the number of visible products changes
    refetch();
  }, [visibleProducts, refetch]);

  const handleLoadMore = () => {
    // Increase the number of visible products by 5
    setVisibleProducts((prev) => prev + 5);
  };

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
  return (
    <>
      <div className="w-full font-montserrat">
        <div className="px-12">
          <HeroSection />
        </div>
        <div className="text-center mt-24">
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
            <div className="mt-12">
              <CustomButton variant="outlined" onClick={handleLoadMore}>
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

        <div className="flex flex-col lg:items-center lg:justify-evenly lg:flex-row px-16 gap-10 mt-10">
          <div className="flex flex-col lg:w-[20%]  items-center content-center self-center justify-center text-center gap-5 ">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml; base64, ${toBase64(
                shimmer(200, 200)
              )}`}
              src={bookReader}
              alt={"book reader icon"}
              width={72}
              height={72}
            />
            <img src={arrow} alt="" />
            <p>Easy wins</p>
            <p className="">Get your best looking smile now!</p>
          </div>

          <div className="flex-col lg:w-[20%] items-center content-center self-center flex justify-center text-center gap-5">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml; base64, ${toBase64(
                shimmer(200, 200)
              )}`}
              src={carbonBook}
              alt={"carbon icon"}
              width={72}
              height={72}
            />
            <h1>Concrete</h1>
            <div className="">
              <p>
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>

          <div className="flex-col lg:w-[20%] items-center content-center self-center flex justify-center text-center gap-5">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml; base64, ${toBase64(
                shimmer(200, 200)
              )}`}
              src={arrow}
              alt={"arrow icon"}
              width={72}
              height={72}
            />
            <p>Hack Growth</p>
            <p>Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-evenly mt-28 px-16">
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-2xl font-bold text-blue-dark items-start">
            What they say about us
          </h3>
          <div className="w-40 h-40 rounded-full mt-10">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml; base64, ${toBase64(
                shimmer(200, 200)
              )}`}
              src={gridSix}
              alt={"user image"}
              width={90}
              height={90}
              className="object-cover object-center w-full h-full rounded-full"
            />
          </div>

          <div className="flex text-2xl items-center pt-2 cursor-pointer mt-6">
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

          <h6 className="text-base font-bold text-gray-light mt-10">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </h6>

          <h1 className="text-[hsla(202,87%,54%,1)] font-bold text-xl mt-16">Regina Miles</h1>
          <h6 className=" text-blue-dark font-bold text-base mt-3">Designer</h6>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {imageData.map((image, index) => (
            <div key={index} className="">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml; base64, ${toBase64(
                  shimmer(200, 200)
                )}`}
                src={image.image}
                alt={image.alt}
                width={143}
                height={143}
                className="object-cover object-center w-full  h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
