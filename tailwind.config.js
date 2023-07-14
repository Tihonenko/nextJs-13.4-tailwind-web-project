/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xsm: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1480px',
		},

		container: {
			center: true,
			padding: {
				DEFAULT: '10px',
				lg: '20px',
			},
		},

		extend: {
			colors: {
				mainGray: '#444444',
				mainGreen: '#34C759',
				mainWhite: '#F6FCFF',
				mainOrange: '#FC891C',
			},

			gap: {
				7.5: '30px',
			},
		},
	},
	plugins: [],
};
