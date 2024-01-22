export const ssr = false;
export const load = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
