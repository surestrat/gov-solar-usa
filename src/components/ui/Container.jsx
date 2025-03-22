import React from "react";

const Container = ({ children, className = "", ...props }) => {
	return (
		<div
			className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl h-auto ${className}`}
			style={{ minHeight: "auto", height: "auto" }}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;
