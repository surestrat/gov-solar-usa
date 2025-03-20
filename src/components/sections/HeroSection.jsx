import { motion } from "framer-motion";
import { ArrowDown, Calculator, ChevronDown, Star, Zap } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = ({ onGetQuoteClick, onCalculateSavingsClick }) => {
	// Animation variants
	const headerAnimation = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const textAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.2,
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		}),
	};

	return (
		<section className="relative min-h-screen flex items-center">
			{/* Background image with dark overlay for text readability */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
				}}
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.5)",
					}}
				></div>
			</div>

			<div className="container mx-auto relative z-10 px-4 py-24 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="inline-flex items-center px-4 py-2 rounded-full mb-8"
						style={{
							background: "rgba(255, 255, 255, 0.15)",
							backdropFilter: "blur(8px)",
							border: "1px solid rgba(255, 255, 255, 0.3)",
						}}
					>
						<span
							className="flex items-center font-medium text-white"
							style={{ fontSize: "0.875rem" }}
						>
							<Star
								className="mr-2"
								style={{ width: "1rem", height: "1rem", color: "#B22234" }}
							/>
							New American Solar Program - Limited Time Opportunity
						</span>
					</motion.div>

					{/* Headline with fixed styling */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={headerAnimation}
						className="mb-6"
					>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 hero-heading">
							Save up to 60% on Solar
							<br />
							<span className="text-gradient">Energy for Your Home</span>
						</h1>
					</motion.div>

					{/* Subheadline */}
					<motion.p
						custom={1}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-6 max-w-2xl mx-auto text-xl text-white"
						style={{
							opacity: 0.95,
							textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
							lineHeight: 1.5,
						}}
					>
						Take advantage of tax credits and incentives to reduce the cost of
						solar installation while helping America achieve energy
						independence.
					</motion.p>

					{/* Feature badges */}
					<motion.div
						className="mt-10 flex flex-wrap justify-center gap-4"
						custom={2}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
					>
						{[
							{ icon: <Zap />, text: "Save on Energy Bills" },
							{ icon: <Star />, text: "Federal Tax Credits" },
							{ icon: <Calculator />, text: "Custom Solar Planning" },
						].map((feature, index) => (
							<div
								key={index}
								className="flex items-center px-4 py-2 rounded-full"
								style={{
									background: "rgba(255, 255, 255, 0.15)",
									backdropFilter: "blur(8px)",
									border: "1px solid rgba(255, 255, 255, 0.3)",
								}}
							>
								<span
									className="mr-2"
									style={{ color: "#B22234", width: "1rem", height: "1rem" }}
								>
									{feature.icon}
								</span>
								<span
									className="text-white font-medium"
									style={{ fontSize: "0.875rem" }}
								>
									{feature.text}
								</span>
							</div>
						))}
					</motion.div>

					{/* Fixed CTAs */}
					<motion.div
						custom={3}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-12 hero-button-container"
					>
						<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
							<Button
								onClick={onGetQuoteClick}
								variant="secondary"
								className="text-lg w-full sm:w-auto px-8 py-3"
							>
								Get Your Free Quote
							</Button>
							<Button
								onClick={onCalculateSavingsClick}
								variant="outline"
								className="text-lg w-full sm:w-auto px-8 py-3"
								style={{
									borderColor: "white",
									color: "white",
									backgroundColor: "rgba(255, 255, 255, 0.1)",
								}}
							>
								Calculate Potential Savings
							</Button>
						</div>
					</motion.div>
				</div>

				{/* Scroll indicator positioned correctly */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 1.5,
						duration: 1,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="absolute left-1/2 transform -translate-x-1/2"
					style={{
						bottom: "2rem",
						cursor: "pointer",
					}}
					onClick={() => {
						document
							.getElementById("benefits")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					<div className="flex flex-col items-center text-white">
						<span
							className="text-sm mb-2"
							style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
						>
							Scroll to learn more
						</span>
						<ChevronDown className="h-6 w-6 animate-bounce" />
					</div>
				</motion.div>
			</div>

			<style jsx>{`
				.text-gradient {
					background: linear-gradient(to right, white, #f0f0f0);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
					color: transparent;
				}

				.hero-heading {
					line-height: 1.1;
					letter-spacing: -0.02em;
					text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
				}

				@media (max-width: 640px) {
					.hero-button-container {
						flex-direction: column;
						align-items: center;
					}
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
