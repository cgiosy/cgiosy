import { css } from "../themes";
import { hoc, styled } from "../utils";

type ButtonProps = {
	[K: string]: unknown,
	icon?: JSX.Element,
	children?: JSX.Element,
};

const buttonCss = css({
	$$backgrounds: ([l0, l1, l2]) => ({
		background: `rgba(${l0})`,
		_hover: { backgroundColor: `rgba(${l1})` },
		_active: { backgroundColor: `rgba(${l2})` },
	}),

	fontSize: "16dp",

	display: "inline-grid",
	grid: "auto / auto-flow",
	gap: "8dp",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	border: 0,
	borderRadius: "9999em",
	padding: "0 20dp",
	height: "40dp",

	color: "rgba($accent6)",
	backgrounds: ["$background, 0.75", "$accent13", "$accent12"],
	cursor: "pointer",
	userSelect: "none",
	transitions: [100, ["color", "background-color", "box-shadow", "transform"]],

	"& > svg": {
		square: "24dp",
		fill: "currentColor",

		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.2s linear -0.1s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	"&.icon": {
		padding: "10dp",
		color: "rgba($gray3)",
		"& > svg": { margin: 0 },
	},

	"&.enabled": {
		color: "rgba($accent3)",
		backgrounds: ["$accent13, 0.75", "$accent12", "$accent11"],
		borderColor: "rgba($accent7)",
	},

	"&.outlined": {
		boxShadow: "inset 0 0 0 1dp $lowEmphasis",
		_active: { boxShadow: "inset 0 0 0 1dp rgba($accent7)" },
	},

	"&.filled-tonal, &.enabled": { backgrounds: ["$accent13, 0.75", "$accent12", "$accent11"] },
	"&.filled-tonal.enabled": { backgrounds: ["$accent13", "$accent12", "$accent11"] },
	"&.filled": {
		color: "rgba($gray16)",
		backgrounds: ["$accent7", "$accent5", "$accent4"],
		"&.enabled": { backgrounds: ["$accent6", "$accent4", "$accent3"] },
	},

	"&.large": {
		display: "flex",
		width: "100%",
		padding: "0 24dp",
		height: "44dp",
	},

	"&&&[disabled]": {
		pointerEvents: "none",
		color: "rgba($gray10)",

		"&.filled, &.filled-tonal, &.enabled": {
			background: "rgba($gray14, 0.75)",
			borderColor: "rgba($gray14, 0.75)",
		},
	},
});

const useIcon = ({ children, icon }: ButtonProps) => ({
	children: <>{icon}{children}</>,
	icon: undefined,
});

const Button = hoc(styled("button", buttonCss), useIcon);

export const ButtonLink = hoc(styled("a", buttonCss), useIcon);

export const IconButton = styled(Button, "icon");

export default Button;
