import { css } from "../themes";
import { hoc, styled } from "../utils";

type ButtonProps = {
	[K: string]: unknown,
	icon?: JSX.Element,
	children?: JSX.Element,
};

const buttonCss = css({
	$$lightness: ([c, l0, l1, l2]) => ({
		color: `rgba(${c})`,
		background: `rgba(${l0})`,
		_hover: { backgroundColor: `rgba(${l1})` },
		_active: { backgroundColor: `rgba(${l2})` },
	}),

	$$padding: (value) => ({
		padding: value,
		"&.outlined": { padding: value.replace(/\d+/g, (n: string) => Number(n) - 1) },
	}),

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
	transitions: [100, ["background-color", "border-color", "transform"]],
	lightness: ["$accent6", "$background, 0.75", "$accent13", "$accent12"],

	"& > svg": {
		square: "$$20dp",
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
		_active: { borderColor: "rgba($accent7)" },
	},

	// Priority: icon < filled
	"&.icon": {
		padding: "$$10dp",
		color: "rgba($gray3)",
		"& > svg": { margin: 0 },
	},

	"&.filled-tonal": { lightness: ["$gray3", "$accent13, 0.75", "$accent12", "$accent11"] },
	"&.filled": { lightness: ["$gray16", "$accent7", "$accent5", "$accent4"] },
	"&.enabled": {
		color: "rgba($accent16)",
		background: "rgba($accent7)",
		borderColor: "rgba($accent7)",
	},

	"&.large": {
		display: "flex",
		width: "100%",
		padding: "$$10dp $$30dp",
	},

	"&[disabled]": {
		pointerEvents: "none",
		color: "rgba($gray10)",

		"&.filled, &.filled-tonal, &.enabled": {
			background: "rgba($gray14, 0.75)",
			borderColor: "rgba($gray14, 0.75)",
		},
	},
});

const useIcon = ({ icon, children }: ButtonProps) => ({ children: <>{icon}{children}</> });

const Button = hoc(styled("button", buttonCss), useIcon);

export const ButtonLink = hoc(styled("a", buttonCss), useIcon);

export const IconButton = styled(Button, "icon");

export default Button;
