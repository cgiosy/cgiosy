const globalObj = global ?? window ?? this;
const globalCache = {} as any;
(globalObj as any).__unsafe_global_cache__ = globalCache;

const makeGlobal = <T>(key: string, defaultValue: T): T => {
	if (key in globalCache) return globalCache[key];
	return (globalCache[key] = defaultValue);
};

export default makeGlobal;
