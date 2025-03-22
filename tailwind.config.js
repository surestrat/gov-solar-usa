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
					// Add slate for more modern UI elements
				},
				slate: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
					950: "#020617",
				},
			},
			maxWidth: {
				"8xl": "90rem",
			},
			screens: {
				xs: "475px",
				"2xl": "1536px",
				"3xl": "1920px",
			},
			animation: {
				"pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				float: "float 6s ease-in-out infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			boxShadow: {
				"glow-blue": "0 0 15px -3px rgba(59, 130, 246, 0.4)",
				"glow-indigo": "0 0 15px -3px rgba(99, 102, 241, 0.4)",
				"radial-gradient":
					"radial-gradient(circle at center, var(--tw-gradient-stops))",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
			perspective: {
				1000: "1000px",
			},
			transformStyle: {
				"preserve-3d": "preserve-3d",
			},
		},
	},
	plugins: [
		// Your existing plugins...

		// Add this plugin for the missing utilities
		function ({ addUtilities }) {
			const newUtilities = {
				".perspective-1000": {
					perspective: "1000px",
				},
				".transform-gpu": {
					transform: "translateZ(0)",
				},
				".preserve-3d": {
					transformStyle: "preserve-3d",
				},
			};
			addUtilities(newUtilities);
		},
	],
	// Ensure optimization in production
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	},
};
