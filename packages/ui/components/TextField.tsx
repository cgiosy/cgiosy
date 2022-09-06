import { CSSObject } from "ddcss";
import { css } from "../themes";
import { hoc, styled } from "../utils";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const textLabelCss = css({
	$paddingY: "$$12dp",
	$paddingX: "$$16dp",
	fontSize: "$$16dp",

	display: "block",
	position: "relative",
	width: "100%",

	"&[disabled]": {
		pointerEvents: "none",
		opacity: 0.75,
		color: "rgba($gray10)",
	},
});

const textInputCss = css({
	display: "block",
	contain: "size",
	width: "100%",
	padding: "$paddingY $paddingX",
	background: "rgba($background)",
	caretColor: "rgba($accent7)",
	border: "$$1dp solid $mediumEmphasis",
	borderRadius: "$$4dp",
	lineHeight: "$$20dp",
	cursor: "text",
	transitions: [50, ["padding", "border-width", "border-color", "box-shadow"]],

	"& > svg": {
		square: "$$20dp",
		fill: "currentColor",
		margin: "0 $$8dp 0 -$$2dp",

		"& [opacity]": {
			opacity: 0,
			transition: "opacity 0.5s linear -0.3s",
		},
	},
	"&.enabled > svg [opacity]": { opacity: 1 },

	[`.${textLabelCss}:hover > &`]: { borderColor: "rgba($highEmphasis)" } as CSSObject as any,
	[`.${textLabelCss}[disabled] > &`]: { borderColor: "rgba($gray10)" } as CSSObject as any,

	"&&": {
		_active: {
			padding: "calc($paddingY - $$1_5dp) calc($paddingX - $$1_5dp)",
			borderWidth: "$$2_5dp",
			borderColor: "rgba($accent7)",
			outline: "none",
		},

		"&.error": {
			caretColor: "rgba($error7)",
			borderColor: "rgba($error7)",
		},
	},
});

const textPlaceholderCss = css({
	position: "absolute",
	top: "calc(50% - $$8dp)",
	left: "calc($paddingX - $$8dp + 1px)", // cursor 1px
	padding: "0 $$8dp",
	lineHeight: "$$16dp",
	background: "rgba($background)",
	transition: "color 0.1s linear, transform 0.15s cubic-bezier(0.65,0.05,0.36,1)",
	transformOrigin: "top left",
	userSelect: "none",
	cursor: "text",

	[`.${textInputCss}:focus + &`]: { color: "rgba($accent6)" } as CSSObject as any,
	[`.${textInputCss}:focus + &, .${textInputCss}:not(:placeholder-shown) + &`]: { transform: "translateY(calc(-50% - $paddingY)) scale(0.75)" } as CSSObject as any,

	[`.${textInputCss}.error + &`]: { color: "rgba($error6)" } as CSSObject as any,
});

const TextInput = styled("input", textInputCss);

const TextField = hoc(
	styled("label", textLabelCss),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ children, placeholder, ...props }: InputProps) => ({
	// There exists zero width space in the placeholder.
		children: (
			<>
				<TextInput type="text" placeholder="​" spellCheck={false} {...props} />
				<div className={textPlaceholderCss}>{children}</div>
			</>
		),
	}),
);

export default TextField;
