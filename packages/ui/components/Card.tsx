import { css } from "../themes";
import { styled } from "../utils";

const chipCss = css({
	fontSize: "$$16dp",

	display: "inline-flex",
	flexDirection: "column",
	background: "rgba($gray40, 0)",
	border: "$$1dp solid rgb($gray50)",
	borderRadius: "$$12dp",
	padding: "$$16dp",
	transition: "border 0.1s linear, background 0.1s linear, box-shadow 0.1s linear, transform 0.1s linear",

	_hover: {
		background: "rgba($gray40, 0.1)",
		borderColor: "rgb($gray40)",
		boxShadow: "0 $$1dp $$6dp 0 rgba($gray0, 0.3)",
	},
	_active: {
		background: "rgba($gray40, 0.2)",
		borderColor: "rgb($gray30)",
		boxShadow: "0 $$2dp $$12dp rgba($gray0, 0.3)",
	},

	"&.filled": {
		background: "rgba($accent40, 0.1)",
		border: "none",
		_hover: {
			background: "rgba($accent40, 0.2)",
			boxShadow: "none",
		},
		_active: { background: "rgba($accent40, 0.3)" },
	},

	"&.pressable": {
		_hover: { transform: "translateY(-$$1dp)" },
		_active: { transform: "translateY($$1dp)" },
	},
});

const Card = styled("article", chipCss);

export default Card;
