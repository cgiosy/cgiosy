import { iota } from "@cgiosy/utils/array";
import { withKnobs } from "@storybook/addon-knobs";
import { colorVariations, css } from "../themes";

import ThemeTester from "./ThemeTester";

const colorCss = css({
	display: "flex",
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
	fontWeight: 600,
});

const colorsCss = css({
	display: "flex",
	flexDirection: "row",
	width: "100%",
	height: "10em",
});

const Color = ({ color, level }: { color: string, level: number }) => (
	<div className={colorCss} style={{
		color: `rgba(var(--gray${level > colorVariations / 2 ? 0 : 16}))`,
		background: `rgba(var(--${color}))`,
	}}>{level}</div>
);

const colorTester = (colors: string[]) => {
	const Tester = () => (
		<ThemeTester>
			<div className={colorsCss}>
				{
					colors.map((color) => (
						<Color key={color} color={color} level={Number(color.match(/\d+/))} />
					))
				}
			</div>
		</ThemeTester>
	);
	return Tester;
};

const levels = iota(colorVariations + 1);
const accentColors = levels.map((lightness) => `accent${lightness}`);
const grayColors = levels.map((lightness) => `gray${lightness}`);

export const Accent = colorTester(accentColors);
export const Gray = colorTester(grayColors);

export default {
	component: Color,
	decorators: [withKnobs],
};
