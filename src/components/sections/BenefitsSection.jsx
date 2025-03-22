import { motion } from "framer-motion";
import { DollarSign, Home, Shield, Sun, Zap, BarChart3 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const BenefitsSection = () => {
	// Benefits data
	const benefits = [
		{
			icon: <DollarSign className="w-12 h-12 text-green-500" />,
			iconBg: "bg-gradient-to-br from-green-500/20 to-green-500/5",
			title: "30% Tax Credit",
			description:
				"Maximum federal incentive available now, putting thousands back in your pocket",
		},
		{
			icon: <Shield className="w-12 h-12 text-blue-500" />,
			iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-500/5",
			title: "Energy Independence",
			description:
				"Free yourself from rising utility costs and unpredictable energy bills",
		},
		{
			icon: <Home className="w-12 h-12 text-purple-500" />,
			iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
			title: "Property Value ↑",
			description:
				"Studies show homes with solar sell faster and for 4.1% more on average",
		},
		{
			icon: <Sun className="w-12 h-12 text-yellow-500" />,
			iconBg: "bg-gradient-to-br from-yellow-500/20 to-yellow-500/5",
			title: "Clean Energy",
			description:
				"Reduce your carbon footprint while enjoying clean, renewable electricity",
		},
	];

	// Stats data
	const stats = [
		{
			value: "30%",
			label: "Federal Tax Credit",
			icon: <DollarSign className="w-6 h-6 text-yellow-300 mb-2 mx-auto" />,
		},
		{
			value: "60%",
			label: "Potential Bill Savings",
			icon: <BarChart3 className="w-6 h-6 text-green-300 mb-2 mx-auto" />,
		},
		{
			value: "25yr+",
			label: "Solar Panel Lifespan",
			icon: <Sun className="w-6 h-6 text-orange-300 mb-2 mx-auto" />,
		},
		{
			value: "0",
			label: "Installation Cost",
			icon: <Zap className="w-6 h-6 text-blue-300 mb-2 mx-auto" />,
		},
	];

	// Solar circuit SVG component
	const SolarCircuit = ({ className }) => (
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
				stroke="rgba(250, 204, 21, 0.2)"
				strokeWidth="2"
				strokeDasharray="10 5"
			/>
			<circle
				cx="200"
				cy="200"
				r="100"
				stroke="rgba(59, 130, 246, 0.15)"
				strokeWidth="2"
			/>
			<path
				d="M200,50 L200,80 M200,320 L200,350 M50,200 L80,200 M320,200 L350,200"
				stroke="rgba(250, 204, 21, 0.3)"
				strokeWidth="2"
			/>
			<circle cx="200" cy="80" r="5" fill="rgba(250, 204, 21, 0.5)" />
			<circle cx="200" cy="320" r="5" fill="rgba(250, 204, 21, 0.5)" />
			<circle cx="80" cy="200" r="5" fill="rgba(59, 130, 246, 0.5)" />
			<circle cx="320" cy="200" r="5" fill="rgba(59, 130, 246, 0.5)" />
			<rect
				x="150"
				y="150"
				width="100"
				height="100"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="2"
				fill="none"
			/>
			<line
				x1="150"
				y1="175"
				x2="250"
				y2="175"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="200"
				x2="250"
				y2="200"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="225"
				x2="250"
				y2="225"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="175"
				y1="150"
				x2="175"
				y2="250"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="200"
				y1="150"
				x2="200"
				y2="250"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="225"
				y1="150"
				x2="225"
				y2="250"
				stroke="rgba(59, 130, 246, 0.3)"
				strokeWidth="1"
			/>
		</svg>
	);

	return (
		<section
			id="benefits"
			className="bg-gradient-to-b from-slate-50 to-blue-50 py-24 relative overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Top left circuit */}
				<motion.div
					initial={{ opacity: 0, rotate: -10 }}
					animate={{ opacity: 1, rotate: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute -top-20 -left-20"
				>
					<SolarCircuit className="w-80 h-80 opacity-40" />
				</motion.div>

				{/* Bottom right circuit */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.3 }}
					className="absolute -bottom-20 -right-20"
				>
					<SolarCircuit className="w-96 h-96 opacity-30" />
				</motion.div>

				{/* Grid background pattern */}
				<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

				{/* Horizontal glowing line */}
				<motion.div
					className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full"
					style={{ top: "50%" }}
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

			<Container>
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="mb-16"
				>
					<SectionHeading
						title={
							<span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
								Why Americans Choose Solar in 2025
							</span>
						}
						subtitle={
							<span>
								Take advantage of the highest federal tax credit in history and
								join the{" "}
								<span className="text-blue-600 font-medium">
									clean energy revolution
								</span>
							</span>
						}
					/>
				</motion.div>

				{/* Enhanced Benefits cards grid with fixed heights */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{benefits.map((benefit, index) => (
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
							className="benefits-card bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center relative group shadow-md border border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 overflow-hidden"
							whileHover={{
								y: -8,
								boxShadow:
									"0 15px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.15)",
								transition: { duration: 0.3 },
							}}
						>
							{/* Enhanced glowing background effect on hover */}
							<motion.div
								className="absolute inset-0 opacity-0 rounded-2xl z-0 glow-effect"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Enhanced icon container with animated border - consistent size */}
							<div className="relative mb-6 flex justify-center w-full icon-container">
								<motion.div
									className={`${benefit.iconBg} backdrop-blur-md rounded-2xl p-5 border border-white/20 relative z-10 inline-flex`}
									whileHover={{
										rotate: [0, -10, 10, -5, 0],
										scale: 1.05,
										transition: { duration: 0.5 },
									}}
								>
									{benefit.icon}

									{/* Animated pulse ring */}
									<div className="absolute inset-0 rounded-2xl pulse-ring"></div>
								</motion.div>
							</div>

							{/* Enhanced title with gradient and animation - removed min-height */}
							<motion.h3
								className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 relative z-10 text-center w-full"
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.2 }}
							>
								{benefit.title}

								{/* Animated underline on hover */}
								<motion.div
									className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-0 mx-auto mt-1"
									initial={{ width: 0 }}
									whileHover={{ width: "100%" }}
									transition={{ duration: 0.3 }}
								/>
							</motion.h3>

							{/* Enhanced description with better readability - flex-grow for pushing content below */}
							<p className="text-gray-600 text-center mb-6 relative z-10 leading-relaxed flex-grow">
								{benefit.description}
							</p>

							{/* Bottom decorative element */}
							<motion.div
								className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-16 mt-auto opacity-50 relative z-10"
								initial={{ width: 0 }}
								whileInView={{ width: "4rem" }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
							/>

							{/* New subtle card number */}
							<div className="absolute -bottom-2 -right-2 text-5xl font-black text-blue-50/80 z-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100">
								{index + 1}
							</div>
						</motion.div>
					))}
				</div>

				{/* Stats section */}
				<motion.div
					className="mt-16 md:mt-20 py-10 px-8 rounded-2xl bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-xl text-white shadow-xl border border-blue-700/20 mb-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					<div className="text-center mb-8">
						<h3 className="text-xl md:text-2xl font-bold mb-2">
							Solar Revolution by Numbers
						</h3>
						<div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full"></div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
								className="p-4"
							>
								{stat.icon}
								<div className="text-2xl md:text-3xl font-bold mb-1 text-white">
									{stat.value}
								</div>
								<div className="text-blue-200 text-sm">{stat.label}</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default BenefitsSection;
