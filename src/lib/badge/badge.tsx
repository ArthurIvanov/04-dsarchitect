import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

export interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
	/**
	 *
	 * Text within a component |
	 * Текст внутри конпонента
	 *
	 */
	text: string;

	/**
	 *
	 * appearance background of the component |
	 * Акцентный фон компонента
	 *
	 */
	appearance?: "blue" | "green" | "pink" | "cyan" | "grey";

	/**
	 *
	 * Makes visual less prominent |
	 * Делает вид менее явным
	 *
	 */

	/**
	 *
	 * Size of component |
	 * Задает размер компонента
	 *
	 */
	size?: "small" | "base";
}

const StyledBadge = styled.div<IBadgeProps>`
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	border: 1px solid;
	font-weight: 500;

	${(props) =>
		props.size &&
		`
        line-height: ${props.theme.typography.lineHeight.component[props.size]};
        font-size: ${props.theme.typography.fontSize.component[props.size]};
        padding: 4px 8px;
        `}

	${(props) =>
		props.appearance &&
		`
        border-color: ${
			props.theme.colors.border[props.appearance].bold.enabled
		};
        background: ${props.theme.colors.bg[props.appearance].bold.enabled};
        color: ${props.theme.colors.text[props.appearance].calm.enabled};
    
    `}
`;
/**
 *
 * Allows user determine context of interface and give more data about it |
 * Позволяет пользователю определить контекст интерфейса и предоставить больше данных о нем
 *
 */
export const Badge: FC<IBadgeProps> = ({
	text,
	appearance,
	size = "base",
	...props
}) => {
	return (
		<StyledBadge size={size} text={text} appearance={appearance} {...props}>
			{text}
		</StyledBadge>
	);
};
