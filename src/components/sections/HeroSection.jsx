import { motion } from "framer-motion";
import {
	Calculator,
	ChevronDown,
	Star,
	Zap,
	Shield,
	Sun,
	Home,
	Leaf,
} from "lucide-react";
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

	// Particle animation for background
	const generateParticles = (count) => {
		return Array.from({ length: count }).map((_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 5 + 1,
			duration: Math.random() * 20 + 10,
		}));
	};

	const particles = generateParticles(20);

	// Solar panel animation for background
	const SolarPanel = () => (
		<motion.svg
			width="240"
			height="240"
			viewBox="0 0 240 240"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute opacity-10"
			style={{
				top: `${Math.random() * 70}%`,
				left: `${Math.random() * 80}%`,
				transform: `rotate(${Math.random() * 40 - 20}deg)`,
			}}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: [0.05, 0.12, 0.05], scale: 1 }}
			transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
		>
			<rect
				x="40"
				y="40"
				width="160"
				height="160"
				rx="8"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="40"
				y1="80"
				x2="200"
				y2="80"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="40"
				y1="120"
				x2="200"
				y2="120"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="40"
				y1="160"
				x2="200"
				y2="160"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="80"
				y1="40"
				x2="80"
				y2="200"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="120"
				y1="40"
				x2="120"
				y2="200"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
			<line
				x1="160"
				y1="40"
				x2="160"
				y2="200"
				stroke="rgba(147, 197, 253, 0.6)"
				strokeWidth="2"
			/>
		</motion.svg>
	);

	// Sun rays animation
	const SunRays = () => (
		<motion.div
			className="absolute top-10 right-10 w-72 h-72 opacity-20"
			initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
			animate={{ opacity: [0.1, 0.3, 0.1], scale: 1, rotate: 360 }}
			transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl"></div>
		</motion.div>
	);

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Solar-themed gradient background with animated overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
				{/* Animated particles */}
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute rounded-full bg-white opacity-20"
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							width: `${particle.size}px`,
							height: `${particle.size}px`,
						}}
						animate={{
							x: [0, Math.random() * 100 - 50],
							y: [0, Math.random() * 100 - 50],
							opacity: [0.1, 0.5, 0.1],
						}}
						transition={{
							duration: particle.duration,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				))}

				{/* Add solar panel SVGs */}
				<SolarPanel />
				<SolarPanel />
				<SolarPanel />

				{/* Add sun rays */}
				<SunRays />

				{/* Electric circuit patterns */}
				<svg
					className="absolute bottom-0 left-0 w-full h-48 opacity-10"
					viewBox="0 0 1000 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,100 Q250,30 500,100 T1000,100"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M0,120 Q250,180 500,120 T1000,120"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M0,80 Q250,140 500,80 T1000,80"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>
				</svg>

				{/* Additional solar-themed SVG element */}
				<svg
					className="absolute top-20 left-20 w-64 h-64 opacity-10"
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="100"
						cy="100"
						r="50"
						stroke="rgba(250, 204, 21, 0.4)"
						strokeWidth="2"
					/>
					<circle
						cx="100"
						cy="100"
						r="70"
						stroke="rgba(250, 204, 21, 0.3)"
						strokeWidth="1.5"
					/>
					<circle
						cx="100"
						cy="100"
						r="90"
						stroke="rgba(250, 204, 21, 0.2)"
						strokeWidth="1"
					/>
					<line
						x1="100"
						y1="20"
						x2="100"
						y2="50"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="100"
						y1="150"
						x2="100"
						y2="180"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="20"
						y1="100"
						x2="50"
						y2="100"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="150"
						y1="100"
						x2="180"
						y2="100"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="37"
						y1="37"
						x2="58"
						y2="58"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="142"
						y1="142"
						x2="163"
						y2="163"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="37"
						y1="163"
						x2="58"
						y2="142"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
					<line
						x1="142"
						y1="58"
						x2="163"
						y2="37"
						stroke="rgba(250, 204, 21, 0.6)"
						strokeWidth="2"
					/>
				</svg>

				{/* House with solar panels SVG */}
				<svg
					className="absolute bottom-40 right-20 w-72 h-72 opacity-10"
					viewBox="0 0 240 240"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* House outline */}
					<path
						d="M40,140 L120,80 L200,140 L200,220 L40,220 Z"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d="M80,220 L80,170 L120,170 L120,220"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>
					<rect
						x="140"
						y="180"
						width="30"
						height="40"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="2"
						fill="none"
					/>

					{/* Solar panels on roof */}
					<rect
						x="70"
						y="100"
						width="50"
						height="30"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="2"
						fill="none"
					/>
					<line
						x1="70"
						y1="110"
						x2="120"
						y2="110"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>
					<line
						x1="70"
						y1="120"
						x2="120"
						y2="120"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>
					<line
						x1="80"
						y1="100"
						x2="80"
						y2="130"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>
					<line
						x1="90"
						y1="100"
						x2="90"
						y2="130"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>
					<line
						x1="100"
						y1="100"
						x2="100"
						y2="130"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>
					<line
						x1="110"
						y1="100"
						x2="110"
						y2="130"
						stroke="rgba(250, 204, 21, 0.5)"
						strokeWidth="1.5"
					/>

					{/* Electric lines connecting panels */}
					<path
						d="M120,115 C140,115 140,150 160,150 L160,170"
						stroke="rgba(147, 197, 253, 0.6)"
						strokeWidth="1.5"
						fill="none"
					/>
				</svg>

				{/* Mesh grid overlay */}
				<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

				{/* Futuristic glowing lines */}
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"
						style={{ top: "30%" }}
						animate={{
							x: ["-100%", "100%"],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
					<motion.div
						className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full"
						style={{ top: "60%" }}
						animate={{
							x: ["100%", "-100%"],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
				</div>
			</div>

			<div className="container mx-auto relative z-10 px-4 py-24 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto">
					{/* Solar program badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="inline-flex items-center px-5 py-2 rounded-full mb-8 backdrop-blur-xl"
						style={{
							background: "rgba(59, 130, 246, 0.2)",
							border: "1px solid rgba(147, 197, 253, 0.3)",
							boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
						}}
					>
						<span className="flex items-center font-medium text-white text-sm">
							<Sun
								className="mr-2 animate-pulse"
								style={{ width: "1rem", height: "1rem", color: "#FDE68A" }}
							/>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
								FREE INSTALLATION • 2025 Solar Program
							</span>
						</span>
					</motion.div>
					{/* Headline with modern styling */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={headerAnimation}
						className="mb-6"
					>
						<h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-2">
							<span className="relative">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-blue-100 to-white">
									Free Solar Power
								</span>
								<motion.span
									className="absolute -inset-1 block opacity-20 bg-yellow-500 blur-xl"
									animate={{ opacity: [0.1, 0.3, 0.1] }}
									transition={{ duration: 3, repeat: Infinity }}
								/>
							</span>
							<br />
							<span className="relative inline-block mt-2">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
									Zero Cost Installation
								</span>
								<motion.div
									className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full"
									initial={{ width: "0%" }}
									animate={{ width: "100%" }}
									transition={{ duration: 1.2, delay: 0.8 }}
								/>
							</span>
						</h1>
					</motion.div>
					{/* Subheadline with improved styling */}
					<motion.p
						custom={1}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-8 max-w-2xl mx-auto text-xl text-blue-100 font-light"
						style={{
							lineHeight: 1.6,
							letterSpacing: "0.01em",
						}}
					>
						Harness the sun's energy at{" "}
						<span className="font-semibold text-yellow-300">
							zero installation cost
						</span>{" "}
						through our breakthrough program. Reduce your electric bill by up to{" "}
						<span className="font-semibold text-yellow-300">60%</span> with
						next-generation solar technology.
					</motion.p>
					{/* Feature badges with modern tech look */}
					<motion.div
						className="mt-12 flex flex-wrap justify-center gap-4"
						custom={2}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
					>
						{[
							{
								icon: <Sun className="stroke-yellow-300" />,
								text: "Free Installation",
							},
							{
								icon: <Zap className="stroke-yellow-300" />,
								text: "Reduce Electric Bills",
							},
							{
								icon: <Shield className="stroke-blue-300" />,
								text: "30% Federal Tax Credit",
							},
							{
								icon: <Leaf className="stroke-green-300" />,
								text: "Zero Carbon Footprint",
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								className="flex items-center px-5 py-3 rounded-full backdrop-blur-md"
								style={{
									background: "rgba(59, 130, 246, 0.1)",
									border: "1px solid rgba(147, 197, 253, 0.2)",
								}}
								whileHover={{
									scale: 1.05,
									boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
									background: "rgba(59, 130, 246, 0.2)",
								}}
							>
								<span className="mr-2">{feature.icon}</span>
								<span className="text-white font-medium text-sm">
									{feature.text}
								</span>
							</motion.div>
						))}
					</motion.div>
					{/* Modern CTAs with glow effects */}
					<motion.div
						custom={3}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-14 hero-button-container"
					>
						<div className="w-full flex flex-col sm:flex-row justify-center gap-5">
							<motion.div
								whileHover={{ scale: 1.03 }}
								className="relative group"
							>
								<div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
								<Button
									onClick={() => {
										document
											.getElementById("contact")
											.scrollIntoView({ behavior: "smooth" });
									}}
									variant="secondary"
									className="relative bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-none text-lg w-full sm:w-auto px-8 py-4 rounded-full font-medium"
								>
									Get Your Free Installation
								</Button>
							</motion.div>

							<motion.div whileHover={{ scale: 1.03 }}>
								<Button
									onClick={onCalculateSavingsClick}
									variant="outline"
									className="text-lg w-full sm:w-auto px-8 py-4 rounded-full backdrop-blur-md border-yellow-300/50 text-yellow-100 bg-transparent hover:bg-yellow-900/30 transition-all duration-300"
								>
									Calculate Solar Savings
								</Button>
							</motion.div>
						</div>
					</motion.div>
					{/* Trust indicators */}
					<motion.div
						custom={4}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-14 text-blue-200 text-sm flex flex-col items-center justify-center gap-2"
					>
						<div className="flex items-center gap-2">
							<span>Approved Solar Provider</span>
							<Shield className="h-4 w-4 text-green-300" />
						</div>
						<div className="flex items-center gap-6 opacity-70 mt-2">
							<div className="w-20 h-6 bg-yellow-200 mask-image-gradient rounded"></div>
							<div className="w-20 h-6 bg-blue-200 mask-image-gradient rounded"></div>
							<div className="w-20 h-6 bg-green-200 mask-image-gradient rounded"></div>
						</div>
					</motion.div>
					{/* Solar installation counter */}
					<motion.div
						custom={5}
						initial="hidden"
						animate="visible"
						variants={textAnimation}
						className="mt-6 flex justify-center"
					>
						<div className="py-2 px-4 rounded-full backdrop-blur-sm bg-blue-900/30 border border-blue-500/20">
							<span className="text-sm text-blue-200">
								<span className="font-bold text-yellow-300">5,430+</span> free
								installations completed nationwide
							</span>
						</div>
					</motion.div>
				</div>

				{/* Modern scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
					className="absolute left-1/2 transform -translate-x-1/2"
					style={{ bottom: "2rem", cursor: "pointer" }}
					onClick={() => {
						document
							.getElementById("benefits")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					<motion.div
						className="flex flex-col items-center text-blue-300"
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<span className="text-sm mb-2 font-light tracking-wider">
							Discover More
						</span>
						<ChevronDown className="h-6 w-6" />
					</motion.div>
				</motion.div>
			</div>

			<style jsx>{`
				.mask-image-gradient {
					mask-image: linear-gradient(
						to right,
						transparent,
						white,
						transparent
					);
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
