import { motion } from "framer-motion";

const Step1 = ({ register, errors, formatPhoneNumber }) => {
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
						Full Name
					</label>
					<input
						{...register("name")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
						placeholder="John Doe"
					/>
					{errors.name && (
						<p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input
						{...register("email")}
						type="email"
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
						placeholder="john@example.com"
					/>
					{errors.email && (
						<p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
					)}
				</div>

				<div className="md:col-span-2">
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Phone Number
					</label>
					<input
						{...register("phone")}
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
						placeholder="(555) 000-0000"
						onChange={(e) => {
							e.target.value = formatPhoneNumber(e.target.value);
						}}
					/>
					{errors.phone && (
						<p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Step1;
