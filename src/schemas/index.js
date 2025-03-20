import { z } from "zod";

// Updated regex to be more permissive with US phone formats
const phoneRegex = /^(\+?1?[ -]?)?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/;

const validateUSPhone = (value) => {
	if (!value) return false;

	// Remove all non-digit characters
	const digitsOnly = value.replace(/\D/g, "");

	// US numbers should be either 10 digits, or 11 digits starting with 1
	return (
		digitsOnly.length === 10 ||
		(digitsOnly.length === 11 && digitsOnly[0] === "1")
	);
};

// Simple form schema matching the Appwrite collection
export const contactFormSchema = z.object({
	firstName: z
		.string()
		.min(2, "First name must be at least 2 characters")
		.regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid first name"),
	lastName: z
		.string()
		.min(2, "Last name must be at least 2 characters")
		.regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid last name"),
	email: z
		.string()
		.email("Invalid email address")
		.regex(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Please enter a valid email"
		),
	phone: z
		.string()
		.regex(
			phoneRegex,
			"Please enter a valid US phone number (e.g., (555) 555-5555)"
		)
		.refine(validateUSPhone, "Please enter a valid 10-digit US phone number"),
});

export const US_STATES = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];

export const BILL_RANGES = [
	"$50-100",
	"$100-150",
	"$150-200",
	"$200-250",
	"$250-300",
	"$300-350",
	"$350-400",
	"$400-500",
	"$500-600",
	"$600+",
];

export const ROOF_TYPES = ["Asphalt Shingle", "Metal", "Tile", "Flat", "Other"];

export const PROPERTY_TYPES = [
	"Single Family",
	"Multi Family",
	"Mobile Home",
	"Other",
];

export const CREDIT_SCORE_RANGES = [
	"Excellent (720+)",
	"Good (680-719)",
	"Fair (620-679)",
	"Poor (Below 620)",
	"Not Sure",
];

export const calculateSolarSavings = (billRange) => {
	// Simple calculation based on bill range
	// In a real app this would be more sophisticated
	const billRangeMap = {
		"$50-100": 600,
		"$100-150": 1200,
		"$150-200": 1800,
		"$200-250": 2400,
		"$250-300": 3000,
		"$300-350": 3600,
		"$350-400": 4200,
		"$400-500": 4800,
		"$500-600": 6000,
		"$600+": 7200,
	};

	return billRangeMap[billRange] || 0;
};
