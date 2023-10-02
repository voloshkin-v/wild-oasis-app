/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Poppins, sans-serif',
		},
		extend: {
			borderRadius: {
				sm: '5px',
				md: '7px',
				lg: '9px',
			},
			borderColor: {
				DEFAULT: '#f3f4f6',
			},
		},
	},
	plugins: [],
};
