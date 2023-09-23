import { projects } from "$lib/projects.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const project = projects.find(
		(project) => project.slug === params.projectSlug
	);

	if (!project) {
		throw error(404, { message: `Project ${params.projectSlug} not found` });
	}

	return project;
}
