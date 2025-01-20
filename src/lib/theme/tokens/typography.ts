import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[56],
		h2: spacers[40],
		h3: spacers[32],
		h4: spacers[24],
		h5: spacers[18],
		h6: spacers[16],
		base: spacers[16],
		small: spacers[14],
		caption: spacers[12],
	},

	lineHeight: {
		h1: "64px",
		h2: "40px",
		h3: "32px",
		h4: "24px",
		h5: "24px",
		h6: "24px",
		base: "24px",
		small: "20px",
		caption: "16px",
	},

	fontWeight: {
		regular: "400",
		medium: "500",
		semiBold: "600",
	},
};
