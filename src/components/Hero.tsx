import React, { useEffect, useState } from "react";
import Button from "./Button";
import heroBg from '../assets/hero.webp';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative text-white"
      style={{
        height: "100vh",
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: `center ${scrollY * 0.5}px`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="relative z-10 flex flex-col items-end justify-center h-full p-6 text-right">
        <h1 className="text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Welcome to Movie Finder
        </h1>
        <p className="text-xl font-medium mb-6 max-w-xl">
          Discover your favorite movies and find out what's playing near you.
          Join us for an unforgettable cinematic journey.
        </p>
        <Button onClick={onExploreClick}>Start Exploring</Button>
      </div>
    </div>
  );
};

export default Hero;
