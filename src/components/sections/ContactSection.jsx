import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@schemas";
import { saveSolarLead } from "@services/appwrite";
import {
	Send,
	CheckCircle,
	AlertCircle,
	User,
	Mail,
	Phone,
} from "lucide-react";
import Button from "../ui/Button";

const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(contactFormSchema),
		mode: "onChange",
	});

	const formatPhoneNumber = (value) => {
		// Remove all non-digit characters
		const digitsOnly = value.replace(/\D/g, "");

		// Format the number as (XXX) XXX-XXXX
		if (digitsOnly.length <= 3) {
			return digitsOnly;
		} else if (digitsOnly.length <= 6) {
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
		} else {
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
				3,
				6
			)}-${digitsOnly.slice(6, 10)}`;
		}
	};

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setSubmitError(null);

		try {
			// Prepare data for Appwrite
			const leadData = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phone: data.phone,
				submissionDate: new Date().toISOString(),
				status: "new",
			};

			// Send to Appwrite
			const response = await saveSolarLead(leadData);

			if (response.success) {
				setSubmitSuccess(true);
				reset(); // Clear form fields
			} else {
				setSubmitError(
					response.error ||
						"Failed to submit your information. Please try again."
				);
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitError("An unexpected error occurred. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Animation variants
	const containerAnimation = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemAnimation = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<section
			id="contact"
			className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-blue-900 to-indigo-950"
		>
			{/* Background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<svg
					className="absolute -top-40 -right-40 text-blue-800/10 w-96 h-96"
					viewBox="0 0 400 400"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M57,-76.9C74.6,-68.5,89.8,-53.8,98.2,-35.9C106.7,-18,108.5,2.9,104,23.1C99.6,43.3,88.9,62.7,72.8,75.8C56.7,88.9,35.1,95.6,14.9,94.9C-5.3,94.2,-24.1,86.1,-45.4,77.4C-66.7,68.7,-90.6,59.5,-98,42.9C-105.4,26.4,-96.4,2.5,-89.2,-19.8C-82,-42.1,-76.7,-62.8,-63.1,-71.6C-49.6,-80.4,-27.8,-77.4,-7.5,-67.2C12.9,-57,39.4,-85.3,57,-76.9Z"
						transform="translate(200 200) scale(1.2)"
					/>
				</svg>

				<svg
					className="absolute bottom-0 left-0 text-blue-800/10 w-72 h-72"
					viewBox="0 0 400 400"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M39.9,-65.7C52.8,-57.1,65.3,-48.3,75.3,-35.9C85.3,-23.5,92.8,-7.5,91.8,8.1C90.7,23.6,81.2,38.6,70.3,52.8C59.4,67,47.2,80.4,32.4,85.2C17.6,90.1,0.2,86.4,-18.7,83.2C-37.6,80,-58,77.3,-69.9,66.2C-81.8,55.1,-85.3,35.6,-87.9,16.1C-90.6,-3.3,-92.5,-22.8,-87.6,-40.6C-82.6,-58.5,-70.8,-74.9,-55.2,-82.3C-39.6,-89.7,-19.8,-88.2,-2.6,-84.2C14.6,-80.2,27,-74.4,39.9,-65.7Z"
						transform="translate(200 200) scale(1.1)"
					/>
				</svg>

				{/* Mesh grid overlay */}
				<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
			</div>

			<div className="container mx-auto max-w-6xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
							Ready to Eliminate Your Electric Bill?
						</span>
					</h2>
					<p className="text-blue-200 text-lg max-w-2xl mx-auto">
						Fill out the form below to get started with your free solar
						installation assessment.
					</p>
				</motion.div>

				<div className="flex flex-col lg:flex-row gap-12 w-full">
					{/* Contact form */}
					<motion.div
						variants={containerAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-xl"
					>
						{submitSuccess ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="text-center py-12"
							>
								<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
									<CheckCircle className="h-10 w-10 text-green-600" />
								</div>
								<h3 className="text-2xl font-semibold text-white mb-4">
									Thank You!
								</h3>
								<p className="text-blue-200 mb-8">
									Your information has been successfully submitted. One of our
									solar experts will contact you shortly.
								</p>
								<Button
									onClick={() => setSubmitSuccess(false)}
									className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
								>
									Submit Another Request
								</Button>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit(onSubmit)}>
								<h3 className="text-2xl font-semibold text-white mb-6">
									Contact Information
								</h3>

								{submitError && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="bg-red-900/50 border border-red-400/30 text-red-200 px-4 py-3 rounded-lg mb-6"
									>
										<div className="flex items-center">
											<AlertCircle className="w-5 h-5 mr-2" />
											<p>{submitError}</p>
										</div>
									</motion.div>
								)}

								<div className="flex flex-cols-1.5 md:flex-cols-2.5 gap-6 mb-6">
									<motion.div variants={itemAnimation}>
										<label className="block text-blue-200 text-sm font-medium mb-2">
											First Name
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<User className="h-5 w-5 text-blue-400/70" />
											</div>
											<input
												{...register("firstName")}
												type="text"
												className="w-full pl-10 pr-4 py-3 bg-blue-900/40 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-400/50 text-white"
												placeholder="John"
											/>
										</div>
										{errors.firstName && (
											<p className="mt-1 text-red-300 text-sm">
												{errors.firstName.message}
											</p>
										)}
									</motion.div>

									<motion.div variants={itemAnimation}>
										<label className="block text-blue-200 text-sm font-medium mb-2">
											Last Name
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
												<User className="h-5 w-5 text-blue-400/70" />
											</div>
											<input
												{...register("lastName")}
												type="text"
												className="w-full pl-10 pr-4 py-3 bg-blue-900/40 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-400/50 text-white"
												placeholder="Doe"
											/>
										</div>
										{errors.lastName && (
											<p className="mt-1 text-red-300 text-sm">
												{errors.lastName.message}
											</p>
										)}
									</motion.div>
								</div>

								<motion.div variants={itemAnimation} className="mb-6">
									<label className="block text-blue-200 text-sm font-medium mb-2">
										Email Address
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<Mail className="h-5 w-5 text-blue-400/70" />
										</div>
										<input
											{...register("email")}
											type="email"
											className="w-full pl-10 pr-4 py-3 bg-blue-900/40 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-400/50 text-white"
											placeholder="john@example.com"
										/>
									</div>
									{errors.email && (
										<p className="mt-1 text-red-300 text-sm">
											{errors.email.message}
										</p>
									)}
								</motion.div>

								<motion.div variants={itemAnimation} className="mb-8">
									<label className="block text-blue-200 text-sm font-medium mb-2">
										Phone Number
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
											<Phone className="h-5 w-5 text-blue-400/70" />
										</div>
										<input
											{...register("phone")}
											type="tel"
											className="w-full pl-10 pr-4 py-3 bg-blue-900/40 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-400/50 text-white"
											placeholder="(555) 123-4567"
											onChange={(e) => {
												e.target.value = formatPhoneNumber(e.target.value);
											}}
										/>
									</div>
									{errors.phone && (
										<p className="mt-1 text-red-300 text-sm">
											{errors.phone.message}
										</p>
									)}
								</motion.div>

								<motion.div variants={itemAnimation} className="relative">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
									<Button
										type="submit"
										disabled={isSubmitting}
										className="relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300"
									>
										{isSubmitting ? (
											<span className="flex items-center">
												<svg
													className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Processing...
											</span>
										) : (
											<span className="flex items-center">
												Get Your Free Solar Quote{" "}
												<Send className="ml-2 h-5 w-5" />
											</span>
										)}
									</Button>
								</motion.div>
							</form>
						)}
					</motion.div>

					{/* Information panel */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-white space-y-10"
					>
						<div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-blue-500/20">
							<h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
								Why Choose Our Free Solar Program?
							</h3>

							<ul className="space-y-4">
								{[
									"Completely free installation with no upfront costs",
									"Reduce your electric bill by up to 60%",
									"Qualify for 30% Federal Tax Credit",
									"Premium solar panels with 25-year warranty",
									"Professional installation by certified technicians",
									"Monitoring system included at no extra cost",
								].map((item, index) => (
									<li key={index} className="flex items-start">
										<div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 mt-0.5">
											<CheckCircle className="h-4 w-4 text-white" />
										</div>
										<span className="text-blue-100">{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20">
							<div className="flex items-center mb-4">
								<div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
									<AlertCircle className="h-6 w-6 text-yellow-300" />
								</div>
								<h3 className="text-xl font-semibold text-yellow-300">
									Limited Time Offer
								</h3>
							</div>
							<p className="text-blue-100">
								The Free Solar Program has limited spots available in your area.
								Submit your information today to secure your place and start
								saving immediately.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
