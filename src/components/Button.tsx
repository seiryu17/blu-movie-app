import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-semibold text-white bg-blue-600 rounded-lg group hover:bg-blue-700 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <span className="absolute inset-0 w-full h-full transition-transform bg-gradient-to-r from-blue-500 to-blue-700 group-hover:translate-x-1 group-hover:-translate-y-1 rounded-lg blur-md"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
