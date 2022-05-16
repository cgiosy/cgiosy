import { withKnobs } from "@storybook/addon-knobs";
import { css } from "../themes";

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
		color: `rgb(var(--gray${level > 50 ? 0 : 100}))`,
		background: `rgb(var(--${color}))`,
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

const accentColors = [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100].map((lightness) => `accent${lightness}`);
const grayColors = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 85, 90, 95, 100].map((lightness) => `gray${lightness}`);

export const Accent = colorTester(accentColors);
export const Gray = colorTester(grayColors);

export default {
	component: Color,
	decorators: [withKnobs],
};
