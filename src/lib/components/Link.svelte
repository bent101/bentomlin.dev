<script lang="ts">
	import Icon from "@iconify/svelte";

	export let href: string;
	export let icon: string;
	export let tooltip: string;
</script>

<a
	aria-label={tooltip}
	target="_blank"
	{href}
	class="group relative h-10 w-10 rounded-full p-1 opacity-80 transition-all duration-200 hover:bg-white/10 hover:opacity-100 hover:scale-105"
>
	<Icon class="h-full w-full" {icon} />
	<div
		class="pointer-events-none absolute -inset-x-96 top-full mx-auto mt-2 w-max origin-top rounded-md bg-white px-2 py-1 text-sm font-semibold text-navy opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 group-hover:scale-100"
	>
		{tooltip}
	</div>
</a>
