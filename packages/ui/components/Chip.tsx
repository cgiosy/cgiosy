import { css } from "../themes";
import { styled } from "../utils";

const chipCss = css({
	$$lightness: ([l0, l1, l2]) => ({
		background: `rgba(${l0})`,
		_hover: { background: `rgba(${l1})` },
		_active: { background: `rgba(${l2})` },
	}),

	fontSize: "$$14dp",

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	lineHeight: "$$18dp",
	border: "$$1dp solid $lowEmphasis",
	borderRadius: "$$9dp",
	padding: "$$6dp $$15dp",

	cursor: "pointer",
	userSelect: "none",
	transition: "background 0.1s linear, border-color 0.1s linear",

	color: "$highEmphasis",
	lightness: ["$background, 0.75", "$gray13", "$gray12"],

	"& > svg": {
		square: "$$18dp",
		fill: "currentColor",
		margin: "0 $$8dp 0 -$$3dp",

		"&.trailing": {
			margin: "-$$4dp -$$10dp -$$4dp $$6dp",
			square: "$$26dp",
			padding: "$$4dp",
			borderRadius: "50%",
			transitions: [100, ["background"]],
			lightness: ["$color, 0", "$color, 0.25", "$color, 0.375"],
		},

		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.2s linear -0.1s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	// Priority: icon < filled
	"&.icon": {
		padding: "$$8dp",
		"& > svg": { margin: 0 },
	},

	"&.enabled": {
		borderColor: "transparent",
		lightness: ["$accent13, 0.75", "$accent12", "$accent11"],
	},

	"&[disabled]": {
		pointerEvents: "none",
		color: "rgba($gray10)",

		"&.enabled": {
			background: "rgba($gray14, 0.75)",
			borderColor: "rgba($gray14, 0.75)",
		},
	},
});

const Chip = styled("button", chipCss);

export const ChipLink = styled("a", chipCss);

export const IconChip = styled(Chip, "icon");

export default Chip;
