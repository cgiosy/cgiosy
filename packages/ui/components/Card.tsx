import { css } from "../themes";
import { styled } from "../utils";

const cardCss = css({
	fontSize: "$$16dp",

	display: "inline-flex",
	flexDirection: "column",
	background: "rgba($gray16, 0.875)",
	border: "$$1dp solid $lowEmphasis",
	borderRadius: "$$12dp",
	padding: "$$16dp",
	transitions: [100, ["border", "background", "box-shadow", "transform"]],

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

	"&.filled": {
		background: "rgba($accent14, 0.875)",
		border: "none",
		_hover: {
			background: "rgba($accent13)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent12)" },
	},
});

const Card = styled("article", cardCss);

export default Card;
