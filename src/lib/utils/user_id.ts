import { supabase } from '$lib/supabase';

const { data: sessionData } = await supabase.auth.getSession();
export const user = sessionData.session?.user;
