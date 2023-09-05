/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Poppins, sans-serif',
		},
		extend: {
			borderRadius: {
				DEFAULT: '5px',
			},
			borderColor: {
				DEFAULT: '#f3f4f6',
			},
		},
	},
	plugins: [],
};
