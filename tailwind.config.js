/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		spacing: {
			1: "100px",
			2: "12px",
			3: "16px",
			4: "24px",
			5: "32px",
			6: "48px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				midnight: "#121063",
				metal: "#565584",
				tahiti: {
					100: "#cffafe",
					200: "#a5f3fc",
					300: "#67e8f9",
					400: "#22d3ee",
					500: "#06b6d4",
					600: "#0891b2",
					700: "#0e7490",
					800: "#155e75",
					900: "#164e63",
				},
				silver: "#ecebff",
			},
		},
	},
	plugins: [],
};
