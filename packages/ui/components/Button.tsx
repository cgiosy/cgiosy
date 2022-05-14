import { css } from "../themes";
import { styled } from "../utils";

const buttonCss = css({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	lineHeight: 1.5,
	border: 0,
	borderRadius: "9999em",
	padding: "0.5em 1.5em",

	cursor: "pointer",
	userSelect: "none",
	transitionProperty: "background, border-color",
	transitionDuration: "0.15s",

	$$lightness: ([c, l0, l1, l2]) => ({
		color: `rgba(${c})`,
		background: `rgba($accent${l0})`,
		_hover: { background: `rgba($accent${l1})` },
		_active: { background: `rgba($accent${l2})` },
	}),

	lightness: ["$accent40", "40, 0", "40, 0.2", "40, 0.3"],

	"& > svg": {
		width: "1.5em",
		height: "1.5em",
		margin: "0.125em 0.375em 0 -0.25em",
		fill: "currentColor",
	},

	"&.filled": { lightness: ["$gray100", 40, 30, 20] },
	"&.filled-tonal": { lightness: ["$gray0", 90, 80, 70] },
	"&.outlined": {
		border: "0.09375em solid rgb($gray50)",
		padding: "0.5em 1.40625em",
		_active: { borderColor: "rgb($accent40)" },
	},

	"&.large": {
		display: "flex",
		width: "100%",
		fontSize: "1.0625em",
		padding: `${9 / 17}em 1.5em`,
	},

	"&.icon": {
		lightness: ["$accent40", "40, 0", "40, 0.2", "40, 0.3"],
		padding: "0.5em",

		"&.filled": { lightness: ["$gray100", 40, 30, 20] },
		"&.filled-tonal": { lightness: ["$gray0", 90, 80, 70] },
		"&.outlined": {
			border: "0.0625em solid rgb($gray50)",
			padding: "0.5em 1.40625em",
			_active: { borderColor: "rgb($accent40)" },
		},
	},

	"&[disabled]": {
		color: "rgb($gray0)",
		background: "rgba($gray0, 0)",
		"&.filled, &.filled-tonal": { background: "rgba($gray0, 0.25)" },
		opacity: 0.25,
		pointerEvents: "none",
	},
});

const Button = styled("button", buttonCss);

export const ButtonLink = styled("a", buttonCss);

export const IconButton = styled(Button, "icon");

export default Button;
