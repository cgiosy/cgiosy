import { css } from "../themes";
import { styled } from "../utils";

const chipCss = css({
	fontSize: "$$14dp",

	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	fontWeight: 500,
	lineHeight: "$$18dp",
	border: "$$1dp solid rgb($gray40)",
	borderRadius: "$$9dp",
	padding: "$$6dp $$15dp",

	cursor: "pointer",
	userSelect: "none",
	transition: "background 0.1s linear, border-color 0.1s linear",

	color: "$highEmphasis",
	background: "rgba($gray40, 0)",
	_hover: { background: "rgba($gray40, 0.2)" },
	_active: { background: "rgba($gray40, 0.3)" },

	"& > svg": {
		width: "$$18dp",
		height: "$$18dp",
		fill: "currentColor",
		margin: "0 $$8dp 0 -$$3dp",

		"&.trailing": {
			margin: "-$$4dp -$$10dp -$$4dp $$6dp",
			width: "$$26dp",
			height: "$$26dp",
			padding: "$$4dp",
			borderRadius: "50%",
			transition: "background 0.1s linear",
			_hover: { background: "rgba($gray40, 0.3)" },
			_active: { background: "rgba($gray40, 0.4)" },
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
		background: "rgba($accent40, 0.3)",
		borderColor: "transparent",
		_hover: { background: "rgba($accent40, 0.4)" },
		_active: { background: "rgba($accent40, 0.5)" },
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

const Chip = styled("button", chipCss);

export const ChipLink = styled("a", chipCss);

export const IconChip = styled(Chip, "icon");

export default Chip;
