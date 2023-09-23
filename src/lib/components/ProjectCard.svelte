<script lang="ts">
	import { afterNavigate, beforeNavigate, onNavigate } from "$app/navigation";
	import { page } from "$app/stores";

	export let coverImage: string;
	export let title: string;
	export let subtitle: string;
	export let slug: string;
	export let wave: string;

	$: opened = $page.url.pathname === `/${slug}`;
	let hasVtn = false;

	beforeNavigate(({ to }) => {
		if (to?.url.pathname === `/${slug}`) {
			hasVtn = true;
		}
	});

	afterNavigate(({ from }) => {
		if (from?.url.pathname === `/${slug}`) {
			hasVtn = true;
			setTimeout(() => (hasVtn = false), 0);
		} else {
			hasVtn = false;
		}
	});
</script>

<a
	data-sveltekit-noscroll
	data-sveltekit-replacestate
	href="/{slug}"
	class:invisible={opened}
	class="group relative cursor-pointer overflow-clip rounded-3xl bg-navy"
	style="view-transition-name: {hasVtn ? 'card' : 'none'}"
>
	<img
		src={coverImage}
		alt=""
		loading="lazy"
		class="aspect-video w-full rounded-t-3xl object-cover transition-transform duration-200 group-hover:scale-105 group-active:scale-100"
		style="view-transition-name: {hasVtn ? 'cover' : 'none'}"
	/>
	<div class="relative space-y-2 bg-navy p-8 pt-0">
		<div
			class="absolute inset-x-0 bottom-full h-20 bg-cover bg-top"
			style="background-image: url({wave}); view-transition-name: {hasVtn
				? 'wave'
				: 'none'}"
		/>
		<h3
			class="relative w-max text-2xl font-bold text-white"
			style="view-transition-name: {hasVtn ? 'title' : 'none'}"
		>
			{title}
			<div
				class="absolute inset-x-0 top-full mx-auto h-0.5 w-1/2 bg-white opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
			/>
		</h3>
		<p
			class="font-semibold leading-none text-white/60"
			style="view-transition-name: {hasVtn ? 'subtitle' : 'none'}"
		>
			{subtitle}
		</p>
	</div>

	{#if slug === "mcsr-ranked-stats"}
		<div
			class="absolute right-4 top-4 rounded-full bg-purple-500 px-1 text-xs font-bold uppercase text-black/90"
		>
			My favorite
		</div>
	{/if}
</a>
