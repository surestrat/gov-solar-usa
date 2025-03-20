import { motion } from "framer-motion";
import { Camera, PieChart, Wrench as Tool, Zap } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const ProcessSection = () => {
	const steps = [
		{
			icon: <Camera className="w-12 h-12 text-blue-500" />,
			title: "Free Consultation",
			number: "01",
			description:
				"We assess your property using satellite imagery and discuss your energy needs",
			image:
				"https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			icon: <PieChart className="w-12 h-12 text-green-500" />,
			title: "Custom Design",
			number: "02",
			description:
				"Our engineers create a system tailored to your home and energy goals",
			image:
				"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			icon: <Tool className="w-12 h-12 text-orange-500" />,
			title: "Installation",
			number: "03",
			description:
				"Our certified technicians install your system, typically in just 1-2 days",
			image:
				"https://images.unsplash.com/photo-1605980413707-9da05a65b2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			icon: <Zap className="w-12 h-12 text-yellow-500" />,
			title: "Power On",
			number: "04",
			description:
				"We handle all permits and inspections, then activate your system",
			image:
				"https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
	];

	return (
		<section className="py-24 px-4 bg-white relative overflow-hidden">
			{/* Connected dots background */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjZjBmMGYwIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

			<Container className="relative z-10">
				<SectionHeading
					title="Our Simple 4-Step Process"
					subtitle="Going solar has never been easier with our streamlined approach"
				/>

				<div className="relative">
					{/* Connection line */}
					<div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 transform -translate-y-1/2 hidden md:block"></div>

					<div className="grid md:grid-cols-4 gap-12 md:gap-6">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									delay: index * 0.15,
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="modern-card flex flex-col h-full relative z-10"
							>
								{/* Image section with number overlay */}
								<div className="relative h-52 overflow-hidden rounded-t-2xl">
									<img
										src={step.image}
										alt={step.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
									<div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
										<span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
											{step.number}
										</span>
									</div>
								</div>

								{/* Content section */}
								<div className="p-6 flex-1 flex flex-col">
									<div className="flex items-center gap-4 mb-4">
										<div className="p-3 rounded-lg bg-gray-50">{step.icon}</div>
										<h3 className="text-xl font-bold text-gray-800">
											{step.title}
										</h3>
									</div>
									<p className="text-gray-600">{step.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ProcessSection;
