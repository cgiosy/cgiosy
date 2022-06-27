import { css, lightTheme, darkTheme } from "../themes";
import { cls } from "../utils";

const testerCss = css({
	padding: "$$24dp $$16dp",
	overflow: "scroll",
});

const lightColorTheme = css({ $background: "$accent95" });
const darkColorTheme = css({ $background: "$accent100" });
// eslint-disable-next-line max-len
const otakuBgTheme1 = css({
	backgroundImage: "url(https://i.ibb.co/2t8cvDj/e693b23498941db24e3b663a982c43d1.jpg)",
	backgroundPosition: "35% 80%",
});
// eslint-disable-next-line max-len
const otakuBgTheme2 = css({
	backgroundImage: "url(https://i.ibb.co/8KyrFZm/3a185324680fd45c730748a4eef26bee.jpg)",
	backgroundPosition: "35% 50%",
});

const ThemeTester = ({ children, className }: { children: React.ReactNode; className?: string }) => (
	<div>
		<div className={cls([lightTheme, testerCss, className])}>{children}</div>
		<div className={cls([darkTheme, testerCss, className])}>{children}</div>
		<div className={cls([lightTheme, lightColorTheme, testerCss, className])}>{children}</div>
		<div className={cls([darkTheme, darkColorTheme, testerCss, className])}>{children}</div>
		<div className={cls([lightTheme, otakuBgTheme1, testerCss, className])}>{children}</div>
		<div className={cls([darkTheme, otakuBgTheme2, testerCss, className])}>{children}</div>
	</div>
);

export default ThemeTester;
