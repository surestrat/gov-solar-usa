import { motion } from "framer-motion";
import Container from "../ui/Container";

const StatsSection = () => {
	const stats = [
		{
			value: "15,000+",
			label: "American Homes Powered",
		},
		{
			value: "50",
			label: "States Served",
		},
		{
			value: "98%",
			label: "Customer Satisfaction",
		},
	];

	return (
		<section className="py-16 bg-white">
			<Container>
				<div className="grid md:grid-cols-3 gap-8 text-center">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="p-6 rounded-lg bg-gray-50"
						>
							<h3 className="text-4xl font-bold text-green-500 mb-2">
								{stat.value}
							</h3>
							<p className="text-gray-600">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default StatsSection;
