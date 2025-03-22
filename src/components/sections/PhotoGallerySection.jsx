import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ZoomIn, Sun, Home, MapPin, Zap, Clock } from "lucide-react";
import { useState } from "react";

const PhotoGallerySection = ({ images }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	// Solar-themed decorative element
	const SolarEnergyIcon = ({ className }) => (
		<svg
			className={className}
			width="120"
			height="120"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.circle
				cx="60"
				cy="60"
				r="30"
				stroke="rgba(250, 204, 21, 0.5)"
				strokeWidth="2"
				strokeDasharray="4 4"
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
			/>
			<motion.path
				d="M60,20 L60,30 M60,90 L60,100 M20,60 L30,60 M90,60 L100,60 M34,34 L41,41 M79,79 L86,86 M34,86 L41,79 M79,41 L86,34"
				stroke="rgba(250, 204, 21, 0.6)"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			{/* Solar panel in the center */}
			<rect
				x="45"
				y="45"
				width="30"
				height="30"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1.5"
				fill="none"
			/>
			<line
				x="45"
				y1="52.5"
				x2="75"
				y2="52.5"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
			<line
				x1="45"
				y1="60"
				x2="75"
				y2="60"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
			<line
				x="45"
				y1="67.5"
				x2="75"
				y2="67.5"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
			<line
				x1="52.5"
				x2="52.5"
				y="45"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
			<line
				x1="60"
				x2="60"
				y="45"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
			<line
				x1="67.5"
				x2="67.5"
				y="45"
				stroke="rgba(59, 130, 246, 0.6)"
				strokeWidth="1"
			/>
		</svg>
	);

	return (
		<section
			id="gallery"
			className="py-24 px-4 bg-gradient-to-b from-indigo-50 to-blue-50 relative overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Abstract grid */}
				<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

				{/* Glowing lines */}
				<motion.div
					className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"
					style={{ top: "15%" }}
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: [0, 0.3, 0], scaleX: 1 }}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 3,
					}}
				/>

				{/* Decorative solar elements */}
				<div className="absolute -top-10 -right-10 opacity-10">
					<SolarEnergyIcon className="w-64 h-64" />
				</div>
				<div className="absolute -bottom-10 -left-10 opacity-10">
					<SolarEnergyIcon className="w-72 h-72" />
				</div>
			</div>

			{/* Modern gradient border */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-blue-500 to-indigo-600"></div>

			<Container className="relative z-10">
				{/* Enhanced section heading with gradient title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="mb-16"
				>
					<SectionHeading
						title={
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-indigo-600">
								Solar Transformation Gallery
							</span>
						}
						subtitle={
							<span>
								See how we're helping American homeowners achieve{" "}
								<span className="text-blue-600 font-medium">
									energy independence
								</span>{" "}
								with zero cost installations
							</span>
						}
					/>
				</motion.div>

				{/* Improved Responsive Bento Grid Layout - using more standard constraints */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative max-w-6xl mx-auto">
					{/* Featured large image - spans 2x2 on medium+ screens */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
						className="relative overflow-hidden md:col-span-2 md:row-span-2 rounded-3xl shadow-xl cursor-pointer group aspect-[4/3] md:aspect-square"
						onMouseEnter={() => setHoveredIndex(0)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{/* ...existing motion div with image and overlay... */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={
									images[0]?.url ||
									"https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
								}
								alt={images[0]?.alt || "Featured solar installation"}
								className="w-full h-full object-cover"
							/>

							{/* Modern overlay gradient with enhanced styling */}
							<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</motion.div>

						{/* Enhanced image info */}
						<motion.div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
							<div className="flex items-center mb-3">
								<MapPin className="w-5 h-5 text-yellow-300 mr-2" />
								<p className="text-white/90 text-sm">San Diego, California</p>
							</div>
							<p className="text-white font-semibold text-xl mb-2">
								Residential 8.4kW System
							</p>
							<div className="flex items-center text-white/80 text-sm space-x-4">
								<div className="flex items-center">
									<Zap className="w-4 h-4 text-yellow-300 mr-2" />
									<span>$0 Installation</span>
								</div>
								<div className="flex items-center">
									<Clock className="w-4 h-4 text-yellow-300 mr-2" />
									<span>Installed in 2 days</span>
								</div>
							</div>
						</motion.div>

						{/* Modern zoom indicator */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={
								hoveredIndex === 0
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0 }
							}
							transition={{ duration: 0.2 }}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg"
						>
							<ZoomIn className="w-8 h-8 text-white" />
						</motion.div>
					</motion.div>

					{/* Item 1 - Tall item - spans 1x2 on medium+ screens */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-[3/4]"
						onMouseEnter={() => setHoveredIndex(1)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{/* ...existing motion div with image and overlay... */}
						<motion.div
							whileHover={{ scale: 1.08 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={
									images[1]?.url ||
									"https://images.unsplash.com/photo-1611073091263-5bf05c6c1c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								}
								alt={images[1]?.alt || "Tall solar panel installation"}
								className="w-full h-full object-cover"
							/>

							{/* Overlay gradient */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								style={{
									background: `linear-gradient(to top, rgba(79, 70, 229, 0.8) 0%, transparent 100%)`,
								}}
							></div>
						</motion.div>

						{/* Information overlay */}
						<motion.div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
							<p className="font-medium text-white/90">
								{images[1]?.alt || "Residential Roof Installation"}
							</p>
							<div className="flex items-center mt-2 text-sm text-white/80">
								<Home className="w-4 h-4 mr-2 text-yellow-300" />
								<span>Residential Installation</span>
							</div>
						</motion.div>

						{/* Zoom indicator */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={
								hoveredIndex === 1
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0 }
							}
							transition={{ duration: 0.2 }}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full"
						>
							<ZoomIn className="w-6 h-6 text-white" />
						</motion.div>
					</motion.div>

					{/* Items 2, 3, 5 - Regular 1x1 items */}
					{[2, 3, 5].map((itemIndex) => (
						<motion.div
							key={itemIndex}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ delay: 0.1 * itemIndex, duration: 0.5 }}
							className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square"
							onMouseEnter={() => setHoveredIndex(itemIndex)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<motion.div
								whileHover={{ scale: 1.08 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 w-full h-full"
							>
								<img
									src={
										images[itemIndex]?.url ||
										`https://images.unsplash.com/photo-${
											itemIndex === 2
												? "1613665813446-82a78c468a1d"
												: itemIndex === 3
												? "1631739408670-63dba414a10f"
												: "1592833167665-45659da16d1d"
										}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
									}
									alt={
										images[itemIndex]?.alt ||
										(itemIndex === 2
											? "Commercial System"
											: itemIndex === 3
											? "Ground-Mount System"
											: "Residential Rooftop")
									}
									className="w-full h-full object-cover"
								/>

								{/* Overlay gradient */}
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background: `linear-gradient(to top, ${
											itemIndex === 2
												? "rgba(6, 95, 70, 0.8)"
												: itemIndex === 3
												? "rgba(180, 83, 9, 0.8)"
												: "rgba(6, 95, 70, 0.8)"
										} 0%, transparent 100%)`,
									}}
								></div>
							</motion.div>

							{/* Information overlay */}
							<motion.div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
								<p className="font-medium text-white/90 text-sm md:text-base">
									{images[itemIndex]?.alt ||
										(itemIndex === 2
											? "Commercial System"
											: itemIndex === 3
											? "Ground-Mount System"
											: "Residential Rooftop")}
								</p>
								<div className="flex items-center mt-2 text-xs md:text-sm text-white/80">
									<Home className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-yellow-300" />
									<span>
										{itemIndex % 2 === 0 ? "Commercial" : "Residential"}{" "}
										Installation
									</span>
								</div>
							</motion.div>

							{/* Zoom indicator */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={
									hoveredIndex === itemIndex
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0 }
								}
								transition={{ duration: 0.2 }}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full"
							>
								<ZoomIn className="w-4 h-4 md:w-6 md:h-6 text-white" />
							</motion.div>
						</motion.div>
					))}

					{/* Item 4 - Wide item - spans 2x1 on medium+ screens */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group md:col-span-2 md:row-span-1 aspect-[4/3] md:aspect-[16/9]"
						onMouseEnter={() => setHoveredIndex(4)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{/* ...existing motion div with image and overlay... */}
						<motion.div
							whileHover={{ scale: 1.08 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={
									images[4]?.url ||
									"https://images.unsplash.com/photo-1566093097221-ac2335b08c89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
								}
								alt={images[4]?.alt || "Wide view solar array"}
								className="w-full h-full object-cover"
							/>

							{/* Overlay gradient */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								style={{
									background: `linear-gradient(to top, rgba(79, 70, 229, 0.8) 0%, transparent 100%)`,
								}}
							></div>
						</motion.div>

						{/* Information overlay */}
						<motion.div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
							<p className="font-medium text-white/90">
								{images[4]?.alt || "Community Solar Project"}
							</p>
							<div className="flex items-center mt-2 text-sm text-white/80">
								<Home className="w-4 h-4 mr-2 text-yellow-300" />
								<span>Commercial Installation</span>
							</div>
						</motion.div>

						{/* Zoom indicator */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={
								hoveredIndex === 4
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0 }
							}
							transition={{ duration: 0.2 }}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full"
						>
							<ZoomIn className="w-6 h-6 text-white" />
						</motion.div>
					</motion.div>
				</div>

				{/* Stats panel has been removed, no need for bottom margin */}
			</Container>

			<style jsx>{`
				/* Use aspect ratio for consistent sizing instead of fixed heights */
				.grid {
					display: grid;
					grid-auto-rows: auto;
				}

				@media (min-width: 768px) {
					.grid {
						grid-template-columns: repeat(4, 1fr);
						grid-auto-rows: 1fr;
					}

					.md\\:row-span-2 {
						grid-row: span 2 / span 2;
					}

					.md\\:col-span-2 {
						grid-column: span 2 / span 2;
					}
				}

				/* Ensure images fill their containers properly */
				.aspect-\\[4\\/3\\] {
					aspect-ratio: 4/3;
				}

				.md\\:aspect-square {
					@media (min-width: 768px) {
						aspect-ratio: 1/1;
					}
				}

				.md\\:aspect-\\[3\\/4\\] {
					@media (min-width: 768px) {
						aspect-ratio: 3/4;
					}
				}

				.md\\:aspect-\\[16\\/9\\] {
					@media (min-width: 768px) {
						aspect-ratio: 16/9;
					}
				}
			`}</style>
		</section>
	);
};

export default PhotoGallerySection;
