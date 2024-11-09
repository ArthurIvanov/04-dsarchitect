import { Badge } from "./badge";
// import "../../stories/stories.styles.css";

export default {
	title: "Компоненты/Badge",
	component: Badge,
	parameters: {
		status: {
			type: "deprecated", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},

	tags: ["autodocs"],
};

export const Blue = {
	args: {
		text: "Бейдж",
		appearance: "blue",
		size: "base",
	},
};

export const Green = {
	args: {
		text: "Бейдж",
		appearance: "green",
		size: "base",
	},
};

export const Pink = {
	args: {
		text: "Бейдж",
		appearance: "pink",
		size: "base",
	},
};

export const Cyan = {
	args: {
		text: "Бейдж",
		appearance: "cyan",
		size: "base",
	},
};

export const Grey = {
	args: {
		text: "Бейдж",
		appearance: "grey",
		size: "base",
	},
};

export const Sizes = {
	args: {
		text: "Бейдж",
		appearance: "blue",
		size: "small",
	},
};

export const GreenSmall = {
	args: {
		text: "Бейдж",
		appearance: "green",
		size: "small",
	},
};
