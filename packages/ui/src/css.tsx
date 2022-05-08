import $$css from "ddcss";

const { $css, css } = $$css({
	$mono: `"Menlo", "Noto Sans Mono CJK KR", "Monaco", "Hack", "D2Coding ligature", "D2 Coding ligature", "D2Coding", "D2 Coding", "Consolas", monospace`,
	$sans: `"Pretendard", "Apple SD Gothic Neo", "Noto Sans CJK KR", "Noto Sans KR", "본고딕", "KoPubDotum", "나눔바른고딕", "NanumBarunGothic", "나눔고딕", "NanumGothic", sans-serif`,

	$accent1: "11,18,54",
	$accent2: "26,38,100",
	$accent3: "41,58,148",
	$accent4: "57,78,196",
	$accent5: "77,104,231",
	$accent6: "106,135,247",
	$accent7: "140,167,252",
	$accent8: "177,197,254",
	$accent9: "216,226,255",

	$gray0: "0,0,0",
	$gray1: "23,25,30",
	$gray2: "48,51,60",
	$gray3: "73,77,89",
	$gray4: "100,105,119",
	$gray5: "127,133,148",
	$gray6: "157,162,177",
	$gray7: "188,192,204",
	$gray8: "221,223,229",
	$gray9: "255,255,255",

	$lowEmphasis: "rgba($gray0, 0.375)",
	$mediumEmphasis: "rgba($gray0, 0.625)",
	$highEmphasis: "rgba($gray0, 0.875)",

	$headingHeight: "1.2",
	$contentHeight: "1.5",
});

type Elm = {
	children: React.ReactNode;
	className?: string;
};

const styled = <Props extends Elm, Return = JSX.Element>(
	Component: string | ((props: Props) => Return),
	obj: Parameters<typeof css>[0],
) => {
	const className = css(obj);
	return typeof Component === "string"
		? (props: Props) => (
			<Component {...(props as any)} className={
				"className" in props
					? `${className} ${props.className}`
					: className
			} />
		)
		: (props: Props) => Component({
			...props,
			className: "className" in props
				? `${className} ${props.className}`
				: className,
		});
};

const cls = (arr: unknown[]) => (
	arr
		.flat(Infinity)
		.filter(Boolean)
		.sort()
		.join(" ")
);

export { $css, css, cls, styled };
