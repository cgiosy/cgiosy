import { css } from "../themes";

const loadingSpinnerCss = css({
	width: "2em",
	height: "2em",
	animation: "spin linear 0.4s infinite",
	stroke: "rgb($accent50)",

	"& > circle": {
		r: "0.75em",
		cx: "1em",
		cy: "1em",
		fill: "none",
		strokeDasharray: "6em",
		strokeDashoffset: "2.5em",
		strokeWidth: "0.1875em",
	},

	"@keyframes spin": {
		"0%": { transform: "rotate(360deg)" },
		"100%": { transform: "rotate(0)" },
	},
});

const LoadingSpinner = () => (
	<svg className={loadingSpinnerCss}><circle /></svg>
);

export default LoadingSpinner;
