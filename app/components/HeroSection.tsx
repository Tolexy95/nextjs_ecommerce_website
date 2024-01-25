import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  backgroundImage: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?:string;
}

const backgroundImageOne = "/media bg-cover.jpg";
const backgroundImageTwo = "/card-cover-6.jpg";
const backgroundImageThree = "/card-cover-6 (1).jpg";
const backgroundImageFour = "/card-cover-7.jpg";

const HeroSectionCard: React.FC<HeroSectionProps> = ({
  backgroundImage,
  alt,
  width,
  height,
  priority,
  className,
}) => {
  return (
    <div className="relative">
      <Image
        alt={alt}
        src={backgroundImage}
        width={width}
        height={height}
        quality={100}
        priority={priority}
        className ={className}
      />

      <div className="absolute top-0 font-bold p-6">
        <h6 className="text-[hsla(148,62%,47%,1)] text-base">5 Items</h6>
        <h3 className="text-blue-dark lg:text-4xl/[50px]">FURNITURE</h3>
        <h6 className="text-blue-dark text-base">Read More</h6>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-9 font-montserrat">
      <div className="lg:row-start-1 lg:row-span-3">
        <HeroSectionCard
          backgroundImage={backgroundImageOne}
          alt="Image A"
          width={450}
          height={620}
          priority={true}
           className="object-cover w-full h-full"   
        />
      </div>

      <div className="lg:col-start-2 lg:row-start-1 lg:col-span-2">
        <HeroSectionCard
          backgroundImage={backgroundImageTwo}
          alt="Image B"
          width={678}
          height={300}
          priority={true}
          className="object-cover w-full  h-full"
        />
      </div>

      <div className="lg:col-start-2 lg:row-start-2">
        <HeroSectionCard
          backgroundImage={backgroundImageThree}
          alt="Image C"
          width={332}
          height={138}
          priority={true}
          className="object-cover w-full  h-full"
        />
      </div>

      <div className="lg:col-start-3 lg:row-start-2">
        <HeroSectionCard
          backgroundImage={backgroundImageFour}
          alt="Image D"
          width={331}
          height={300}
          priority={true}
          className="object-cover w-full  h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
