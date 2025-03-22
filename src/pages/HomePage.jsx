import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	contactFormSchema,
	calculateSolarSavings,
	US_STATES,
	BILL_RANGES,
	ROOF_TYPES,
	PROPERTY_TYPES,
	CREDIT_SCORE_RANGES,
} from "@schemas";
import { saveSolarLead } from "@services/appwrite";
import Header from "@components/layout/Header";

// Import section components
import HeroSection from "@components/sections/HeroSection";
import BenefitsSection from "@components/sections/BenefitsSection";
import ProcessSection from "@components/sections/ProcessSection";
import CalculatorSection from "@components/sections/CalculatorSection";
import PhotoGallerySection from "@components/sections/PhotoGallerySection";
import EnvironmentalImpactSection from "@components/sections/EnvironmentalImpactSection";
import TestimonialsSection from "@components/sections/TestimonialsSection";
import TrustIndicators from "@components/sections/TrustIndicators";
import ContactFormSection from "@components/sections/ContactFormSection";
import FaqSection from "@components/sections/FaqSection";
import StatsSection from "@components/sections/StatsSection";
import Footer from "@components/layout/Footer";
import ContactSection from "@components/sections/ContactSection";
import MultiStepForm from "@components/MultiStepForm";

const HomePage = () => {
	const [savings, setSavings] = useState(null);
	const [formStep, setFormStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showQuoteForm, setShowQuoteForm] = useState(false);
	const [showCalculator, setShowCalculator] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [apiError, setApiError] = useState(null);
	const contactFormRef = useRef(null);
	const calculatorRef = useRef(null);

	const [testimonials] = useState([
		{
			name: "Sarah Johnson",
			location: "Dallas, TX",
			quote:
				"Our electricity bills have been cut by 65%! The installation was quick and professional, and the team was incredibly knowledgeable.",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
		},
		{
			name: "Michael Roberts",
			location: "Phoenix, AZ",
			quote:
				"With Arizona's sun, going solar was a no-brainer. What surprised me was how easy the whole process was, from quote to installation.",
			image:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
		},
		{
			name: "Jennifer Williams",
			location: "San Diego, CA",
			quote:
				"The 30% tax credit made this so affordable! We're producing more energy than we use during most months.",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
		},
	]);

	const [galleryImages] = useState([
		{
			url: "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Solar panels on modern home roof",
		},
		{
			url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Solar installation team working on roof",
		},
		{
			url: "https://images.unsplash.com/photo-1559302995-f1d7e5f67f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Closeup of solar panel technology",
		},
		{
			url: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Beautiful home with solar panels",
		},
		{
			url: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Solar panels with mountain backdrop",
		},
		{
			url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
			alt: "Aerial view of solar farm",
		},
	]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		trigger,
		getValues,
	} = useForm({
		resolver: zodResolver(contactFormSchema),
		mode: "onChange",
	});

	const watchBill = watch("averageBill");
	const watchState = watch("state");
	const watchName = watch("name");
	const watchEmail = watch("email");
	const watchPhone = watch("phone");

	// Fix: useState -> useEffect to avoid React Hook call issue
	useEffect(() => {
		// Update formData whenever these fields change
		if (watchName || watchEmail || watchPhone) {
			setFormData((prev) => ({
				...prev,
				name: watchName || prev.name,
				email: watchEmail || prev.email,
				phone: watchPhone || prev.phone,
			}));
		}
	}, [watchName, watchEmail, watchPhone]);

	useEffect(() => {
		if (watchBill) {
			setSavings(calculateSolarSavings(watchBill));
		}
	}, [watchBill]);

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setApiError(null);

		try {
			// Combine all form data
			const completeFormData = {
				...data,
				...formData,
				submissionDate: new Date().toISOString(),
				status: "new",
			};

			// Save to Appwrite
			const response = await saveSolarLead(completeFormData);

			if (response.success) {
				console.log("Form submitted to Appwrite:", response.data);
				setShowSuccess(true);
			} else {
				setApiError(
					"There was an issue submitting your request. Please try again."
				);
				console.error("Error from Appwrite:", response.error);
			}
		} catch (error) {
			setApiError("An unexpected error occurred. Please try again later.");
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const scrollToForm = () => {
		contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToCalculator = () => {
		calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const handleGetQuoteClick = () => {
		setShowQuoteForm(true);
		scrollToForm();
	};

	const handleCalculateSavingsClick = () => {
		setShowCalculator(true);
		scrollToCalculator();
	};

	const nextStep = async () => {
		const fieldsToValidate =
			formStep === 1
				? ["firstName", "lastName", "email", "phone"]
				: ["address", "state", "zipCode", "propertyType"];

		const isStepValid = await trigger(fieldsToValidate);
		if (isStepValid) {
			// Save form data when moving from step 1
			if (formStep === 1) {
				const currentValues = getValues();
				setFormData((prev) => ({
					...prev,
					firstName: currentValues.firstName,
					lastName: currentValues.lastName,
					email: currentValues.email,
					phone: currentValues.phone,
				}));
			}
			setFormStep((prev) => prev + 1);
		}
	};

	const prevStep = () => setFormStep((prev) => prev - 1);

	const formatPhoneNumber = (value) => {
		if (!value) return value;
		const phoneNumber = value.replace(/[^\d]/g, "");
		const phoneNumberLength = phoneNumber.length;
		if (phoneNumberLength < 4) return phoneNumber;
		if (phoneNumberLength < 7) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
		}
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
			3,
			6
		)}-${phoneNumber.slice(6, 10)}`;
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<HeroSection
				onGetQuoteClick={handleGetQuoteClick}
				onCalculateSavingsClick={handleCalculateSavingsClick}
			/>

			{/* Benefits Section */}
			<BenefitsSection />

			{/* Process Section */}
			<ProcessSection />

			{/* Calculator Section */}
			{/* <section ref={calculatorRef} id="calculator">
				<CalculatorSection
					register={register}
					watch={watch}
					savings={savings}
				/>
			</section> */}

			{/* Photo Gallery Section */}
			<PhotoGallerySection images={galleryImages} />

			{/* Environmental Impact Section */}
			{/* <EnvironmentalImpactSection /> */}

			{/* Testimonials Section */}
			{/* <TestimonialsSection testimonials={testimonials} /> */}

			{/* Trust Indicators */}
			<TrustIndicators />

			{/* Stats Section */}
			{/* <StatsSection /> */}

			{/* Contact Form Section */}
			<section ref={contactFormRef} id="contact">
				{/* Use MultiStepForm if we're showing a multi-step experience */}
				{showQuoteForm ? (
					<div className="py-20 px-4 bg-gray-50">
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
					</div>
				) : (
					<ContactSection id="contact" />
				)}
			</section>

			{/* FAQ Section */}
			<FaqSection onContactClick={scrollToForm} />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default HomePage;
