import { styled } from "./index";

const storiesRegexp = /(.*\/)?(.+?)\.stories\.tsx$/;

const modules = (import.meta as any).glob("./*.stories.tsx");
const moduleNames = Object.keys(modules).map((path) => path.match(storiesRegexp)![2]);

const asdf = styled.div``;

const Stories = () => <b>{
	JSON.stringify(moduleNames)
}</b>;

export default Stories;
