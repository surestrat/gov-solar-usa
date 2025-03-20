import { motion } from "framer-motion";

const Step2 = ({ register, errors, US_STATES, PROPERTY_TYPES, ROOF_TYPES }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			className="space-y-6"
		>
			<div className="grid md:grid-cols-2 gap-6">
				<div className="md:col-span-2">
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Street Address
					</label>
					<input
						{...register("address")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
						placeholder="123 Solar Street"
					/>
					{errors.address && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.address.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						State
					</label>
					<select
						{...register("state")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					>
						<option value="">Select state</option>
						{US_STATES.map((state) => (
							<option key={state} value={state}>
								{state}
							</option>
						))}
					</select>
					{errors.state && (
						<p className="mt-1 text-red-500 text-sm">{errors.state.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						ZIP Code
					</label>
					<input
						{...register("zipCode")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
						placeholder="12345"
						maxLength={10}
					/>
					{errors.zipCode && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.zipCode.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Property Type
					</label>
					<select
						{...register("propertyType")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					>
						<option value="">Select type</option>
						{PROPERTY_TYPES.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
					{errors.propertyType && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.propertyType.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Roof Type
					</label>
					<select
						{...register("roofType")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					>
						<option value="">Select type</option>
						{ROOF_TYPES.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
					{errors.roofType && (
						<p className="mt-1 text-red-500 text-sm">
							{errors.roofType.message}
						</p>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Step2;
