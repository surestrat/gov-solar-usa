import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

const PhotoGallerySection = ({ images }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<section
			id="gallery"
			className="py-24 px-4 bg-gray-50 relative overflow-hidden"
		>
			{/* Decorative element */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>

			<Container>
				<SectionHeading
					title="Our Solar Installations"
					subtitle="Browse our gallery of recent solar projects across America"
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{images.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer group"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							{/* Image */}
							<motion.div
								whileHover={{ scale: 1.08 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 w-full h-full"
							>
								<img
									src={image.url}
									alt={image.alt}
									className="w-full h-full object-cover"
								/>

								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</motion.div>

							{/* Image caption that appears on hover */}
							<motion.div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
								<p className="font-medium">{image.alt}</p>
							</motion.div>

							{/* Zoom icon */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={
									hoveredIndex === index
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0 }
								}
								transition={{ duration: 0.2 }}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full"
							>
								<ZoomIn className="w-6 h-6 text-white" />
							</motion.div>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default PhotoGallerySection;
