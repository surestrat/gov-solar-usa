import { motion } from "framer-motion";
import { DollarSign, Home, Shield, Sun } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const BenefitsSection = () => {
	const benefits = [
		{
			icon: <DollarSign className="w-12 h-12 text-green-500" />,
			iconBg: "bg-green-100",
			title: "30% Tax Credit",
			description:
				"Maximum federal incentive available now, putting thousands back in your pocket",
		},
		{
			icon: <Shield className="w-12 h-12 text-blue-500" />,
			iconBg: "bg-blue-100",
			title: "Energy Independence",
			description:
				"Free yourself from rising utility costs and unpredictable energy bills",
		},
		{
			icon: <Home className="w-12 h-12 text-purple-500" />,
			iconBg: "bg-purple-100",
			title: "Property Value ↑",
			description:
				"Studies show homes with solar sell faster and for 4.1% more on average",
		},
		{
			icon: <Sun className="w-12 h-12 text-yellow-500" />,
			iconBg: "bg-yellow-100",
			title: "Clean Energy",
			description:
				"Reduce your carbon footprint while enjoying clean, renewable electricity",
		},
	];

	return (
		<section id="benefits" className="py-24 relative overflow-hidden">
			{/* SVG Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
				<svg
					className="absolute top-10 left-0 text-green-50 w-40 h-40 md:w-72 md:h-72"
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M45.3,-63.3C58.2,-54.1,68,-40.3,73.1,-25C78.2,-9.7,78.5,7.2,73.8,22.4C69.1,37.7,59.3,51.4,46.1,59.1C32.8,66.8,16.4,68.5,0.1,68.4C-16.3,68.2,-32.6,66.1,-47.2,58.6C-61.8,51.2,-74.6,38.3,-79.9,22.9C-85.3,7.6,-83,-10.1,-76.9,-26.4C-70.8,-42.7,-60.7,-57.5,-47.1,-66.6C-33.5,-75.7,-16.7,-78.9,-0.2,-78.6C16.4,-78.3,32.7,-74.4,45.3,-64.3Z"
						transform="translate(100 100)"
					/>
				</svg>
				<svg
					className="absolute -bottom-20 right-0 text-blue-50 w-64 h-64 md:w-96 md:h-96"
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M45.4,-54.3C59.2,-45.9,71.3,-32.5,75.4,-16.9C79.5,-1.3,75.7,16.4,67.6,31.1C59.4,45.9,46.7,57.7,32.1,63.8C17.4,69.9,0.8,70.2,-15.8,66.7C-32.5,63.1,-49.1,55.7,-59.3,43C-69.5,30.4,-73.2,12.5,-71.6,-4.6C-70,-21.7,-63,-38.1,-51.2,-46.9C-39.4,-55.7,-22.9,-56.9,-7.1,-48.7C8.6,-40.4,31.5,-62.7,45.4,-54.3Z"
						transform="translate(100 100)"
					/>
				</svg>
			</div>

			<Container className="relative z-10">
				<SectionHeading
					title="Why Americans Choose Solar in 2025"
					subtitle="Take advantage of the highest federal tax credit in history and join the clean energy revolution"
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
							className="modern-card p-8 flex flex-col items-center"
						>
							<motion.div
								className={`${benefit.iconBg} rounded-2xl p-4 mb-6`}
								whileHover={{
									rotate: [0, -10, 10, -10, 0],
									transition: { duration: 0.5 },
								}}
							>
								{benefit.icon}
							</motion.div>
							<h3 className="text-xl font-bold mb-3 text-gray-800">
								{benefit.title}
							</h3>
							<p className="text-gray-600 text-center">{benefit.description}</p>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default BenefitsSection;
