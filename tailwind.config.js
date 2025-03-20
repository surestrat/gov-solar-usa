/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// USA theme colors as primary palette - with lighter blue
				blue: {
					50: "#E6F0FA",
					100: "#C0D9F0",
					200: "#7FB3E3",
					300: "#4991D6",
					400: "#1A6FC9",
					500: "#0052A5", // Lighter Primary blue
					600: "#004994",
					700: "#004083",
					800: "#003772",
					900: "#002E61",
				},
				red: {
					50: "#FCE9EB",
					100: "#F7C7CD",
					200: "#EF929C",
					300: "#E76A79",
					400: "#DF4255",
					500: "#B22234", // Primary red
					600: "#A11F2F",
					700: "#911B2A",
					800: "#811826",
					900: "#711421",
				},
				// American namespace for clarity
				usa: {
					blue: {
						50: "#E6F0FA",
						100: "#C0D9F0",
						200: "#7FB3E3",
						300: "#4991D6",
						400: "#1A6FC9",
						500: "#0052A5", // Lighter Primary blue
						600: "#004994",
						700: "#004083",
						800: "#003772",
						900: "#002E61",
					},
					red: {
						50: "#FCE9EB",
						100: "#F7C7CD",
						200: "#EF929C",
						300: "#E76A79",
						400: "#DF4255",
						500: "#B22234",
						600: "#A11F2F",
						700: "#911B2A",
						800: "#811826",
						900: "#711421",
					},
				},
				// Define primary and secondary for semantic usage
				primary: {
					50: "#E6F0FA",
					100: "#C0D9F0",
					200: "#7FB3E3",
					300: "#4991D6",
					400: "#1A6FC9",
					500: "#0052A5", // Same as blue-500 - lighter now
					600: "#004994",
					700: "#004083",
					800: "#003772",
					900: "#002E61",
				},
				secondary: {
					50: "#FCE9EB",
					100: "#F7C7CD",
					200: "#EF929C",
					300: "#E76A79",
					400: "#DF4255",
					500: "#B22234", // Same as red-500
					600: "#A11F2F",
					700: "#911B2A",
					800: "#811826",
					900: "#711421",
				},
				// Legacy green colors maintained for compatibility
				green: {
					50: "#f0fdf4",
					100: "#dcfce7",
					200: "#bbf7d0",
					300: "#86efac",
					400: "#4ade80",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#14532d",
				},
			},
			maxWidth: {
				"8xl": "90rem",
			},
		},
	},
	// Make sure Tailwind processes your index.css file correctly
	plugins: [],
	// Add purge options if needed
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	},
};
