import { CSSObject } from "ddcss";
import { css } from "../themes";
import { cls, hoc, styled } from "../utils";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	leading?: JSX.Element,
	trailing?: JSX.Element,
}

const textLabelCss = css({
	$paddingY: "18dp",
	$paddingL: "18dp",
	$paddingR: "18dp",
	fontSize: "16dp",

	display: "flex",
	position: "relative",
	width: "100%",
	border: "1dp solid $lowEmphasis",
	borderRadius: "4dp",
	cursor: "text",
	transitions: [50, ["padding", "border-width", "border-color"]],

	alignItems: "center",
	height: "56dp",
	padding: "3dp 18dp",

	"&:hover": { borderColor: "rgba($highEmphasis)" },
	"&:focus-within": {
		borderWidth: "3dp",
		borderColor: "rgba($accent7)",
	},

	"&[disabled]": {
		pointerEvents: "none",
		opacity: 0.75,
		color: "rgba($gray10)",
		borderColor: "rgba($gray10)",
	},

	"&.error": { borderColor: "rgba($error7)" },
	"&.error:hover": { borderColor: "rgba($error5)" },

	"&.leading": { $paddingL: "58dp" },
	"&.trailing": { $paddingR: "58dp" },
	"& > svg": { fill: "currentColor" },
	"&.leading > svg:first-child": { square: "24dp" },
	"&.trailing > svg:last-child": {
		square: "26dp",
		padding: "4dp",
		borderRadius: "50%",
		transitions: [100, ["background"]],
		lightness: ["$color, 0", "$color, 0.25", "$color, 0.375"],
	},
	"& > svg [opacity]": {
		opacity: 0,
		transition: "opacity 0.2s linear -0.1s",
	},
	"&.enabled > svg [opacity]": { opacity: 1 },
/*
	"& > svg": {
		square: "20dp",
		fill: "currentColor",
		margin: "0 8dp 0 -2dp",

		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.5s linear -0.3s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },
*/
});

const textInputCss = css({
	display: "block",
	contain: "size",
	width: "100%",

	background: "rgba($background)",
	caretColor: "rgba($accent7)",
	border: "none",
	lineHeight: "20dp",
	transitions: [50, ["box-shadow"]],

	_focus: { outline: "none" },

	"&.error": { caretColor: "rgba($error7)" },
});

const textPlaceholderCss = css({
	position: "absolute",
	top: "calc(50% - 8dp)", // padding 8dp
	left: "calc($paddingL + 2dp - 8dp)", // additional margin 2dp
	padding: "0 8dp",
	lineHeight: "16dp",
	color: "$mediumEmphasis",
	background: "rgba($background)",
	transition: "color 0.1s linear, transform 0.15s cubic-bezier(0.65,0.05,0.36,1)",
	transformOrigin: "top left",
	userSelect: "none",
	cursor: "text",

	[`.${textInputCss}:focus + &`]: { color: "rgba($accent6)" } as CSSObject as any,
	[`.${textInputCss}:focus + &, .${textInputCss}:not(:placeholder-shown) + &`]: {
		transform: "translateY(calc(-50% - $paddingY)) scale(0.75)",
		[`.${textLabelCss}.leading > &`]: { transform: "translateX(calc(18dp - $paddingL)) translateY(calc(-50% - $paddingY)) scale(0.75)" } as CSSObject as any,
	} as CSSObject as any,

	[`.${textInputCss}.error + &`]: { color: "rgba($error6)" } as CSSObject as any,
});

const TextInput = styled("input", textInputCss);

const TextField = hoc(
	styled("label", textLabelCss),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ children, className, placeholder, leading, trailing, ...props }: InputProps) => ({
	// There exists zero width space in the placeholder.
		children: (
			<>
				{leading}
				<TextInput type="text" placeholder="​" spellCheck={false} className={className} {...props} />
				<div className={textPlaceholderCss}>{children}</div>
				{trailing}
			</>
		),
		className: cls([leading && "leading", trailing && "trailing", className]),
		placeholder: undefined,
		leading: undefined,
		trailing: undefined,
	}),
);

export default TextField;
