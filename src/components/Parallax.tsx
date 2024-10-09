import React from "react";

interface ParallaxProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ backgroundImage, children }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: "translateZ(0)",
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Parallax;
