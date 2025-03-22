import React from "react";
import { motion } from "framer-motion";
import {
	Cloud,
	Droplet,
	Leaf,
	BadgeCheck,
	BarChart2,
	Info,
	ExternalLink,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const EnvironmentalImpactSection = () => {
	const impacts = [
		{
			icon: <Cloud className="w-12 h-12 text-blue-500" />,
			title: "Reduce CO₂ Emissions",
			description:
				"The average home solar system offsets about 100,000 lbs of carbon dioxide in its lifetime — equivalent to driving a car for 100,000 miles",
			stat: "100,000 lbs",
			statLabel: "CO₂ offset per home",
			gradient: "from-blue-100 to-blue-50",
			iconGradient: "from-blue-400 to-blue-600",
			hoverGradient: "from-blue-400/5 to-blue-600/5",
		},
		{
			icon: <Leaf className="w-12 h-12 text-green-500" />,
			title: "Preserve Natural Resources",
			description:
				"Solar power reduces dependence on finite resources like coal, natural gas, and oil, preserving them for future generations",
			stat: "1,500+ trees",
			statLabel: "Equivalent planting over system lifetime",
			gradient: "from-green-100 to-green-50",
			iconGradient: "from-green-400 to-green-600",
			hoverGradient: "from-green-400/5 to-green-600/5",
		},
		{
			icon: <Droplet className="w-12 h-12 text-cyan-500" />,
			title: "Save Water Resources",
			description:
				"Traditional electricity generation is water-intensive. Solar panels require virtually no water to generate electricity",
			stat: "30,000+ gallons",
			statLabel: "Water saved per year per household",
			gradient: "from-cyan-100 to-cyan-50",
			iconGradient: "from-cyan-400 to-cyan-600",
			hoverGradient: "from-cyan-400/5 to-cyan-600/5",
		},
	];

	// Environmental impact circuit SVG component
	const EnvironmentCircuit = ({ className }) => (
		<svg
			className={className}
			width="400"
			height="400"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="200"
				cy="200"
				r="150"
				stroke="rgba(74, 222, 128, 0.2)"
				strokeWidth="2"
				strokeDasharray="10 5"
			/>
			<circle
				cx="200"
				cy="200"
				r="100"
				stroke="rgba(56, 189, 248, 0.15)"
				strokeWidth="2"
			/>
			<path
				d="M200,50 L200,80 M200,320 L200,350 M50,200 L80,200 M320,200 L350,200"
				stroke="rgba(74, 222, 128, 0.3)"
				strokeWidth="2"
			/>
			<circle cx="200" cy="80" r="5" fill="rgba(74, 222, 128, 0.5)" />
			<circle cx="200" cy="320" r="5" fill="rgba(74, 222, 128, 0.5)" />
			<circle cx="80" cy="200" r="5" fill="rgba(56, 189, 248, 0.5)" />
			<circle cx="320" cy="200" r="5" fill="rgba(56, 189, 248, 0.5)" />
			<rect
				x="150"
				y="150"
				width="100"
				height="100"
				stroke="rgba(56, 189, 248, 0.3)"
				strokeWidth="2"
				fill="none"
			/>
			<line
				x1="150"
				y1="175"
				x2="250"
				y2="175"
				stroke="rgba(56, 189, 248, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="200"
				x2="250"
				y2="200"
				stroke="rgba(56, 189, 248, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="225"
				x2="250"
				y2="225"
				stroke="rgba(56, 189, 248, 0.3)"
				strokeWidth="1"
			/>
		</svg>
	);

	// Global impact stats
	const globalStats = [
		{
			value: "35%",
			label: "Global CO₂ reduction",
			icon: <Cloud className="w-5 h-5 text-sky-300" />,
		},
		{
			value: "10M+",
			label: "Trees equivalent annually",
			icon: <Leaf className="w-5 h-5 text-green-300" />,
		},
		{
			value: "2.3B",
			label: "Gallons of water saved",
			icon: <Droplet className="w-5 h-5 text-blue-300" />,
		},
	];

	return (
		<section id="impact" className="py-24 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-emerald-50/80 z-0"></div>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Top right circuit */}
				<motion.div
					initial={{ opacity: 0, rotate: 10 }}
					animate={{ opacity: 1, rotate: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute -top-20 -right-20"
				>
					<EnvironmentCircuit className="w-80 h-80 opacity-40" />
				</motion.div>

				{/* Bottom left circuit */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.3 }}
					className="absolute -bottom-20 -left-20"
				>
					<EnvironmentCircuit className="w-96 h-96 opacity-30" />
				</motion.div>

				{/* Grid background pattern */}
				<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

				{/* Animated environment particles */}
				<div className="particles-container absolute inset-0">
					{[...Array(15)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute rounded-full bg-green-500/10"
							style={{
								width: Math.random() * 40 + 10,
								height: Math.random() * 40 + 10,
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [0, -20, 0],
								opacity: [0.1, 0.3, 0.1],
							}}
							transition={{
								duration: Math.random() * 5 + 5,
								repeat: Infinity,
								repeatType: "reverse",
								delay: Math.random() * 5,
							}}
						/>
					))}
				</div>

				{/* Horizontal glowing line */}
				<motion.div
					className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-full"
					style={{ top: "45%" }}
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: [0, 0.5, 0], scaleX: 1 }}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 2,
					}}
				/>
			</div>

			{/* IMPORTANT: Replace Container component with direct container div to match other sections */}
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center w-full"
				>
					<SectionHeading
						title={
							<>
								<span className="eco-gradient">Environmental Impact</span>
								<motion.span
									className="inline-block ml-2"
									animate={{ rotate: [0, 10, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
								>
									<Leaf className="w-8 h-8 text-green-500 inline" />
								</motion.span>
							</>
						}
						subtitle="By switching to solar, the average household can make a significant positive impact on our environment"
					/>
				</motion.div>

				{/* Impact cards grid - using same structure as BenefitsSection */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{impacts.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								delay: index * 0.1,
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="impact-card p-6 md:p-8 flex flex-col items-center relative group h-full"
							whileHover={{
								y: -8,
								transition: { duration: 0.3 },
							}}
						>
							{/* Card glowing effect on hover */}
							<motion.div
								className={`absolute inset-0 opacity-0 rounded-2xl z-0 bg-gradient-to-br ${item.hoverGradient}`}
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Simplified card structure - top gradient section */}
							<div
								className={`bg-gradient-to-r ${item.gradient} rounded-t-xl w-full p-6 mb-4 flex-grow flex flex-col items-center relative`}
							>
								<div className="absolute inset-0 bg-circuit-pattern opacity-5 rounded-t-xl"></div>

								{/* Decorative elements */}
								<div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white opacity-10"></div>
								<div className="absolute bottom-12 left-4 w-12 h-12 rounded-full bg-white opacity-10"></div>

								{/* Icon container */}
								<div className="mb-6 relative">
									<motion.div
										className="relative inline-block"
										whileHover={{ scale: 1.05 }}
									>
										<div className="icon-pulse absolute inset-0 rounded-full"></div>
										<motion.div
											className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100 relative z-10"
											whileHover={{
												rotateY: 180,
												transition: { duration: 0.7 },
											}}
										>
											{item.icon}
										</motion.div>
									</motion.div>
								</div>

								{/* Title with fixed height */}
								<motion.h3
									className="text-xl font-bold mb-3 text-gray-800 relative z-10 text-center w-full min-h-[2.5rem]"
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.2 }}
								>
									{item.title}
									<motion.div
										className={`h-0.5 bg-gradient-to-r ${item.iconGradient} w-0 mt-1 mx-auto`}
										initial={{ width: 0 }}
										whileHover={{ width: "100%" }}
										transition={{ duration: 0.3 }}
									/>
								</motion.h3>

								{/* Description */}
								<p className="text-gray-600 text-center relative z-10 flex-grow">
									{item.description}
								</p>
							</div>

							{/* Stats section */}
							<div className="bg-white py-4 px-6 w-full rounded-b-xl border-t border-gray-100 flex items-center justify-between">
								<div>
									<p className="text-sm text-gray-500 flex items-center">
										<BadgeCheck className="w-4 h-4 mr-1 text-green-500 flex-shrink-0" />
										<span className="truncate">{item.statLabel}</span>
									</p>
								</div>
								<div>
									<motion.p
										className={`text-xl font-bold bg-gradient-to-r ${item.iconGradient} bg-clip-text text-transparent whitespace-nowrap`}
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.2 }}
									>
										{item.stat}
									</motion.p>
								</div>
							</div>

							{/* Info button */}
							<motion.div
								className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer border border-gray-100 z-20"
								whileHover={{
									scale: 1.2,
									boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
							>
								<Info className="w-4 h-4 text-gray-500" />
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Enhanced: Environmental impact visualization */}
				<motion.div
					className="mt-16 rounded-2xl overflow-hidden shadow-xl relative mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					{/* Background gradient with subtle pattern */}
					<div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900"></div>
					<div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

					{/* Glowing effect */}
					<div className="absolute inset-0">
						<div className="absolute top-0 left-1/4 w-60 h-60 rounded-full bg-green-400/10 blur-3xl"></div>
						<div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl"></div>
					</div>

					{/* Content */}
					<div className="relative p-8 md:p-10 text-white">
						<div className="flex flex-col md:flex-row justify-between items-center mb-8">
							<div className="text-center md:text-left mb-4 md:mb-0">
								<h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start">
									<Leaf className="w-6 h-6 mr-2 text-green-400" />
									Global Environmental Impact
								</h3>
								<p className="text-emerald-100/80 max-w-2xl text-sm md:text-base">
									Solar power is one of the cleanest, most sustainable energy
									sources available. Here's how our collective efforts make a
									significant global difference.
								</p>
							</div>

							<motion.a
								href="#calculator"
								className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium text-white inline-flex items-center group"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								Calculate Your Impact
								<ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</motion.a>
						</div>

						{/* Stats display */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
							{globalStats.map((stat, index) => (
								<motion.div
									key={index}
									className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
									whileHover={{
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										transition: { duration: 0.2 },
									}}
								>
									<div className="w-10 h-10 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
										{stat.icon}
									</div>
									<div className="text-3xl font-bold mb-1 text-white">
										{stat.value}
									</div>
									<div className="text-emerald-100/80 text-sm">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>

						{/* Progress visualization */}
						<div className="mt-8 pt-8 border-t border-white/10">
							<div className="flex justify-between items-center mb-2 text-sm">
								<span>Current global solar adoption</span>
								<span className="text-green-400">3.1% of global energy</span>
							</div>
							<div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
								<motion.div
									className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
									initial={{ width: 0 }}
									whileInView={{ width: "3.1%" }}
									viewport={{ once: true }}
									transition={{ duration: 1.5, delay: 0.8 }}
								/>
							</div>
							<div className="flex justify-between items-center mt-2 text-sm text-emerald-100/70">
								<span>0%</span>
								<span>2050 Target: 50%</span>
								<span>100%</span>
							</div>

							{/* Chart illustration - properly centered */}
							<div className="mt-6 flex items-end justify-center h-16 w-full">
								{[...Array(12)].map((_, i) => (
									<motion.div
										key={i}
										className="w-4 md:w-6 mx-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t"
										style={{
											height: `${Math.min(100, (i + 1) * 8)}%`,
											opacity: 0.5 + i * 0.04,
										}}
										initial={{ height: 0 }}
										whileInView={{ height: `${Math.min(100, (i + 1) * 8)}%` }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: i * 0.1 + 0.5,
											ease: "easeOut",
										}}
										whileHover={{ y: -5 }}
									/>
								))}
							</div>
							<div className="text-center text-xs text-emerald-100/60 mt-2 w-full">
								Projected solar adoption growth 2024-2035
							</div>

							{/* Animated pulse */}
							<div className="absolute bottom-5 right-5">
								<motion.div
									className="w-3 h-3 rounded-full bg-green-400"
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.7, 0.2, 0.7],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										repeatType: "loop",
									}}
								/>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Call to action card */}
				<motion.div
					className="mt-12 mx-auto max-w-3xl p-6 rounded-xl bg-white shadow-lg border border-gray-100 text-center relative overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.5 }}
					whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
				>
					<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-50"></div>
					<div className="relative z-10 flex flex-col items-center">
						{" "}
						{/* Added items-center */}
						<div className="w-16 h-16 mb-4 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full flex items-center justify-center">
							<BarChart2 className="w-8 h-8 text-green-600" />
						</div>
						<h3 className="text-xl font-bold mb-2">
							Track Your Environmental Impact
						</h3>
						<p className="text-gray-600 mb-6 max-w-lg">
							Our smart monitoring system shows your real-time contribution to
							environmental preservation through your solar installation.
						</p>
						<motion.button
							className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
						>
							Learn More About Monitoring
						</motion.button>
					</div>
				</motion.div>
			</div>

			<style jsx>{`
				.impact-card {
					background: rgba(255, 255, 255, 0.8);
					border-radius: 16px;
					box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
					border: 1px solid rgba(255, 255, 255, 0.3);
					transition: all 0.3s ease;
					backdrop-filter: blur(8px);
					overflow: hidden;
				}

				/* Make sure section mimics the BenefitsSection style */
				section {
					position: relative;
					display: block;
				}

				/* Pattern backgrounds */
				.bg-grid-pattern {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
				}

				.bg-circuit-pattern {
					background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.565 0l-5.657 5.657 1.415 1.415 7.9-7.9h-2.83zm16.97 0l7.07 7.07-1.414 1.415-8.485-8.485h2.83zm-9.373 0L18.343 7.07l1.415 1.415L28.03 0h-2.83zm-1.657 0L5.516 13.172l1.414 1.414 13.3-13.3h-2.83zm18.657 0l13.172 13.172-1.414 1.414-13.3-13.3h2.83zM33.03 0L21.343 11.686l1.414 1.414L36.856 0h-2.83zm-9.372 0L9.517 15.142l1.414 1.414 16.4-16.4h-2.83zm18.744 0l14.142 14.142-1.414 1.414-16.4-16.4h2.83zM33.886 0l18.8 18.8-1.415 1.414-20.213-20.213h2.83zm-9.37 0L5.644 20.214l1.414 1.414 20.214-20.214h-2.83zm18.742 0L61.03 24.742 59.616 26.156 36.856 0h2.83zM33.03 0L0 35.03l1.414 1.414L36.856 0h-2.83z' fill='%23fff' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
				}

				.eco-gradient {
					background: linear-gradient(to right, #10b981, #0ea5e9);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
				}

				.icon-pulse {
					animation: iconPulse 2s infinite;
				}

				@keyframes iconPulse {
					0% {
						box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
					}
					70% {
						box-shadow: 0 0 0 15px rgba(16, 185, 129, 0);
					}
					100% {
						box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
					}
				}
			`}</style>
		</section>
	);
};

export default EnvironmentalImpactSection;
