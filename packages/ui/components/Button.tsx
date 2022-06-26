import { css } from "../themes";
import { hoc, styled } from "../utils";

type ButtonProps = {
	[K: string]: unknown,
	icon?: JSX.Element,
	children?: JSX.Element,
};

const buttonCss = css({
	fontSize: "$$16dp",

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	border: 0,
	borderRadius: "9999em",
	lineHeight: "$$20dp",
	padding: "$$9dp $$24dp",

	cursor: "pointer",
	userSelect: "none",
	transition: "background 0.1s linear, border-color 0.1s linear",

	$$lightness: ([c, l0, l1, l2]) => ({
		color: `rgba(${c})`,
		background: `rgba($accent${l0})`,
		_hover: { background: `rgba($accent${l1})` },
		_active: { background: `rgba($accent${l2})` },
	}),

	lightness: ["$accent40", "45, 0", "45, 0.25", "45, 0.375"],

	"& > svg": {
		width: "$$20dp",
		height: "$$20dp",
		fill: "currentColor",
		margin: "0 $$8dp 0 -$$2dp",

		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.2s linear -0.1s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	"&.outlined": {
		border: "$$1dp solid $lowEmphasis",
		padding: "$$8dp $$23dp",
		_active: { borderColor: "rgb($accent40)" },
	},

	// Priority: icon < filled
	"&.icon": {
		padding: "$$10dp",
		color: "rgb($gray15)",
		"& > svg": { margin: 0 },
		"&.outlined": { padding: "$$9dp" },
	},

	"&.filled-tonal": { lightness: ["$gray15", "80, 0.625", "70, 0.75", "60, 0.75"] },
	"&.filled": { lightness: ["$gray100", 40, 30, 20] },
	"&.enabled": {
		color: "rgb($accent100)",
		background: "rgb($accent40)",
		borderColor: "rgb($accent40)",
	},

	"&.large": {
		display: "flex",
		width: "100%",
		padding: "$$10dp $$30dp",

		"&.outlined": { padding: "$$9dp $$29dp" },
	},

	"&[disabled]": {
		opacity: 0.4375,
		pointerEvents: "none",
		color: "rgb($gray15)",

		"&.filled, &.filled-tonal, &.enabled": {
			background: "rgba($gray45, 0.375)",
			borderColor: "rgba($gray45, 0.375)",
		},
	},
});

const useIcon = ({ icon, children }: ButtonProps) => ({ children: <>{icon}{children}</> });

const Button = hoc(styled("button", buttonCss), useIcon);

export const ButtonLink = hoc(styled("a", buttonCss), useIcon);

export const IconButton = styled(Button, "icon");

export default Button;
