import { Client, Databases, ID } from "appwrite";

// Debug function to check environment variables
const debugEnvVars = () => {
	console.log("Environment Variables Check:");
	console.log(
		"VITE_APPWRITE_ENDPOINT:",
		import.meta.env.VITE_APPWRITE_ENDPOINT
	);
	console.log(
		"VITE_APPWRITE_PROJECT_ID:",
		import.meta.env.VITE_APPWRITE_PROJECT_ID
	);
	console.log("VITE_DATABASE_ID:", import.meta.env.VITE_DATABASE_ID);
	console.log(
		"VITE_LEADS_COLLECTION_ID:",
		import.meta.env.VITE_LEADS_COLLECTION_ID
	);

	// Check if Vite is loading any environment variables
	console.log("All env vars:", import.meta.env);
};

// Create a new client instance for each call
const getClient = () => {
	debugEnvVars();

	const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
	const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

	if (!endpoint || !projectId) {
		throw new Error(
			"Appwrite environment variables are not defined. Check your .env file and make sure it's in the project root (not in src)."
		);
	}

	const client = new Client();
	client.setEndpoint(endpoint).setProject(projectId);

	return client;
};

// Function to get database instance with proper error handling
const getDatabases = () => {
	return new Databases(getClient());
};

// Save a new solar lead to Appwrite
export const saveSolarLead = async (leadData) => {
	try {
		// Log environment variables for debugging
		debugEnvVars();

		const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
		const LEADS_COLLECTION_ID = import.meta.env.VITE_LEADS_COLLECTION_ID;

		if (!DATABASE_ID || !LEADS_COLLECTION_ID) {
			throw new Error(
				"Database or collection ID environment variables are not defined. Check your .env file and ensure it's in the project root directory."
			);
		}

		// Generate a unique lead ID if not provided
		const leadId =
			leadData.leadId ||
			`LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

		// Extract the numeric part of the phone number
		const phoneDigits = leadData.phone.replace(/\D/g, "");

		// Format the data to match the collection schema
		const formattedData = {
			lead_id: leadId,
			first_name: leadData.firstName,
			last_name: leadData.lastName,
			email: leadData.email,
			// Store phone number as string since field type is changed
			phone_number: phoneDigits,
			created_at: new Date().toISOString(), // Add current timestamp
		};

		// For debugging - log what we're about to send
		console.log("Sending to Appwrite with:", {
			DATABASE_ID,
			LEADS_COLLECTION_ID,
			formattedData,
		});

		const response = await getDatabases().createDocument(
			DATABASE_ID,
			LEADS_COLLECTION_ID,
			ID.unique(),
			formattedData
		);

		return {
			success: true,
			data: response,
		};
	} catch (error) {
		console.error("Error saving lead to Appwrite:", error);
		return {
			success: false,
			error: error.message,
		};
	}
};

// Get all leads - typically for admin purposes
export const getLeads = async () => {
	try {
		const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
		const LEADS_COLLECTION_ID = import.meta.env.VITE_LEADS_COLLECTION_ID;

		if (!DATABASE_ID || !LEADS_COLLECTION_ID) {
			throw new Error(
				"Database or collection ID environment variables are not defined. Check your .env file."
			);
		}

		const response = await getDatabases().listDocuments(
			DATABASE_ID,
			LEADS_COLLECTION_ID
		);

		return {
			success: true,
			data: response.documents,
		};
	} catch (error) {
		console.error("Error fetching leads from Appwrite:", error);
		return {
			success: false,
			error: error.message,
		};
	}
};
