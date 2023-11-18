// See https://kit.svelte.dev/docs/types#app

import type { SupabaseClient } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			getSession: () => Promise<any>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
