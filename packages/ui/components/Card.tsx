import { css } from "../themes";
import { styled } from "../utils";

const cardCss = css({
	fontSize: "$$16dp",

	display: "inline-flex",
	flexDirection: "column",
	background: "rgba($gray100, 0.875)",
	border: "$$1dp solid $lowEmphasis",
	borderRadius: "$$12dp",
	padding: "$$16dp",
	transition: "border 0.1s linear, background 0.1s linear, box-shadow 0.1s linear, transform 0.1s linear",

	_hover: {
		background: "rgba($gray90, 1)",
		borderColor: "$mediumEmphasis",
		boxShadow: "0 $$1dp $$6dp 0 rgba($gray15, 0.375)",
	},
	_active: {
		background: "rgba($gray80, 1)",
		borderColor: "$highEmphasis",
		boxShadow: "0 $$2dp $$12dp rgba($gray15, 0.375)",
	},

	"&.filled": {
		background: "rgba($accent85, 0.875)",
		border: "none",
		_hover: {
			background: "rgba($accent80, 1)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent70, 1)" },
	},
});

const Card = styled("article", cardCss);

export default Card;
