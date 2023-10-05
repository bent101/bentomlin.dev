const hocusPlugin = require("tailwindcss-hocus");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				navy: "#130f2e",
				"dark-navy": "#09080c",
				"sky-blue": "#333b99",
			},
		},
	},

	plugins: [require("tailwindcss-3d"), hocusPlugin],
};

module.exports = config;
