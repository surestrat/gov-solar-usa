import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../schemas";
import { saveSolarLead } from "../../services/appwrite";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const ContactSection = () => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
		},
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formError, setFormError] = useState("");

	const formatPhoneNumber = (value) => {
		if (!value) return value;

		// Remove all non-digits
		const phoneNumber = value.replace(/[^\d]/g, "");

		// Format according to length
		if (phoneNumber.length < 4) return phoneNumber;
		if (phoneNumber.length < 7) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
		}
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
			3,
			6
		)}-${phoneNumber.slice(6, 10)}`;
	};

	const handlePhoneChange = (e) => {
		const formattedValue = formatPhoneNumber(e.target.value);
		setValue("phone", formattedValue, { shouldValidate: true });
	};

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setFormError("");

		try {
			const response = await saveSolarLead(data);

			if (response.success) {
				console.log("Form submitted successfully:", response.data);
				setIsSubmitted(true);
				reset();
			} else {
				setFormError(
					response.error ||
						"There was an error submitting your form. Please try again."
				);
				console.error("Form submission error:", response.error);
			}
		} catch (error) {
			setFormError(
				"There was an error submitting your form. Please try again later."
			);
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section id="contact" className="py-24 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					title="Get Your Free Solar Consultation"
					subtitle="Fill out the form below to speak with a solar expert and receive a personalized quote."
					centered={true}
				/>

				<div className="max-w-3xl mx-auto">
					{isSubmitted ? (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-center p-8 bg-white rounded-2xl shadow-lg"
						>
							<div className="inline-flex items-center justify-center bg-usa-blue-50 text-usa-blue-600 rounded-full w-20 h-20 mb-6">
								<Check className="w-10 h-10" />
							</div>
							<h3 className="text-2xl font-bold mb-4">Thank You!</h3>
							<p className="text-gray-600">
								Your consultation request has been received. One of our solar
								specialists will contact you shortly.
							</p>
							<Button
								variant="primary"
								className="mt-8"
								onClick={() => setIsSubmitted(false)}
							>
								Submit Another Request
							</Button>
						</motion.div>
					) : (
						<motion.form
							initial="hidden"
							animate="visible"
							variants={containerVariants}
							onSubmit={handleSubmit(onSubmit)}
							className="bg-white p-8 rounded-2xl shadow-lg"
						>
							{formError && (
								<div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
									{formError}
								</div>
							)}

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
								<motion.div variants={itemVariants}>
									<label
										htmlFor="firstName"
										className="block text-gray-700 font-medium mb-2"
									>
										First Name <span className="text-usa-red-500">*</span>
									</label>
									<input
										type="text"
										id="firstName"
										{...register("firstName")}
										className={`w-full px-4 py-3 rounded-lg border ${
											errors.firstName
												? "border-usa-red-500"
												: "border-gray-300"
										} focus:border-usa-blue-500 focus:ring focus:ring-usa-blue-200 focus:ring-opacity-50 transition`}
										placeholder="Enter your first name"
									/>
									{errors.firstName && (
										<p className="mt-1 text-usa-red-500 text-sm">
											{errors.firstName.message}
										</p>
									)}
								</motion.div>

								<motion.div variants={itemVariants}>
									<label
										htmlFor="lastName"
										className="block text-gray-700 font-medium mb-2"
									>
										Last Name <span className="text-usa-red-500">*</span>
									</label>
									<input
										type="text"
										id="lastName"
										{...register("lastName")}
										className={`w-full px-4 py-3 rounded-lg border ${
											errors.lastName ? "border-usa-red-500" : "border-gray-300"
										} focus:border-usa-blue-500 focus:ring focus:ring-usa-blue-200 focus:ring-opacity-50 transition`}
										placeholder="Enter your last name"
									/>
									{errors.lastName && (
										<p className="mt-1 text-usa-red-500 text-sm">
											{errors.lastName.message}
										</p>
									)}
								</motion.div>
							</div>

							<motion.div variants={itemVariants} className="mb-6">
								<label
									htmlFor="email"
									className="block text-gray-700 font-medium mb-2"
								>
									Email Address <span className="text-usa-red-500">*</span>
								</label>
								<input
									type="email"
									id="email"
									{...register("email")}
									className={`w-full px-4 py-3 rounded-lg border ${
										errors.email ? "border-usa-red-500" : "border-gray-300"
									} focus:border-usa-blue-500 focus:ring focus:ring-usa-blue-200 focus:ring-opacity-50 transition`}
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<p className="mt-1 text-usa-red-500 text-sm">
										{errors.email.message}
									</p>
								)}
							</motion.div>

							<motion.div variants={itemVariants} className="mb-8">
								<label
									htmlFor="phone"
									className="block text-gray-700 font-medium mb-2"
								>
									Phone Number <span className="text-usa-red-500">*</span>
								</label>
								<input
									type="tel"
									id="phone"
									{...register("phone")}
									onChange={handlePhoneChange}
									className={`w-full px-4 py-3 rounded-lg border ${
										errors.phone ? "border-usa-red-500" : "border-gray-300"
									} focus:border-usa-blue-500 focus:ring focus:ring-usa-blue-200 focus:ring-opacity-50 transition`}
									placeholder="Enter your phone number"
								/>
								{errors.phone && (
									<p className="mt-1 text-usa-red-500 text-sm">
										{errors.phone.message}
									</p>
								)}
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="text-center sm:text-right"
							>
								<Button
									type="submit"
									variant="primary"
									className="w-full sm:w-auto px-8 py-3 text-lg"
									isLoading={isSubmitting}
									disabled={isSubmitting}
								>
									Get Free Consultation
								</Button>
							</motion.div>

							<motion.p
								variants={itemVariants}
								className="mt-6 text-center text-sm text-gray-500"
							>
								By submitting this form, you agree to our privacy policy and
								consent to being contacted regarding solar services.
							</motion.p>
						</motion.form>
					)}

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="mt-12 text-center"
					>
						<p className="text-gray-600">
							Have questions? Call us at{" "}
							<span className="text-usa-blue-600 font-medium">
								(800) 123-4567
							</span>
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
