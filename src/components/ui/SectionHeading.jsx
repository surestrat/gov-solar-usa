import { motion } from "framer-motion";

const SectionHeading = ({
	title,
	subtitle,
	centered = true,
	className = "",
	titleClassName = "",
	subtitleClassName = "",
}) => {
	// Animation variants
	const headingAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
		}),
	};

	return (
		<div className={`${centered ? "text-center" : ""} mb-16 ${className}`}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				className="relative"
			>
				{centered && (
					<motion.div
						className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-20 h-2 rounded-full"
						style={{
							background: "linear-gradient(to right, #B22234, #0052A5)",
						}}
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: 80 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
					/>
				)}

				<motion.h2
					custom={0}
					variants={headingAnimation}
					className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${titleClassName}`}
					style={{ color: "#0052A5" }} /* Lighter USA blue color */
				>
					{title}
				</motion.h2>

				{subtitle && (
					<motion.p
						custom={0.2}
						variants={headingAnimation}
						className={`text-gray-600 text-lg lg:text-xl ${
							centered ? "max-w-3xl mx-auto" : ""
						} ${subtitleClassName}`}
					>
						{subtitle}
					</motion.p>
				)}
			</motion.div>
		</div>
	);
};

export default SectionHeading;
