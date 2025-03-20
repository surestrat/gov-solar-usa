import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { Star } from "lucide-react";

const TestimonialsSection = ({ testimonials }) => {
	return (
		<section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

			<Container className="relative z-10">
				<SectionHeading
					title="What Our Customers Say"
					subtitle="Don't just take our word for it — hear from homeowners who've gone solar"
				/>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ delay: index * 0.15, duration: 0.6 }}
							className="modern-card p-8 relative"
							whileHover={{ y: -5 }}
						>
							{/* Decorative quote icon */}
							<div className="absolute top-6 right-6 opacity-10">
								<svg
									className="w-16 h-16 text-green-500"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
								</svg>
							</div>

							{/* Star rating */}
							<div className="flex mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-yellow-400"
										fill="currentColor"
									/>
								))}
							</div>

							<p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
								"{testimonial.quote}"
							</p>

							<div className="flex items-center">
								{/* Testimonial author with gradient border */}
								<div className="p-0.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-14 h-14 rounded-full object-cover border-2 border-white"
									/>
								</div>
								<div className="ml-4">
									<p className="font-bold text-gray-800">{testimonial.name}</p>
									<p className="text-sm text-gray-500">
										{testimonial.location}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default TestimonialsSection;
