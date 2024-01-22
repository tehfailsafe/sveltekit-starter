import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

// const { data: messagesData, error } = await supabase.from('assistant_messages').select('*');
export let messages = writable([]);
