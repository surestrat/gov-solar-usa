import { motion, AnimatePresence } from "framer-motion";
import { BILL_RANGES } from "@schemas";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import { Calculator, ChevronDown, Sun } from "lucide-react";

const CalculatorSection = ({ register, watch, savings }) => {
	const watchState = watch("state");
	const watchBill = watch("averageBill");

	return (
		<section
			id="calculator"
			className="py-20 px-4 relative bg-gradient-to-b from-white to-gray-50"
		>
			{/* SVG Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<svg
					className="absolute -bottom-40 left-0 text-green-50 w-96 h-96"
					viewBox="0 0 400 400"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M148.5,-168.7C193.7,-134.1,233.3,-89,239.8,-40.4C246.3,8.3,219.7,60.6,186.6,101.3C153.4,142,113.8,171.1,69.4,187.5C25.1,203.9,-24,207.6,-69,192.5C-114,177.4,-154.8,143.5,-178.9,102.7C-203,61.9,-210.3,14.3,-203,-31C-195.7,-76.3,-173.9,-119.3,-139.6,-151.4C-105.3,-183.6,-58.6,-204.8,-7.4,-198.1C43.7,-191.5,103.3,-156.9,148.5,-168.7Z"
						transform="translate(200 200)"
					/>
				</svg>
			</div>

			<Container size="small" className="relative z-10">
				<SectionHeading
					title="Solar Savings Calculator"
					subtitle="See how much you could save by switching to solar energy"
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="modern-card p-8 lg:p-10"
				>
					<div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
						<div className="flex-1 space-y-5">
							<div className="flex items-center mb-6">
								<Calculator className="w-8 h-8 text-blue-500 mr-4" />
								<h3 className="text-xl font-bold">Calculate Your Savings</h3>
							</div>

							<div className="space-y-2">
								<label className="block text-sm font-medium text-gray-700">
									Your Monthly Electric Bill
								</label>
								<div className="relative">
									<select
										{...register("averageBill")}
										className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none pr-10 text-lg"
									>
										<option value="">Select your bill range</option>
										{BILL_RANGES.map((range) => (
											<option key={range} value={range}>
												{range}
											</option>
										))}
									</select>
									<ChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
								</div>
								{watchState && (
									<p className="text-sm text-gray-600 flex items-center">
										<Sun className="w-4 h-4 mr-1 text-yellow-500" />
										Based on average rates in {watchState}
									</p>
								)}
							</div>

							{!watchBill && (
								<div className="p-4 bg-blue-50 rounded-lg mt-6 text-blue-700 text-sm">
									Select your bill range above to see your potential savings!
								</div>
							)}
						</div>

						<div className="flex-1 flex items-center">
							<AnimatePresence>
								{savings !== null && (
									<motion.div
										key="savings"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										transition={{ type: "spring", stiffness: 100 }}
										className="h-full w-full flex flex-col justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 p-6 lg:p-8"
									>
										<div className="text-center space-y-4">
											<p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
												Estimated Annual Savings
											</p>
											<div className="bg-white rounded-xl p-6 shadow-md">
												<motion.p
													initial={{ scale: 0.5, opacity: 0 }}
													animate={{ scale: 1, opacity: 1 }}
													transition={{ delay: 0.2 }}
													className="text-5xl font-bold text-green-700"
												>
													${savings.toLocaleString()}
												</motion.p>
												<div className="h-1 w-20 mx-auto my-3 bg-gradient-to-r from-green-300 to-green-500 rounded-full" />
												<p className="text-sm text-green-700">
													Plus{" "}
													<span className="font-bold">
														30% Federal Tax Credit
													</span>
												</p>
											</div>
											<p className="text-xs text-green-600">
												*Based on average energy consumption patterns
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default CalculatorSection;
