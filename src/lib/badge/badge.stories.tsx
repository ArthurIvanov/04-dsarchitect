import { Badge } from "./badge";

export default {
	title: "Компоненты/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
		status: {
			type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},
	tags: ["autodocs"],
};

export const BadgeSizeBase = {
	args: {
		text: "Hello this is a badge",
		size: "base",
		appearance: "blue",
	},
};

export const BadgeSizeSmall = {
	args: {
		text: "Hello this is a badge",
		size: "small",
		appearance: "blue",
	},
};

export const Outlined = {
	args: {
		text: "Hello this is a badge",
		size: "small",
		appearance: "blue",
		outlined: true,
	},
};

export const AppearanceGreen = {
	args: {
		text: "Hello this is a badge",
		size: "small",
		appearance: "green",
	},
};
