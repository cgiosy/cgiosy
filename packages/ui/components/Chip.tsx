import { css } from "../themes";
import { Component, cls, hoc, styled } from "../utils";

type ChipProps = {
	[K: string]: unknown,
	children?: JSX.Element,
	leading?: JSX.Element,
	trailing?: JSX.Element,
};

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
	borderRadius: "$$8dp",
	padding: "$$6dp $$15dp",

	cursor: "pointer",
	userSelect: "none",
	transition: "background 0.1s linear, border-color 0.1s linear",

	color: "$highEmphasis",
	lightness: ["$background, 0.75", "$gray13", "$gray12"],

	"& > svg": { fill: "currentColor" },
	"&.leading > svg:first-child": {
		square: "$$18dp",
		margin: "0 $$8dp 0 -$$3dp",
	},
	"&.trailing > svg:last-child": {
		margin: "-$$4dp -$$10dp -$$4dp $$6dp",
		square: "$$26dp",
		padding: "$$4dp",
		borderRadius: "50%",
		transitions: [100, ["background"]],
		lightness: ["$color, 0", "$color, 0.25", "$color, 0.375"],
	},
	"& > svg [opacity]": {
		opacity: 0,
		transition: "opacity 0.2s linear -0.1s",
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	// Priority: icon < filled
	"&.icon": {
		padding: "$$6dp",
		"& > svg": {
			square: "$$18dp",
			margin: 0,
		},
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

const useIcons = ({ children, className, leading, trailing }: ChipProps) => ({
	className: cls([className, leading && "leading", trailing && "trailing"]),
	children: <>{leading}{children}{trailing}</>,
	leading: undefined,
	trailing: undefined,
});

const Chip = hoc(styled("button", chipCss), useIcons);

export const ChipLink = hoc(styled("a", chipCss), useIcons);

export const IconChip = styled(Chip, "icon");

export default Chip;
