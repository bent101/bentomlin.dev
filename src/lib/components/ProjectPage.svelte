<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";

	export let title: string;
	export let subtitle: string;
	export let date: string;
	export let video: string;
	export let coverImage: string;
	export let siteUrl: string;
	export let githubUrl: string;
	export let wave: string;

	function exit() {
		goto("/", { noScroll: true, replaceState: true });
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") exit();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	on:click={() => exit()}
	on:keydown={handleKeydown}
	class="fixed inset-0 z-50 overflow-y-scroll overscroll-contain bg-black/80 px-4 py-20"
>
	<div
		on:click|stopPropagation
		on:keydown|stopPropagation={handleKeydown}
		class="mx-auto min-h-[101%] max-w-4xl rounded-3xl bg-navy p-8"
		style="view-transition-name: card"
	>
		<div class="relative">
			<video
				loop
				src={video}
				poster={coverImage}
				autofocus
				controls
				class="focus:outline-none"
				style="view-transition-name: cover"
			/>

			<div
				class="invisible absolute inset-x-0 top-full h-40 bg-cover bg-top"
				style="background-image: url({wave}); view-transition-name: wave"
			/>
		</div>

		<article class="mx-auto max-w-xl pt-4">
			<div class="flex items-center gap-4">
				<a href={siteUrl} target="_blank" class="group text-3xl text-white">
					<span
						class="inline-block cursor-pointer font-bold underline-offset-4 group-hover:underline"
						style="view-transition-name: title"
					>
						{title}
					</span>

					<Icon class="inline-block -translate-y-0.5" icon="mdi:open-in-new" />
				</a>

				<a
					href={githubUrl}
					target="_blank"
					class="rounded-full p-1 hover:bg-white/10"
				>
					<Icon icon="mdi:github" class="h-8 w-8 text-white" />
				</a>
				<div class="ml-auto text-right text-xl font-semibold text-white/40">
					{date}
				</div>
			</div>
			<h3
				class="pt-2 text-xl font-semibold leading-none text-white/60"
				style="view-transition-name: subtitle"
			>
				{subtitle}
			</h3>

			<div class="pt-6">
				<slot />
			</div>
		</article>
	</div>
</div>
