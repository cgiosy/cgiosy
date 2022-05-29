import { css } from "../themes";
import { styled } from "../utils";

const buttonCss = css({
	dp: 16,

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	border: 0,
	borderRadius: "9999em",
	lineHeight: "$$24dp",
	padding: "$$8dp $$24dp",

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
		width: "$$24dp",
		height: "$$24dp",
		margin: "0 $$12dp 0 -$$4dp",
		fill: "currentColor",
		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.2s linear -0.1s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	"&.outlined": {
		border: "$$1dp solid rgb($gray40)",
		padding: "$$7dp $$23dp",
		_active: { borderColor: "rgb($accent40)" },
	},

	// Priority: icon < filled
	"&.icon": {
		padding: "$$12dp",
		color: "rgb($gray0)",
		"& > svg": { margin: 0 },
		"&.outlined": { padding: "$$11dp" },
	},

	"&.filled-tonal": { lightness: ["$gray0", 90, 80, 70] },
	"&.filled": { lightness: ["$gray100", 40, 30, 20] },
	"&.enabled": {
		color: "rgb($accent100)",
		background: "rgb($accent40)",
		borderColor: "rgb($accent40)",
	},

	"&.large": {
		display: "flex",
		width: "100%",
		fontSize: "$$17dp",
		padding: `$$9dp $$27dp`,
		"&.outlined": { padding: `$$8dp $$26dp` },
	},

	"&[disabled]": {
		opacity: 0.375,
		pointerEvents: "none",
		color: "rgb($gray0)",
		"&.filled, &.filled-tonal, &.enabled": {
			background: "rgb($gray80)",
			borderColor: "rgb($gray80)",
		},
	},
});

const Button = styled("button", buttonCss);

export const ButtonLink = styled("a", buttonCss);

export const IconButton = styled(Button, "icon");

export default Button;
