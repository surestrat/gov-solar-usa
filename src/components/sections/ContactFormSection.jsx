import { motion } from "framer-motion";
import {
	US_STATES,
	BILL_RANGES,
	ROOF_TYPES,
	PROPERTY_TYPES,
	CREDIT_SCORE_RANGES,
} from "@schemas";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import MultiStepForm from "@components/MultiStepForm";

const ContactFormSection = ({
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
}) => {
	return (
		<section id="contact-form" className="py-20 px-4 bg-gray-50">
			<Container size="small">
				<SectionHeading
					title="Get Your Free Solar Quote"
					subtitle="Join thousands of Americans saving with solar energy"
				/>

				<MultiStepForm
					register={register}
					errors={errors}
					handleSubmit={handleSubmit}
					formatPhoneNumber={formatPhoneNumber}
					onSubmit={onSubmit}
					isSubmitting={isSubmitting}
					showSuccess={showSuccess}
					setShowSuccess={setShowSuccess}
					formData={formData}
					apiError={apiError}
					setFormStep={setFormStep}
					formStep={formStep}
					nextStep={nextStep}
					prevStep={prevStep}
					US_STATES={US_STATES}
					BILL_RANGES={BILL_RANGES}
					ROOF_TYPES={ROOF_TYPES}
					PROPERTY_TYPES={PROPERTY_TYPES}
					CREDIT_SCORE_RANGES={CREDIT_SCORE_RANGES}
				/>
			</Container>
		</section>
	);
};

export default ContactFormSection;
