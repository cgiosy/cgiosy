import { css } from "../themes";
import { styled } from "../utils";

const cardCss = css({
	fontSize: "$$16dp",

	display: "inline-flex",
	flexDirection: "column",
	background: "rgba($gray100, 0.5)",
	border: "$$1dp solid $lowEmphasis",
	borderRadius: "$$12dp",
	padding: "$$16dp",
	transition: "border 0.1s linear, background 0.1s linear, box-shadow 0.1s linear, transform 0.1s linear",

	_hover: {
		background: "rgba($gray85, 0.625)",
		borderColor: "$mediumEmphasis",
		boxShadow: "0 $$1dp $$6dp 0 rgba($gray15, 0.375)",
	},
	_active: {
		background: "rgba($gray70, 0.625)",
		borderColor: "$highEmphasis",
		boxShadow: "0 $$2dp $$12dp rgba($gray15, 0.375)",
	},

	"&.filled": {
		background: "rgba($accent80, 0.625)",
		border: "none",
		_hover: {
			background: "rgba($accent70, 0.75)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent60, 0.75)" },
	},

	"&.pressable": {
		_hover: { transform: "translateY(-$$1dp)" },
		_active: { transform: "translateY($$1dp)" },
	},
});

const Card = styled("article", cardCss);

export default Card;
