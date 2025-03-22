import React from "react";

const variants = {
	primary:
		"bg-usa-blue-500 hover:bg-usa-blue-600 text-white border-transparent",
	secondary:
		"bg-usa-red-500 hover:bg-usa-red-600 text-white border-transparent",
	outline:
		"bg-transparent border border-usa-blue-500 text-usa-blue-500 hover:bg-usa-blue-50",
	ghost: "bg-transparent hover:bg-gray-100 text-usa-blue-500",
	link: "bg-transparent underline text-usa-blue-500 hover:text-usa-blue-600 p-0",
};

const sizes = {
	sm: "py-1 px-3 text-sm",
	md: "py-2 px-4 text-base",
	lg: "py-3 px-6 text-lg",
};

const Button = ({
	children,
	variant = "primary",
	size = "md",
	className = "",
	icon,
	iconPosition = "right",
	...props
}) => {
	const baseClasses =
		"font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-usa-blue-500 inline-flex items-center justify-center";

	return (
		<button
			className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
			{children}
			{icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
		</button>
	);
};

export default Button;
