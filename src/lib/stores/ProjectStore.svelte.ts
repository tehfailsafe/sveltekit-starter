import { supabase } from '$lib/supabase';
import { user } from '$lib/utils/user_id';

type Project = {
	id?: string;
	title: string;
	description?: string;
	api_routes: Route[];
};

type Route = {
	status: string;
	last_checked: string;
	url: string;
	status_text: string;
	response_time: string;
};

const ProjectStore = async () => {
	let projects: Project[] = $state([]);

	const { data } = await supabase.from('api_projects').select('*, api_routes(*)');
	if (data) {
		projects = data;
	}

	return {
		get projects() {
			return projects;
		},
		createProject: async () => {
			const newProject = {
				title: 'New Project',
				user_id: user!.id
			};
			projects = [...projects, { ...newProject, api_routes: [] }];

			const { data } = await supabase.from('api_projects').insert(newProject).select().single();
		}
	};
};

export const projectStore = await ProjectStore();
