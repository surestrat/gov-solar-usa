import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Button from "../ui/Button";
import StepIndicator from "./StepIndicator";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import SuccessMessage from "./SuccessMessage";

const MultiStepForm = ({
	register,
	errors,
	handleSubmit,
	formatPhoneNumber,
	onSubmit,
	isSubmitting,
	showSuccess,
	setShowSuccess,
	formData,
	apiError,
	setFormStep,
	formStep,
	nextStep,
	prevStep,
	US_STATES,
	BILL_RANGES,
	ROOF_TYPES,
	PROPERTY_TYPES,
	CREDIT_SCORE_RANGES,
}) => {
	return (
		<div className="bg-white rounded-2xl shadow-xl p-8">
			<AnimatePresence mode="wait">
				{showSuccess ? (
					<SuccessMessage
						formData={formData}
						onReset={() => {
							setShowSuccess(false);
							setFormStep(1);
						}}
					/>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						{apiError && (
							<div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
								<div className="flex items-center">
									<Info className="w-5 h-5 mr-2" />
									<p>{apiError}</p>
								</div>
							</div>
						)}

						<div className="mb-8">
							<StepIndicator formStep={formStep} />
						</div>

						<AnimatePresence mode="wait">
							{formStep === 1 && (
								<Step1
									register={register}
									errors={errors}
									formatPhoneNumber={formatPhoneNumber}
								/>
							)}

							{formStep === 2 && (
								<Step2
									register={register}
									errors={errors}
									US_STATES={US_STATES}
									PROPERTY_TYPES={PROPERTY_TYPES}
									ROOF_TYPES={ROOF_TYPES}
								/>
							)}

							{formStep === 3 && (
								<Step3
									register={register}
									errors={errors}
									BILL_RANGES={BILL_RANGES}
									CREDIT_SCORE_RANGES={CREDIT_SCORE_RANGES}
								/>
							)}
						</AnimatePresence>

						<div className="flex justify-between mt-8">
							{formStep > 1 && (
								<Button
									type="button"
									variant="link"
									onClick={prevStep}
									className="px-6 py-3 text-gray-600 hover:text-gray-800"
								>
									Back
								</Button>
							)}
							{formStep < 3 ? (
								<Button
									type="button"
									variant="primary"
									onClick={nextStep}
									className="ml-auto"
								>
									Continue
								</Button>
							) : (
								<Button
									type="submit"
									variant="primary"
									isLoading={isSubmitting}
									disabled={isSubmitting}
									className="ml-auto"
								>
									Get Your Free Quote
								</Button>
							)}
						</div>

						<p className="text-xs text-gray-500 text-center mt-6">
							By submitting this form, you agree to our Terms of Service and
							Privacy Policy. We'll never share your information with third
							parties.
						</p>
					</form>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MultiStepForm;
