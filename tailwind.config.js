module.exports = {
	// mode: "jit",
	purge: ["./src/**/*,{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xxs: "320px",
				xs: "480px",
			},
		},
	},
	variants: {
		extend: {
			rotate: ["active", "group-hover"],
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
