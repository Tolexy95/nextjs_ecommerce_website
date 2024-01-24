import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  backgroundImage: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const backgroundImageOne = "/card-cover-5.png";
const backgroundImageTwo = "/card-cover-6.jpg";
const backgroundImageThree = "/card-cover-6 (1).jpg";
const backgroundImageFour = "/card-cover-7.jpg";

const HeroSectionCard: React.FC<HeroSectionProps> = ({ backgroundImage, alt, width, height, priority }) => {
  return (
    <div className="relative" >
      <Image
        alt={alt}
        src={backgroundImage}
        width={width}
        height={height}
        quality={100}
        priority={priority}
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute top-0 font-bold p-6">
        <h6 className="text-[hsla(148,62%,47%,1)] text-base">5 Items</h6>
        <h3 className="text-blue-dark text-4xl/[50px]">FURNITURE</h3>
        <h6 className="text-blue-dark text-base">Read More</h6>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 mt-9 font-montserrat w-full h-full" >
      <div className="lg:row-span-3">
        <HeroSectionCard backgroundImage={backgroundImageOne} alt="Image A" width={450} height={620} priority ={true} />
      </div>

       <div className="lg:col-span-3">
        <HeroSectionCard backgroundImage={backgroundImageTwo} alt="Image B" width={678} height={300} priority ={true}/>
      </div>

      <div className="">
        <HeroSectionCard backgroundImage={backgroundImageThree} alt="Image C" width={332} height={138} priority ={true} />
      </div>

      <div>
        <HeroSectionCard backgroundImage={backgroundImageFour} alt="Image D" width={331} height={300} priority ={true}/>
      </div> 
    </div>
  );
};

export default HeroSection;
