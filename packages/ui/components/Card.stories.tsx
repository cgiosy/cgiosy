import { withKnobs, text } from "@storybook/addon-knobs";
import { css } from "../themes";
import { Component, hoc, styled } from "../utils";

import Card from "./Card";
import ThemeTester from "./ThemeTester";

const title = () => text("Title", "Hello");
const content = () => text("Content", "Lorem ipsum dolor sit amet, consectetur adipiscing elit");

const gap = css({ "&, & > *": { margin: "1em" } });

const tester = (C: Component<unknown>) => {
	const Tester = () => (
		<ThemeTester className={gap}>
			<C />
			<C className="filled" />
		</ThemeTester>
	);
	return Tester;
};

const CardTester = hoc(Card, () => ({ children: <><h2>{title()}</h2>{content()}</> }));
const PressableCardTester = hoc(styled(Card, "pressable"), () => ({ children: <><h2>{title()}</h2>{content()}</> }));

export const Cards = tester(CardTester);
export const PressableCards = tester(PressableCardTester);

export default {
	component: Card,
	decorators: [withKnobs],
};
