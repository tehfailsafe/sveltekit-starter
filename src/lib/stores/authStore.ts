// import { writable } from 'svelte/store';
// import { supabase } from '$lib/supabase';

// // Create a writable store
// const { data } = await supabase.auth.getSession();
// export const loading = writable(true);
// export const session = writable(data.session);

// export const signin = async () => {
// 	const { error } = await supabase.auth.signInWithOAuth({
// 		provider: 'google',
// 		options: {
// 			redirectTo: '/auth/callback'
// 		}
// 	});

// 	if (error) console.log(error);
// };

// export const signout = async () => {
// 	const { error } = await supabase.auth.signOut();
// 	if (error) console.log(error);
// };

// // Listen for changes in authentication state
// supabase.auth.onAuthStateChange((_event, authSession) => {
// 	console.log('AUTH STATE CHANGE', authSession);

// 	session.set(authSession || null);
// 	loading.set(false);
// });
