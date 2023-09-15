import Image from '@/node_modules/next/image';
import React from 'react';
import nextjslogo from "../../_assets/nextjs-logo.png"
import typescriptlogo from "../../_assets/typescript-logo.png"
import tailwindlogo from "../../_assets/tailwind-logo.png"

const TechUsed = () => {

  return (
    <div className="carousel items-center justify-center flex flex-row gap-8 mt-8 mb-8">
      <Image
        src={nextjslogo}
        alt={`NextJS Logo`}
        width="64"
        height="64"
        className="logo"
      />
      <Image
        src={typescriptlogo}
        alt={`Typescript Logo`}
        width="64"
        height="64"
        className="logo"
      />
      <Image
        src={tailwindlogo}
        alt={`TailwindCSS Logo`}
        width="64"
        height="64"
        className="logo"
      />
    </div>
  );
};

export default TechUsed;