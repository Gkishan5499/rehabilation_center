import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-medical-primary text-white hover:bg-medical-secondary shadow-md hover:shadow-lg focus:ring-medical-primary",
    secondary: "bg-medical-accent text-white hover:bg-green-600 shadow-md hover:shadow-lg focus:ring-medical-accent",
    outline: "border-2 border-medical-primary text-medical-primary hover:bg-medical-primary-light focus:ring-medical-primary",
    ghost: "text-medical-primary hover:bg-medical-primary-light focus:ring-medical-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
