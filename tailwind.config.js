/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'inclusive-sans': ['"Inclusive Sans"', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require("daisyui")],

	daisyui: {
		base: false, // applies background color and foreground color for root element by default
		styled: false, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
	  },
};
