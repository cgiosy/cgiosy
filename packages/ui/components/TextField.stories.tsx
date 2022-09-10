import { withKnobs, text } from "@storybook/addon-knobs";
import { css } from "../themes";
import { Component, hoc } from "../utils";

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
const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="24" width="24"><path d="M39.8 42.3 26.55 29.1q-1.45 1.25-3.45 1.95t-4.25.7q-5.5 0-9.325-3.8-3.825-3.8-3.825-9.2 0-5.4 3.825-9.2 3.825-3.8 9.225-3.8 5.4 0 9.2 3.8 3.8 3.8 3.8 9.2 0 2.15-.7 4.15-.7 2-2.05 3.75L42.3 39.8Zm-21-13.95q3.95 0 6.725-2.825Q28.3 22.7 28.3 18.75t-2.775-6.775Q22.75 9.15 18.8 9.15q-4.05 0-6.85 2.825t-2.8 6.775q0 3.95 2.8 6.775t6.85 2.825Z"/></svg>;

const TextFieldTester = hoc(TextField, () => ({ children: <>{label()}</> }));
const IconTextFieldTester = hoc(TextField, () => ({
	children: <>{label()}</>,
	leading: <Icon />,
}));

export const TextFields = tester(TextFieldTester);
export const IconTextFields = tester(IconTextFieldTester);

export default {
	component: TextField,
	decorators: [withKnobs],
};
