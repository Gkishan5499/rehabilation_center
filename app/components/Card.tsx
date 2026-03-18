import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
        hover ? "hover:shadow-xl hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
