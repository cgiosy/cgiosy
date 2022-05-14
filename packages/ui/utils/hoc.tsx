export type PlainObject<T = unknown, K = unknown, V = unknown> = Record<K & (string | number | symbol), V> & T;
export type Component<Props> = keyof JSX.IntrinsicElements | React.FC<Props & PlainObject>;
export type HOCCallback<Props> = (props: PlainObject<Props>) => PlainObject;
export type HOCProps<Props> = PlainObject | HOCCallback<Props>;

export const hoc = <Props, >(C: Component<Props>, setProps: HOCProps<Props>) => (
	typeof C === "string"
		? (
			typeof setProps === "object"
				? (props: PlainObject<Props>) => <C {...props} {...setProps} />
				: (props: PlainObject<Props>) => <C {...props} {...setProps(props)} />
		)
		: (
			typeof setProps === "object"
				? (props: PlainObject<Props>) => C({
					...props,
					...setProps,
				})
				: (props: PlainObject<Props>) => C({
					...props,
					...setProps(props),
				})
		)
);
