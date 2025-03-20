import React from "react";

const Container = ({ children, size = "default", className = "" }) => {
	const containerSize = `container-${size}`;

	return (
		<div className={`container ${containerSize} ${className}`}>{children}</div>
	);
};

export default Container;
