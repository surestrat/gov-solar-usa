import { motion } from "framer-motion";

const Step3 = ({ register, errors, BILL_RANGES, CREDIT_SCORE_RANGES }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			className="space-y-6"
		>
			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Average Monthly Bill
					</label>
					<select
						{...register("averageBill")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					>
						<option value="">Select range</option>
						{BILL_RANGES.map((range) => (
							<option key={range} value={range}>
								{range}
							</option>
						))}
					</select>
					{errors.averageBill && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.averageBill.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Credit Score Range
					</label>
					<select
						{...register("creditScore")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					>
						<option value="">Select range</option>
						{CREDIT_SCORE_RANGES.map((range) => (
							<option key={range} value={range}>
								{range}
							</option>
						))}
					</select>
					{errors.creditScore && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.creditScore.message}
						</p>
					)}
				</div>

				<div className="md:col-span-2">
					<label className="flex items-center space-x-3">
						<input
							type="checkbox"
							{...register("homeowner")}
							className="h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
						/>
						<span className="text-sm text-gray-700">
							I confirm that I am the homeowner
						</span>
					</label>
					{errors.homeowner && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.homeowner.message}
						</p>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Step3;
