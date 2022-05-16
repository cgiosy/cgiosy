import { css, lightTheme, darkTheme } from "../themes";
import { cls } from "../utils";

const testerCss = css({
	padding: "1.5em 1em",
	overflow: "scroll",
});

const ThemeTester = ({ children, className }: { children: React.ReactNode; className?: string }) => (
	<div>
		<div className={cls([lightTheme, testerCss, className])}>{children}</div>
		<div className={cls([darkTheme, testerCss, className])}>{children}</div>
	</div>
);

export default ThemeTester;
