import { withKnobs, text } from "@storybook/addon-knobs";
import { css } from "../themes";
import { Component, hoc } from "../utils";
import { IconButton } from "./Button";

import TextField from "./TextField";
import ThemeTester from "./ThemeTester";

const label = () => text("Label", "Email");

const gap = css({ "&, & > *": { margin: "1em" } });

const tester = (C: Component<unknown>) => {
	const Tester = () => (
		<ThemeTester className={gap}>
			<C />
			<C className="error" />
			<C disabled={true} />
		</ThemeTester>
	);
	return Tester;
};

// eslint-disable-next-line max-len
const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M39.8 42.3 26.55 29.1q-1.45 1.25-3.45 1.95t-4.25.7q-5.5 0-9.325-3.8-3.825-3.8-3.825-9.2 0-5.4 3.825-9.2 3.825-3.8 9.225-3.8 5.4 0 9.2 3.8 3.8 3.8 3.8 9.2 0 2.15-.7 4.15-.7 2-2.05 3.75L42.3 39.8Zm-21-13.95q3.95 0 6.725-2.825Q28.3 22.7 28.3 18.75t-2.775-6.775Q22.75 9.15 18.8 9.15q-4.05 0-6.85 2.825t-2.8 6.775q0 3.95 2.8 6.775t6.85 2.825Z"/></svg>;
// eslint-disable-next-line max-len
const Cancel = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>;

const TextFieldTester = hoc(TextField, () => ({ children: <>{label()}</> }));
const IconTextFieldTester = hoc(TextField, () => ({
	children: <>{label()}</>,
	leading: <Icon />,
	trailing: <IconButton><Cancel /></IconButton>,
}));

export const TextFields = tester(TextFieldTester);
export const IconTextFields = tester(IconTextFieldTester);

export default {
	component: TextField,
	decorators: [withKnobs],
};
