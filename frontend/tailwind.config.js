/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'wedgewood': {
					'50': '#f4f7fb',
					'100': '#e8eff6',
					'200': '#cddeea',
					'300': '#a1c2d8',
					'400': '#6ea2c2',
					'500': '#457b9d',
					'600': '#396b90',
					'700': '#2f5775',
					'800': '#2a4a62',
					'900': '#274053',
					'950': '#1a2937',
				},
				pantone: "#E63946",
				honeydew: "#F1FAEE",
				non_photo_blue: "#A8DADC",
				cerulean: "#457B9D",
				berkeley_blue: "#1D3557",
			},
		},
	},
	plugins: [],
}

