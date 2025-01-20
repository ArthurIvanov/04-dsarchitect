import { Card } from "./card";

export default {
	title: "Компоненты/Card",
	component: Card,
	parameters: {
		layout: "centered",
		status: {
			type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},
	tags: ["autodocs"],
};

export const CardDefault = {
	args: {
		textSize: "base",
		newsData: "сегодня",
		badgeText: "Важное",
	},
};
