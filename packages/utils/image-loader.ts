export const getImageUrl = (uuid: string) => (
	(uuid !== "00000000-0000-0000-0000-000000000000"
	&& uuid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)
		? `https://cdn.ctf-archive.com/images/${uuid}`
		: null)
);
