import styled from "styled-components";
import { Icon } from "../icon";

interface IButtonProps {
	text: string;
	appearance: "primary" | "secondary" | "tertiary";
	size: "small" | "base";
	disabled?: boolean;
	iconBefore?:
		| "user"
		| "chevronUp"
		| "chevronRight"
		| "chevronLeft"
		| "chevronDown";
	iconAfter?:
		| "user"
		| "chevronUp"
		| "chevronRight"
		| "chevronLeft"
		| "chevronDown";
}

const StyledButton = styled.button<IButtonProps>`
	border: none;
	border: 1px solid transparent;
	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-shadow: none;
	cursor: pointer;
	padding: unset;
	background: unset;
	font-size: unset;
	gap: ${(props) => props.theme.spacing.inner.close};

	${(props) =>
		props.size === "base" &&
		`
        padding: 0 ${props.theme.spacing.padding.relaxed};
        height: ${props.theme.spacing.height.base};
        font-size: ${props.theme.typography.fontSize.component.base};
        line-height: ${props.theme.typography.lineHeight.component.base};
        font-weight: ${props.theme.typography.fontWeight.medium};

        `}

	${(props) =>
		props.size === "small" &&
		`
        padding: 0 ${props.theme.spacing.padding.default};
        height: ${props.theme.spacing.height.small};
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};


        `}

	${(props) =>
		props.appearance === "primary" &&
		`
            &:enabled {
                background: ${props.theme.colors.bg.lead.loud.enabled};
                color: ${props.theme.colors.text.inverted};
                border-color: ${props.theme.colors.border.lead.loud.enabled};
            }
            &:hover {
                background: ${props.theme.colors.bg.lead.loud.hover};
                color: ${props.theme.colors.text.inverted};
                border-color: ${props.theme.colors.border.lead.loud.hover};
            }

            &:active {
                background: ${props.theme.colors.bg.lead.loud.active};
                color: ${props.theme.colors.text.inverted};
                border-color: ${props.theme.colors.border.lead.loud.active};
            } 
        `}

	${(props) =>
		props.appearance === "secondary" &&
		`
            &:enabled {
                background: transparent;
                color: ${props.theme.colors.link.loud.enabled};
                border-color: ${props.theme.colors.border.lead.loud.enabled};
            }
            

            &:hover {
                background: transparent;
                color: ${props.theme.colors.link.loud.hover};
                border-color: ${props.theme.colors.border.lead.loud.hover};
            }

            &:active {
                background: transparent;
                color: ${props.theme.colors.link.loud.active};
                border-color: ${props.theme.colors.border.lead.loud.active};
            }

           
            }

        `}


        ${(props) =>
		props.disabled &&
		`
            color: ${props.theme.colors.text.disabled};
            background: ${props.theme.colors.bg.disabled};
            border: ${props.theme.colors.border.disabled};
            cursor: not-allowed;

            &:hover, &:active {
            color: ${props.theme.colors.text.disabled};
            background: ${props.theme.colors.bg.disabled};
            border: ${props.theme.colors.border.disabled};}

            `}

            &:focus {
		box-shadow: 0px 0px 0px 2px rgba(79, 96, 255, 0.25);
	}
`;

export const Button: React.FC<IButtonProps> = ({
	text = "Hello",
	appearance,
	size,
	disabled,
	iconAfter,
	iconBefore,
}) => {
	return (
		<StyledButton
			appearance={appearance}
			size={size}
			disabled={disabled}
			text={text}
		>
			{iconBefore ? (
				<Icon iconName={iconBefore} size={size === "base" ? 20 : 16} />
			) : null}
			{text}
			{iconAfter ? (
				<Icon iconName={iconAfter} size={size === "base" ? 20 : 16} />
			) : null}
		</StyledButton>
	);
};
