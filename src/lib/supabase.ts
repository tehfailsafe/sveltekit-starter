import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { combineChunks, createBrowserClient, isBrowser, parse } from '@supabase/ssr';

export const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
	global: {
		fetch
	},
	cookies: {
		get(key) {
			if (!isBrowser()) {
				return;
			}

			const cookie = combineChunks(key, (name) => {
				const cookies = parse(document.cookie);
				return cookies[name];
			});
			return cookie;
		}
	}
});
