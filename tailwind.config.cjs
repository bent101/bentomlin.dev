/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				navy: "#130f2e",
				"dark-navy": "#09080c",
			},
		},
	},

	plugins: [require("tailwindcss-3d")],
};

module.exports = config;
