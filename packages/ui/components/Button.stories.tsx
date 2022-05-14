import { withKnobs, number, text } from "@storybook/addon-knobs";
import { css } from "../themes";
import { cls, Component, hoc, PlainObject } from "../utils";

import Button, { ButtonLink, IconButton } from "./Button";
import ThemeTester from "./ThemeTester";

const label = () => text("Label", "Button");
const fontSize = () => number("Font size", 16);

const large = (props: PlainObject) => ({ className: cls([props.className, "large"]) });

const gap = css({
	margin: "1em",
	"& > *": { margin: "1em" },
});

const tester = (C: Component<{ className: string; }>) => {
	const Tester = () => (
		<ThemeTester>
			{
				["", "outlined", "filled", "filled-tonal"].map((type) => (
					<div key={type} className={gap} style={{ fontSize: `${fontSize()}px` }}>
						<C className={type} />
						<C className={type} disabled={true} />
					</div>
				))
			}
		</ThemeTester>
	);
	return Tester;
};

// eslint-disable-next-line max-len
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"/></g></svg>;

const ButtonTester = hoc(Button, () => ({ children: <><DownloadIcon /> {label()}</> }));
const LinkTester = hoc(ButtonLink, () => ({ children: label() }));
const IconButtonTester = hoc(IconButton, () => ({ children: <DownloadIcon /> }));

export const Buttons = tester(ButtonTester);
export const LargeButtons = tester(hoc(ButtonTester, large));
export const Links = tester(LinkTester);
export const LargeLinks = tester(hoc(LinkTester, large));
export const IconButtons = tester(IconButtonTester);

export default {
	component: Button,
	subcomponents: { ButtonLink },
	decorators: [withKnobs],
};
