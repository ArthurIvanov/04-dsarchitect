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

export const SizeBase = {
	args: {
		text: "Hello",
		size: "base",
		appearance: "blue",
	},
};

export const BadgeSizeBase = {
	args: {
		text: "Hello",
		size: "base",
		appearance: "blue",
	},
};
export const Outlined = {
	args: {
		text: "Hello",
		size: "base",
		appearance: "blue",
		outlined: true,
	},
};
