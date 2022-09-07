import { css } from "../themes";
import { styled } from "../utils";

const cardCss = css({
	$$padding: (value) => ({
		padding: value.replace(/\d+/g, (n: string) => Number(n) - 1),
		"&.filled": { padding: value },
	}),

	fontSize: "$$16dp",

	display: "inline-flex",
	flexDirection: "column",
	background: "rgba($gray16, 0.875)",
	padding: "$$16dp",
	border: "$$1dp solid $lowEmphasis",
	borderRadius: "$$12dp",
	transitions: [100, ["color", "background", "border", "box-shadow", "transform"]],

	_hover: {
		background: "rgba($gray15)",
		borderColor: "$mediumEmphasis",
		boxShadow: "0 $$1dp $$5dp 0 rgba($gray4, 0.375)",
	},
	_active: {
		background: "rgba($gray14)",
		borderColor: "$highEmphasis",
		boxShadow: "0 $$2dp $$10dp rgba($gray4, 0.375)",
	},

	"&.filled, &.checked": {
		background: "rgba($accent14, 0.875)",
		border: "none",
		_hover: {
			background: "rgba($accent13)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent12)" },
	},
	"&.checked": { color: "rgba($accent1)" },
	"&.filled.checked": {
		background: "rgba($accent13)",
		_hover: {
			background: "rgba($accent12)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent11)" },
	},

	"&.pressable": {
		cursor: "pointer",
		_hover: { transform: "translateY(-$$1dp)" },
		_active: { transform: "translateY($$1_5dp)" },
	},
});

const Card = styled("article", cardCss);

export default Card;
