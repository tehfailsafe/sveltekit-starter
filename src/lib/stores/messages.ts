import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

// const { data: messagesData, error } = await supabase.from('assistant_messages').select('*');
export let messages = writable([]);

// supabase
// 	.channel('assistant_messages')
// 	.on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
// 		if (payload.eventType === 'INSERT') {
// 			messages.update((messages) => [...messages!, payload.new]);
// 		}
// 		if (payload.eventType === 'UPDATE') {
// 			messages.update((messages) =>
// 				messages!.map((message) => (message.id === payload.new.id ? payload.new : message))
// 			);
// 		}
// 		if (payload.eventType === 'DELETE') {
// 			messages.update((messages) => messages!.filter((message) => message.id !== payload.old.id));
// 		}
// 	})
// 	.subscribe();
