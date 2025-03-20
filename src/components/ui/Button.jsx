import { motion } from "framer-motion";

const Button = ({
	children,
	variant = "primary",
	className = "",
	onClick,
	type = "button",
	icon,
	disabled = false,
	isLoading = false,
}) => {
	// Map variants to our custom classes
	const variantClass = `btn-${variant}`;

	const buttonClass = `btn ${variantClass} ${className} ${
		disabled ? "opacity-70" : ""
	}`;

	// Animation variants
	const buttonAnimation = {
		rest: { scale: 1 },
		hover: { scale: 1.03 },
		tap: { scale: 0.97 },
	};

	return (
		<motion.button
			initial="rest"
			whileHover={!disabled ? "hover" : "rest"}
			whileTap={!disabled ? "tap" : "rest"}
			variants={buttonAnimation}
			transition={{ duration: 0.2, ease: "easeInOut" }}
			type={type}
			className={buttonClass}
			onClick={onClick}
			disabled={disabled || isLoading}
			style={disabled ? { cursor: "not-allowed" } : {}}
		>
			{isLoading && (
				<svg
					style={{
						marginLeft: "-0.25rem",
						marginRight: "0.75rem",
						height: "1.25rem",
						width: "1.25rem",
						animation: "spin 1s linear infinite",
					}}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						style={{ opacity: "0.25" }}
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						style={{ opacity: "0.75" }}
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			<span style={{ position: "relative", zIndex: 10 }}>{children}</span>
			{icon && (
				<span
					style={{ position: "relative", zIndex: 10, marginLeft: "0.5rem" }}
				>
					{icon}
				</span>
			)}
		</motion.button>
	);
};

export default Button;
