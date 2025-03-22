import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock, FileCheck } from "lucide-react";
import Container from "../ui/Container";

const TrustIndicators = () => {
	const indicators = [
		{
			icon: <FileCheck className="w-8 h-8 text-green-500" />,
			title: "Licensed & Insured",
			description: "All 50 states covered",
		},
		{
			icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
			title: "BBB A+ Rated",
			description: "Highest accreditation",
		},
		{
			icon: <Clock className="w-8 h-8 text-purple-500" />,
			title: "25-Year Warranty",
			description: "Industry-leading coverage",
		},
		{
			icon: <Award className="w-8 h-8 text-yellow-500" />,
			title: "Top Rated 2025",
			description: "By HomeAdvisor",
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<Container>
				<div className="grid md:grid-cols-4 gap-8">
					{indicators.map((indicator, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="flex items-center gap-4 p-4"
						>
							<div className="flex-shrink-0 p-2">{indicator.icon}</div>
							<div>
								<h3 className="font-semibold">{indicator.title}</h3>
								<p className="text-sm text-gray-600">{indicator.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default TrustIndicators;
