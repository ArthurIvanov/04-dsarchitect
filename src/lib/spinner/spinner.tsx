import { FC } from "react";
import styled from "styled-components";

type TSpinnerSize = "16px" | "24px" | "32px" | "64px";

const StyledSpinner = styled.div<ISpinnerProps>`
	display: flex;
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	align-items: center;
	justify-content: center;

	& > .dsa-spinner {
		display: block;
		box-sizing: border-box;
		width: 80%;
		height: 80%;
		border-radius: 50%;
		border: 8px solid;

		${(props) =>
			props.size === "16px" &&
			`
        border-width: 1px;
        `}

		${(props) =>
			props.size === "24px" &&
			`
        border-width: 2px;
        `}
        
        ${(props) =>
			props.size === "32px" &&
			`
        border-width: 2px;
        `}${(props) =>
			props.size === "64px" &&
			`
        border-width: 4px;
        `}
        
        
		border-color: ${(props) => props.theme.colors.text.inverted} transparent;
		animation: dsa-spinner 1.2s linear infinite;
	}

	@keyframes dsa-spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export interface ISpinnerProps {
	size?: TSpinnerSize;
}

export const Spinner: FC<ISpinnerProps> = ({ size = "64px" }) => (
	<StyledSpinner size={size}>
		<div className={"dsa-spinner"} />
	</StyledSpinner>
);
