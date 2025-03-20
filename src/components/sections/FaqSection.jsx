import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ChevronUp, HelpCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const FaqSection = ({ onContactClick }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "How much does a solar system cost?",
			answer:
				"The cost of a solar system depends on your home's energy needs, roof size, and location. With the 30% federal tax credit and our financing options, most homeowners can go solar for $0 down and start saving immediately on their electric bills.",
		},
		{
			question: "How long does installation take?",
			answer:
				"The physical installation of your solar system typically takes just 1-2 days. The entire process, including design, permitting, and inspection, usually takes 2-3 weeks. We handle all permitting and paperwork for you.",
		},
		{
			question: "Will solar panels work during power outages?",
			answer:
				"Standard solar systems shut down during power outages for safety reasons. However, if you add battery storage to your system, you can have backup power during outages. We offer several battery solutions to fit your needs.",
		},
		{
			question: "What happens if I produce more electricity than I use?",
			answer:
				"Most utility companies offer net metering, which gives you credit for excess energy your system produces. These credits can offset your electricity costs during times when your system isn't producing enough energy, like at night.",
		},
		{
			question: "What maintenance do solar panels require?",
			answer:
				"Solar panels require very little maintenance. They're designed to withstand harsh weather conditions. Occasional cleaning to remove dust or debris may help maintain optimal performance, but many systems perform well with just natural rainfall.",
		},
		{
			question: "What if I sell my house?",
			answer:
				"Solar panels typically increase your home's value. If you sell your home, you can either transfer the solar financing to the new owner or pay off the remaining balance. Studies show homes with solar systems sell faster and for more money than comparable homes without solar.",
		},
	];

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="faq"
			className="py-24 px-4 bg-gradient-to-b from-white to-gray-50"
		>
			<Container size="small">
				<div className="flex justify-center mb-8">
					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{ duration: 0.6, type: "spring" }}
						className="bg-gradient-to-r from-green-100 to-blue-100 p-5 rounded-full"
					>
						<HelpCircle className="w-10 h-10 text-gray-700" />
					</motion.div>
				</div>

				<SectionHeading
					title="Frequently Asked Questions"
					subtitle="Get answers to the most common questions about residential solar energy systems"
				/>

				<div className="space-y-4">
					{faqs.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ delay: index * 0.1 }}
							className={`modern-card ${
								openIndex === index ? "border-l-4 border-green-500" : ""
							}`}
							onClick={() => toggleFaq(index)}
						>
							<div className="p-6 cursor-pointer flex justify-between items-center">
								<h3 className="text-xl font-semibold text-gray-800">
									{item.question}
								</h3>
								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown
										className={`${
											openIndex === index ? "text-green-500" : "text-gray-400"
										} w-6 h-6`}
									/>
								</motion.div>
							</div>

							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="overflow-hidden"
									>
										<div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
											{item.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl"
				>
					<h3 className="text-2xl font-bold mb-4 text-gray-800">
						Still have questions?
					</h3>
					<p className="mb-6 text-gray-700">
						Our solar experts are ready to assist you with personalized answers
					</p>
					<Button
						onClick={onContactClick}
						icon={<ChevronRight />}
						variant="primary"
						className="text-lg px-8 py-3.5"
					>
						Talk to a Solar Expert
					</Button>
				</motion.div>
			</Container>
		</section>
	);
};

export default FaqSection;
