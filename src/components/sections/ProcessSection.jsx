import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Sun, Settings, PanelTop, Zap } from "lucide-react";

const ProcessSection = () => {
	const processSteps = [
		{
			id: 1,
			icon: <ClipboardCheck size={24} className="text-white" />,
			title: "Application",
			description:
				"Complete our simple online application to determine your eligibility for the Free Solar Programme.",
		},
		{
			id: 2,
			icon: <PanelTop size={24} className="text-white" />,
			title: "Site Assessment",
			description:
				"Our technical team evaluates your property's solar potential using advanced satellite imaging technology.",
		},
		{
			id: 3,
			icon: <Settings size={24} className="text-white" />,
			title: "Installation",
			description:
				"Professional installation of state-of-the-art solar panels by our certified technicians.",
		},
		{
			id: 4,
			icon: <Sun size={24} className="text-white" />,
			title: "Power Generation",
			description:
				"Start generating clean renewable energy and monitor your system performance through our smart app.",
		},
	];

	// Process circuit SVG component - similar to SolarCircuit
	const ProcessCircuit = ({ className }) => (
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
				stroke="rgba(96, 165, 250, 0.2)"
				strokeWidth="2"
				strokeDasharray="10 5"
			/>
			<circle
				cx="200"
				cy="200"
				r="100"
				stroke="rgba(139, 92, 246, 0.15)"
				strokeWidth="2"
			/>
			<path
				d="M200,50 L200,80 M200,320 L200,350 M50,200 L80,200 M320,200 L350,200"
				stroke="rgba(96, 165, 250, 0.3)"
				strokeWidth="2"
			/>
			<circle cx="200" cy="80" r="5" fill="rgba(96, 165, 250, 0.5)" />
			<circle cx="200" cy="320" r="5" fill="rgba(96, 165, 250, 0.5)" />
			<circle cx="80" cy="200" r="5" fill="rgba(139, 92, 246, 0.5)" />
			<circle cx="320" cy="200" r="5" fill="rgba(139, 92, 246, 0.5)" />
			<rect
				x="150"
				y="150"
				width="100"
				height="100"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="2"
				fill="none"
			/>
			<line
				x1="150"
				y1="175"
				x2="250"
				y2="175"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="200"
				x2="250"
				y2="200"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="150"
				y1="225"
				x2="250"
				y2="225"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="175"
				y1="150"
				x2="175"
				y2="250"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="200"
				y1="150"
				x2="200"
				y2="250"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
			<line
				x1="225"
				y1="150"
				x2="225"
				y2="250"
				stroke="rgba(139, 92, 246, 0.3)"
				strokeWidth="1"
			/>
		</svg>
	);

	return (
		<section className="py-24 relative overflow-hidden" id="process">
			{/* Modern tech background with gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950 opacity-95 z-0"></div>

			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Top left circuit */}
				<motion.div
					initial={{ opacity: 0, rotate: -10 }}
					animate={{ opacity: 1, rotate: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute -top-20 -left-20"
				>
					<ProcessCircuit className="w-80 h-80 opacity-30" />
				</motion.div>

				{/* Bottom right circuit */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.3 }}
					className="absolute -bottom-20 -right-20"
				>
					<ProcessCircuit className="w-96 h-96 opacity-20" />
				</motion.div>

				{/* Grid background pattern */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.15%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10"></div>

				{/* Horizontal glowing line */}
				<motion.div
					className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full"
					style={{ top: "40%" }}
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

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
						Our{" "}
						<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
							Process
						</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
					<p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
						Our streamlined process makes transitioning to solar energy simple
						and efficient, leveraging cutting-edge technology at every step.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{processSteps.map((step, index) => (
						<motion.div
							key={step.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								delay: index * 0.1,
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="bg-slate-800/40 backdrop-blur-md border border-blue-500/10 rounded-2xl p-6 md:p-7 flex flex-col items-start relative group transition-all duration-300 h-full shadow-md hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden"
							whileHover={{
								y: -8,
								boxShadow:
									"0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.15)",
								transition: { duration: 0.3 },
							}}
						>
							{/* Enhanced glowing background effect on hover */}
							<motion.div
								className="absolute inset-0 opacity-0 rounded-2xl z-0 bg-radial-gradient from-blue-500/15 via-purple-500/10 to-transparent"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							<div className="relative z-10 w-full h-full flex flex-col">
								{/* Step number with futuristic style */}
								<div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-md flex items-center justify-center border border-blue-500/20">
									<span className="text-blue-300 text-sm font-mono">
										{`0${step.id}`}
									</span>
								</div>

								{/* Enhanced icon container with animated border */}
								<div className="relative mb-6 transform-gpu perspective-1000">
									<motion.div
										className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative z-10"
										whileHover={{
											rotate: [0, -5, 5, -2, 0],
											scale: 1.05,
											transition: { duration: 0.5 },
										}}
									>
										<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
											{step.icon}
										</div>

										{/* Animated pulse ring */}
										<div className="absolute inset-0 rounded-2xl border border-blue-500/30 opacity-0 group-hover:opacity-100 animate-pulse-slow"></div>
									</motion.div>
								</div>

								{/* Step identifier */}
								<div className="flex items-center mb-2">
									<span className="text-blue-400 text-xs font-mono mr-2 tracking-wider">
										STEP {step.id}
									</span>
									<div className="h-px flex-grow bg-blue-500/30"></div>
								</div>

								{/* Enhanced title with gradient and animation */}
								<motion.h3
									className="text-xl font-bold mb-3 text-white relative z-10"
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.2 }}
								>
									{step.title}

									{/* Animated underline on hover */}
									<motion.div
										className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 w-0 mt-1"
										initial={{ width: 0 }}
										whileHover={{ width: "100%" }}
										transition={{ duration: 0.3 }}
									/>
								</motion.h3>

								{/* Enhanced description with better readability */}
								<p className="text-gray-300 relative z-10 leading-relaxed">
									{step.description}
								</p>

								{/* Tech decoration elements */}
								<div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-between items-center w-full">
									<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow"></div>
									<div className="h-1 flex-grow mx-2 bg-gray-800/50 rounded overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
											style={{ width: `${(step.id / 4) * 100}%` }}
										></div>
									</div>
									<div className="text-xs font-mono text-blue-400">{`${step.id}/4`}</div>
								</div>
							</div>

							{/* Dynamic background connector lines */}
							{index < processSteps.length - 1 && (
								<div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-0">
									<div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
									<Zap className="w-6 h-6 text-blue-500/30 absolute -right-3 -top-3" />
								</div>
							)}
						</motion.div>
					))}
				</div>

				{/* Call to action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-16 text-center"
				>
					<button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group">
						<span className="relative z-10">Start Your Solar Journey</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
					</button>
					<p className="text-gray-400 mt-4 text-sm">
						<span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
						Currently accepting new applications
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default ProcessSection;
