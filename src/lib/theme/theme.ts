import { pallete, spacers, typography } from "./tokens";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	colors: {
		bg: {
			disabled: pallete.grey[100],
			neutral: {
				section: {
					calm: pallete.base.white,
					bold: pallete.grey[800],
					lightStatic: pallete.base.white,
					darkStatic: pallete.grey[800],
				},
				global: {
					enabled: pallete.grey[50],
				},
			},
			lead: {
				calm: {
					enabled: pallete.blue[50],
					hover: pallete.blue[100],
					active: pallete.blue[200],
				},
				loud: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
				loudStatic: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
			},
			green: {
				calm: {
					enabled: pallete.green[50],
					hover: pallete.green[100],
					active: pallete.green[200],
				},
				loud: {
					enabled: pallete.green[400],
					hover: pallete.green[500],
					active: pallete.green[600],
				},
				bold: {
					enabled: pallete.green[500],
					hover: pallete.green[600],
					active: pallete.green[700],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[50],
					hover: pallete.cyan[100],
					active: pallete.cyan[200],
				},
				loud: {
					enabled: pallete.cyan[400],
					hover: pallete.cyan[500],
					active: pallete.cyan[600],
				},
				bold: {
					enabled: pallete.cyan[500],
					hover: pallete.cyan[600],
					active: pallete.cyan[700],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[50],
					hover: pallete.blue[100],
					active: pallete.blue[200],
				},
				loud: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
				bold: {
					enabled: pallete.blue[500],
					hover: pallete.blue[600],
					active: pallete.blue[700],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[50],
					hover: pallete.pink[100],
					active: pallete.pink[200],
				},
				loud: {
					enabled: pallete.pink[400],
					hover: pallete.pink[500],
					active: pallete.pink[600],
				},
				bold: {
					enabled: pallete.pink[500],
					hover: pallete.pink[600],
					active: pallete.pink[700],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[50],
					hover: pallete.grey[100],
					active: pallete.grey[200],
				},
				loud: {
					enabled: pallete.grey[400],
					hover: pallete.grey[500],
					active: pallete.grey[600],
				},
				bold: {
					enabled: pallete.grey[500],
					hover: pallete.grey[600],
					active: pallete.grey[700],
				},
			},
		},
		border: {
			disabled: pallete.grey[100],
			lead: {
				calm: {
					enabled: pallete.blue[100],
					hover: pallete.blue[200],
					active: pallete.blue[300],
				},
				loud: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
				onLight: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
				onDark: {
					enabled: pallete.blue[100],
					hover: pallete.blue[200],
					active: pallete.blue[300],
				},
			},
			green: {
				calm: {
					enabled: pallete.green[100],
				},
				bold: {
					enabled: pallete.green[500],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[100],
				},
				bold: {
					enabled: pallete.cyan[500],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[100],
				},
				bold: {
					enabled: pallete.blue[500],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[100],
				},
				bold: {
					enabled: pallete.pink[500],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[100],
				},
				bold: {
					enabled: pallete.grey[500],
				},
			},
			critical: {
				calm: {
					enabled: pallete.red[100],
				},
				bold: {
					enabled: pallete.red[500],
				},
			},
		},
		text: {
			main: pallete.grey[800],
			mainOnLight: pallete.grey[800],
			mainOnDark: pallete.grey[50],
			secondary: pallete.grey[500],
			tertiary: pallete.grey[400],
			disabled: pallete.grey[300],
			inverted: pallete.base.white,
			green: {
				calm: {
					enabled: pallete.green[50],
				},
				bold: {
					enabled: pallete.green[400],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[50],
				},
				bold: {
					enabled: pallete.cyan[400],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[50],
				},
				bold: {
					enabled: pallete.blue[400],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[50],
				},
				bold: {
					enabled: pallete.pink[400],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[50],
				},
				bold: {
					enabled: pallete.grey[400],
				},
			},
			critical: {
				calm: {
					enabled: pallete.red[50],
				},
				bold: {
					enabled: pallete.red[400],
				},
			},
		},
		link: {
			calm: {
				enabled: pallete.blue[100],
				hover: pallete.blue[200],
				active: pallete.blue[300],
			},
			loud: {
				enabled: pallete.blue[400],
				hover: pallete.blue[500],
				active: pallete.blue[600],
			},
			onLight: {
				enabled: pallete.blue[400],
				hover: pallete.blue[500],
				active: pallete.blue[600],
			},
			onDark: {
				enabled: pallete.blue[100],
				hover: pallete.blue[200],
				active: pallete.blue[300],
			},
		},
	},

	typography: {
		fontFamily: {
			heading: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
			text: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
			monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
		},
		fontSize: {
			heading: {
				h1: typography.fontSize.h1,
				h2: typography.fontSize.h2,
				h3: typography.fontSize.h3,
				h4: typography.fontSize.h4,
				h5: typography.fontSize.h5,
				h6: typography.fontSize.h6,
			},
			text: {
				base: typography.fontSize.base,
				small: typography.fontSize.small,
				caption: typography.fontSize.caption,
			},
			component: {
				base: typography.fontSize.base,
				small: typography.fontSize.small,
			},
		},
		lineHeight: {
			heading: {
				h1: typography.lineHeight.h1,
				h2: typography.lineHeight.h2,
				h3: typography.lineHeight.h3,
				h4: typography.lineHeight.h4,
				h5: typography.lineHeight.h5,
				h6: typography.lineHeight.h6,
			},
			text: {
				base: typography.lineHeight.base,
				small: typography.lineHeight.small,
				caption: typography.lineHeight.caption,
			},
			component: {
				base: typography.lineHeight.base,
				small: typography.lineHeight.small,
			},
		},
		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			semiBold: typography.fontWeight.semiBold,
		},
	},

	spacing: {
		inner: {
			noGap: spacers[0],
			closest: spacers[2],
			close: spacers[4],
			related: spacers[8],
			grouped: spacers[16],
		},
		outer: {
			related: spacers[8],
			grouped: spacers[16],
			subSection: spacers[24],
			section: spacers[48],
		},
		padding: {
			compact: spacers[8],
			default: spacers[16],
			relaxed: spacers[24],
			large: spacers[32],
		},
		height: {
			xxxxSmall: spacers[4],
			xxxSmall: spacers[8],
			xxSmall: spacers[16],
			xSmall: spacers[24],
			small: spacers[32],
			base: spacers[40],
			large: spacers[48],
			xLarge: spacers[56],
			xxLarge: spacers[64],
		},
	},

	borderRadius: {
		micro: spacers[2],
		componentInner: spacers[4],
		componentBase: spacers[8],
		secionInner: spacers[12],
		sectionBase: spacers[12],
	},
};

export const darkTheme: DefaultTheme = {
	...lightTheme,
	colors: {
		bg: {
			disabled: pallete.grey[700],
			neutral: {
				section: {
					calm: pallete.grey[800],
					bold: pallete.grey[100],
					lightStatic: pallete.base.white,
					darkStatic: pallete.grey[800],
				},
				global: {
					enabled: pallete.grey[900],
				},
			},
			lead: {
				calm: {
					enabled: pallete.blue[800],
					hover: pallete.blue[700],
					active: pallete.blue[600],
				},
				loud: {
					enabled: pallete.blue[200],
					hover: pallete.blue[100],
					active: pallete.blue[50],
				},
				loudStatic: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
			},
			green: {
				calm: {
					enabled: pallete.green[800],
					hover: pallete.green[700],
					active: pallete.green[600],
				},
				loud: {
					enabled: pallete.green[200],
					hover: pallete.green[100],
					active: pallete.green[50],
				},
				bold: {
					enabled: pallete.green[300],
					hover: pallete.green[200],
					active: pallete.green[100],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[800],
					hover: pallete.cyan[700],
					active: pallete.cyan[600],
				},
				loud: {
					enabled: pallete.cyan[200],
					hover: pallete.cyan[100],
					active: pallete.cyan[50],
				},
				bold: {
					enabled: pallete.cyan[300],
					hover: pallete.cyan[200],
					active: pallete.cyan[100],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[800],
					hover: pallete.blue[700],
					active: pallete.blue[600],
				},
				loud: {
					enabled: pallete.blue[200],
					hover: pallete.blue[100],
					active: pallete.blue[50],
				},
				bold: {
					enabled: pallete.blue[300],
					hover: pallete.blue[200],
					active: pallete.blue[100],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[800],
					hover: pallete.pink[700],
					active: pallete.pink[600],
				},
				loud: {
					enabled: pallete.pink[200],
					hover: pallete.pink[100],
					active: pallete.pink[50],
				},
				bold: {
					enabled: pallete.pink[300],
					hover: pallete.pink[200],
					active: pallete.pink[100],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[800],
					hover: pallete.grey[700],
					active: pallete.grey[600],
				},
				loud: {
					enabled: pallete.grey[200],
					hover: pallete.grey[100],
					active: pallete.grey[50],
				},
				bold: {
					enabled: pallete.grey[300],
					hover: pallete.grey[200],
					active: pallete.grey[100],
				},
			},
		},
		border: {
			disabled: pallete.grey[800],
			lead: {
				calm: {
					enabled: pallete.blue[700],
					hover: pallete.blue[800],
					active: pallete.blue[900],
				},
				loud: {
					enabled: pallete.blue[200],
					hover: pallete.blue[100],
					active: pallete.blue[50],
				},
				onLight: {
					enabled: pallete.blue[400],
					hover: pallete.blue[500],
					active: pallete.blue[600],
				},
				onDark: {
					enabled: pallete.blue[100],
					hover: pallete.blue[200],
					active: pallete.blue[300],
				},
			},
			green: {
				calm: {
					enabled: pallete.green[600],
				},
				bold: {
					enabled: pallete.green[300],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[600],
				},
				bold: {
					enabled: pallete.cyan[300],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[600],
				},
				bold: {
					enabled: pallete.blue[300],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[600],
				},
				bold: {
					enabled: pallete.pink[300],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[100],
				},
				bold: {
					enabled: pallete.grey[500],
				},
			},
			critical: {
				calm: {
					enabled: pallete.red[600],
				},
				bold: {
					enabled: pallete.red[300],
				},
			},
		},
		text: {
			main: pallete.grey[50],
			mainOnLight: pallete.grey[800],
			mainOnDark: pallete.grey[50],
			secondary: pallete.grey[200],
			tertiary: pallete.grey[300],
			disabled: pallete.grey[400],
			inverted: pallete.grey[800],
			green: {
				calm: {
					enabled: pallete.green[800],
				},
				bold: {
					enabled: pallete.green[200],
				},
			},
			cyan: {
				calm: {
					enabled: pallete.cyan[800],
				},
				bold: {
					enabled: pallete.cyan[200],
				},
			},
			blue: {
				calm: {
					enabled: pallete.blue[800],
				},
				bold: {
					enabled: pallete.blue[200],
				},
			},
			pink: {
				calm: {
					enabled: pallete.pink[800],
				},
				bold: {
					enabled: pallete.pink[200],
				},
			},
			grey: {
				calm: {
					enabled: pallete.grey[800],
				},
				bold: {
					enabled: pallete.grey[200],
				},
			},
			critical: {
				calm: {
					enabled: pallete.red[800],
				},
				bold: {
					enabled: pallete.red[200],
				},
			},
		},
		link: {
			calm: {
				enabled: pallete.blue[600],
				hover: pallete.blue[500],
				active: pallete.blue[400],
			},
			loud: {
				enabled: pallete.blue[200],
				hover: pallete.blue[100],
				active: pallete.blue[50],
			},
			onLight: {
				enabled: pallete.blue[400],
				hover: pallete.blue[500],
				active: pallete.blue[600],
			},
			onDark: {
				enabled: pallete.blue[100],
				hover: pallete.blue[200],
				active: pallete.blue[300],
			},
		},
	},
};
