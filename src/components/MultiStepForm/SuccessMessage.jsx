import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "../ui/Button";

const SuccessMessage = ({ formData, onReset }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className="text-center py-12"
		>
			<div className="flex justify-center mb-6">
				<div className="rounded-full bg-green-100 p-4">
					<Check className="w-12 h-12 text-green-500" />
				</div>
			</div>
			<h3 className="text-2xl font-bold mb-4">
				Thank You
				{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}!
			</h3>
			<p className="text-gray-600 mb-6">
				Your solar quote request has been received. One of our solar experts
				will contact you
				{formData.phone ? ` at ${formData.phone}` : ""} within 24 hours.
			</p>
			<p className="text-gray-600 mb-6">
				We've sent a confirmation email to{" "}
				{formData.email || "your email address"}.
			</p>
			<Button variant="link" onClick={onReset}>
				Submit another request
			</Button>
		</motion.div>
	);
};

export default SuccessMessage;
