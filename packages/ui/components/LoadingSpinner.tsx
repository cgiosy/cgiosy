import { css } from "../themes";

const loadingSpinnerCss = css({
	square: "$$32dp",
	stroke: "rgba($accent7)",

	"& > circle": {
		r: "$$12dp",
		cx: "$$16dp",
		cy: "$$16dp",
		fill: "none",
		strokeDasharray: "$$96dp",
		strokeDashoffset: "$$40dp",
		strokeWidth: "$$3dp",

		animation: "spin linear 0.4s infinite",
		transformOrigin: "center",

		"@keyframes spin": {
			"0%": { transform: "rotate(360deg)" },
			"100%": { transform: "rotate(0)" },
		},
	},
});

const LoadingSpinner = () => (
	<svg className={loadingSpinnerCss}><circle /></svg>
);

export default LoadingSpinner;
