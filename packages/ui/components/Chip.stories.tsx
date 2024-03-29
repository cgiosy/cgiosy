import { withKnobs, text } from "@storybook/addon-knobs";
import { css } from "../themes";
import { Component, hoc } from "../utils";

import Chip, { ChipLink, IconChip } from "./Chip";
import ThemeTester from "./ThemeTester";

const label = () => text("Label", "Thumb Up");

const gap = css({ "&, & > *": { margin: "1em" } });

const tester = (C: Component<unknown>) => {
	const Tester = () => (
		<ThemeTester>
			{
				["", "enabled"].map((type) => (
					<div key={type} className={gap}>
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
const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/></svg>;

// eslint-disable-next-line max-len
const Close = () => <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>;

const ChipTester = hoc(Chip, () => ({
	leading: <Icon />,
	children: label(),
}));
const ClosableChipTester = hoc(Chip, () => ({
	leading: <Icon />,
	children: label(),
	trailing: <Close />,
}));
const LinkTester = hoc(ChipLink, () => ({ children: label() }));
const ClosableLinkTester = hoc(ChipLink, () => ({
	children: label(),
	trailing: <Close />,
}));
const IconChipTester = hoc(IconChip, () => ({ children: <Icon /> }));

export const Chips = tester(ChipTester);
export const ClosableChips = tester(ClosableChipTester);
export const Links = tester(LinkTester);
export const ClosableChipLinks = tester(ClosableLinkTester);
export const IconChips = tester(IconChipTester);

export default {
	component: Chip,
	subcomponents: {
		ChipLink,
		IconChip,
	},
	decorators: [withKnobs],
};
