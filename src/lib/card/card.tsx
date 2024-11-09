import styled from "styled-components";
import { Badge } from "../badge";
import { ButtonLink } from "../button";

interface ICardProps {
	/**
	 * Используется для сложной композиции внутри карточки
	 */
	children?: React.ReactNode;
	/**
	 * Переключение размера шрифта
	 */
	textSize?: "base" | "large";
	/**
	 * Дата новости, может быть календарной или отметкой сегодня
	 */
	newsData?: string;
	/**
	 * Нейминг новости или ее важность
	 */
	badgeText?: string;
	/**
	 * Базовый текст карточки
	 */
	text: string;
	/**
	 * Текст кнопки который можно заменить
	 */
	buttonText?: string;
}

const StyledCard = styled.div<ICardProps>`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${(props) => props.theme.spacing.inner.grouped};
	padding: ${(props) => props.theme.spacing.padding.default};
	background: ${(props) => props.theme.colors.bg.neutral.section.calm};
	border: 1px solid ${(props) => props.theme.colors.border.grey.calm.enabled};
	box-shadow: 0px 1px 6px rgba(34, 49, 69, 0.12);
	min-width: 320px;
	max-width: 560px;

	.card-content {
		width: 100%;
		display: flex;
		flex-direction: inherit;
		gap: inherit;
	}

	.card-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.card-header-news {
			font-size: ${(props) =>
				props.theme.typography.fontSize.component.base};
			line-height: ${(props) =>
				props.theme.typography.lineHeight.component.base};
			font-weight: ${(props) => props.theme.typography.fontWeight.medium};
		}
	}

	.card-body {
		display: flex;
		flex-direction: inherit;
		gap: inherit;

		.card-body-text {
			${(props) =>
				props.textSize == "base" &&
				`
                font-size: ${props.theme.typography.fontSize.text.base};
                line-height: ${props.theme.typography.lineHeight.text.base};
                font-weight: ${props.theme.typography.fontWeight.regular};
                
                `}

			${(props) =>
				props.textSize == "large" &&
				`
                font-size: ${props.theme.typography.fontSize.heading.h4};
                line-height: ${props.theme.typography.lineHeight.heading.h4};
                font-weight: ${props.theme.typography.fontWeight.semiBold};
                
                `}
		}
	}
`;

/**
 *
 * Компонент карточки используется для отображения новости на сайте
 *
 */
export const Card: React.FC<ICardProps> = ({
	children,
	textSize = "base",
	text = "This is default text",
	newsData = "01.01.2025",
	badgeText = "Новости",
	buttonText = "Подробнее",
}) => {
	return (
		<StyledCard text={text} textSize={textSize}>
			<div className="card-content">
				<div className="card-header">
					<span className="card-header-news">{newsData}</span>
					<Badge text={badgeText} appearance="grey" size="small" />
				</div>
				<div className="card-body">
					<p className="card-body-text">{text}</p>

					{children}
				</div>
			</div>
			<ButtonLink
				iconAfter="chevronRight"
				appearance="primary"
				text={buttonText}
			/>
		</StyledCard>
	);
};
