<script lang="ts">
	import Icon from "@iconify/svelte";

	export let href: string;
	export let icon: string;
	export let tooltip: string;
</script>

<div
	aria-label={tooltip}
	class="grourelative h-10 w-10 rounded-full p-1 transition-all duration-200 hocus-within:bg-white/10 hocus-within:scale-105"
>
	<a
		class="peer inset-0 rounded-full opacity-80 hocus:opacity-100"
		target="_blank"
		{href}
	>
		<Icon class="h-full w-full" {icon} />
	</a>
	<div
		class="pointer-events-none absolute -inset-x-96 top-full z-50 mx-auto mt-2 w-max origin-top rounded-md bg-white px-2 py-1 text-sm font-semibold text-navy opacity-0 transition-all duration-150 scale-[0.95] peer-hocus:opacity-100 peer-hocus:scale-100"
	>
		{tooltip}
	</div>
</div>
