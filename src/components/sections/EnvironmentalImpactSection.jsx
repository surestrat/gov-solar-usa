import { motion } from "framer-motion";
import { Cloud, Droplet, Leaf } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const EnvironmentalImpactSection = () => {
	const impacts = [
		{
			icon: <Cloud className="w-16 h-16 text-blue-500" />,
			title: "Reduce CO₂ Emissions",
			description:
				"The average home solar system offsets about 100,000 lbs of carbon dioxide in its lifetime — equivalent to driving a car for 100,000 miles",
			stat: "100,000 lbs",
			statLabel: "CO₂ offset per home",
			gradient: "from-blue-100 to-blue-50",
			iconGradient: "from-blue-400 to-blue-600",
		},
		{
			icon: <Leaf className="w-16 h-16 text-green-500" />,
			title: "Preserve Natural Resources",
			description:
				"Solar power reduces dependence on finite resources like coal, natural gas, and oil, preserving them for future generations",
			stat: "1,500+ trees",
			statLabel: "Equivalent planting over system lifetime",
			gradient: "from-green-100 to-green-50",
			iconGradient: "from-green-400 to-green-600",
		},
		{
			icon: <Droplet className="w-16 h-16 text-cyan-500" />,
			title: "Save Water Resources",
			description:
				"Traditional electricity generation is water-intensive. Solar panels require virtually no water to generate electricity",
			stat: "30,000+ gallons",
			statLabel: "Water saved per year per household",
			gradient: "from-cyan-100 to-cyan-50",
			iconGradient: "from-cyan-400 to-cyan-600",
		},
	];

	return (
		<section className="py-24 px-4 bg-white relative overflow-hidden">
			{/* SVG background pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZjhmOGY4Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yem0tNCA2di00aDJ2NGgtMnptLTQgMGgtMnYtNGgydjR6bS0yLTZoMnY0aC0ydi00em0tNCAwdi00aDJ2NGgtMnoiLz48L2c+PC9zdmc+')] opacity-40"></div>

			<Container className="relative z-10">
				<SectionHeading
					title="Environmental Impact"
					subtitle="By switching to solar, the average household can make a significant positive impact on our environment"
				/>

				<div className="grid md:grid-cols-3 gap-10">
					{impacts.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ delay: index * 0.2, duration: 0.6 }}
							className={`modern-card overflow-hidden rounded-2xl`}
						>
							{/* Top gradient section with icon */}
							<div
								className={`bg-gradient-to-r ${item.gradient} p-8 text-center relative`}
							>
								{/* Decorative circles */}
								<div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white opacity-10"></div>
								<div className="absolute bottom-12 left-4 w-12 h-12 rounded-full bg-white opacity-10"></div>

								<motion.div
									initial={{ y: 10, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 + 0.3 }}
									className="inline-flex p-4 rounded-2xl bg-white shadow-lg mb-6"
								>
									{item.icon}
								</motion.div>
								<h3 className="text-2xl font-bold mb-3 text-gray-800">
									{item.title}
								</h3>
								<p className="text-gray-600 mb-6">{item.description}</p>
							</div>

							{/* Bottom stat section */}
							<div className="bg-white py-6 px-8">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-gray-500">{item.statLabel}</p>
									</div>
									<div>
										<p
											className={`text-2xl font-bold bg-gradient-to-r ${item.iconGradient} bg-clip-text text-transparent`}
										>
											{item.stat}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default EnvironmentalImpactSection;
