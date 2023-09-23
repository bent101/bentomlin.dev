<script lang="ts">
	import ProjectPage from "$lib/components/ProjectPage.svelte";
	import type { Project } from "$lib/projects";

	export let data: Project;
</script>

<ProjectPage
	title={data.title}
	subtitle={data.subtitle}
	date={data.date}
	video={data.video}
	coverImage={data.coverImage}
	siteUrl={data.siteUrl}
	githubUrl={data.githubUrl}
	wave={data.wave}
>
	<div class="prose">
		{@html data.description}
	</div>
</ProjectPage>
