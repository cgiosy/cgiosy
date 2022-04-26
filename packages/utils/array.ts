export const iota = (n: number, x = 0): number[] => {
	const arr = new Array(n);
	for (let i = 0; i < n; i++) arr[i] = x + i;
	return arr;
};

export const iotaf = <T>(n: number, gen: (i: number) => T): T[] => {
	const arr = new Array(n);
	for (let i = 0; i < n; i++) arr[i] = gen(i);
	return arr;
};
