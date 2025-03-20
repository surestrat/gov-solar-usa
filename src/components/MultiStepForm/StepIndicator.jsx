import { Check } from "lucide-react";

const StepIndicator = ({ formStep }) => {
	return (
		<div className="flex justify-between mb-4">
			{[1, 2, 3].map((step) => (
				<div
					key={step}
					className={`flex items-center ${
						step < formStep
							? "text-green-500"
							: step === formStep
							? "text-blue-500"
							: "text-gray-300"
					}`}
				>
					<div
						className={`w-8 h-8 rounded-full flex items-center justify-center ${
							step < formStep
								? "bg-green-100"
								: step === formStep
								? "bg-blue-100"
								: "bg-gray-100"
						}`}
					>
						{step < formStep ? (
							<Check className="w-5 h-5" />
						) : (
							<span className="font-semibold">{step}</span>
						)}
					</div>
					<span className="ml-2 text-sm font-medium">
						{step === 1 ? "Contact" : step === 2 ? "Property" : "Qualification"}
					</span>
					{step < 3 && (
						<div
							className={`h-0.5 w-12 mx-4 ${
								step < formStep ? "bg-green-500" : "bg-gray-200"
							}`}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default StepIndicator;
