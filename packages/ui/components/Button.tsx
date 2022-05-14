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
	transition: "background 0.1s linear, border-color 0.1s linear",

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
		margin: "0 0.5em 0 -0.25em",
		fill: "currentColor",
		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.2s linear -0.1s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	"&.outlined": {
		border: "0.09375em solid rgb($gray50)",
		padding: "0.5em 1.40625em",
		_active: { borderColor: "rgb($accent40)" },
	},

	// Priority: icon < filled
	"&.icon": {
		color: "rgb($gray0)",
		padding: "0.5em",

		"& > svg": { margin: 0 },

		"&.outlined": {
			padding: "0.4375em",
			border: "0.0625em solid rgb($accent15)",
		},
	},

	"&.filled-tonal": { lightness: ["$gray0", 90, 80, 70] },
	"&.filled": { lightness: ["$gray100", 40, 30, 20] },
	"&&.enabled": {
		color: "rgb($accent100)",
		background: "rgb($accent40)",
		borderColor: "rgb($accent40)",
	},

	"&.large": {
		display: "flex",
		width: "100%",
		fontSize: "1.0625em",
		padding: `${9 / 17}em 1.5em`,
	},

	"&&[disabled]": {
		color: "rgb($gray0)",
		"&.filled, &.filled-tonal, &.enabled": {
			background: "rgb($gray80)",
			borderColor: "rgb($gray80)",
		},
		opacity: 0.375,
		pointerEvents: "none",
	},
});

const Button = styled("button", buttonCss);

export const ButtonLink = styled("a", buttonCss);

export const IconButton = styled(Button, "icon");

export default Button;
