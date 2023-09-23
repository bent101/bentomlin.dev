<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<div
	class="fixed inset-x-0 top-4 z-50 mx-auto flex w-max rounded-full bg-sky-blue p-1 text-white backdrop-blur-md"
>
	<a
		aria-label="Ben's Linkedin"
		target="_blank"
		href="https://www.linkedin.com/in/ben-tomlin-46b788275/"
		class="h-10 w-10 rounded-full p-1 opacity-80 transition-all duration-200 hover:bg-white/10 hover:opacity-100 hover:scale-105"
	>
		<Icon class="h-full w-full" icon="mdi:linkedin" />
	</a>
	<a
		aria-label="Send Ben an email"
		target="_blank"
		href="mailto:btomlin@ucsd.edu"
		class="h-10 w-10 rounded-full p-1 opacity-80 transition-all duration-200 hover:bg-white/10 hover:opacity-100 hover:scale-105"
	>
		<Icon class="h-full w-full" icon="mdi:email" />
	</a>
	<a
		aria-label="Ben's GitHub"
		target="_blank"
		href="https://github.com/bent101"
		class="h-10 w-10 rounded-full p-1 opacity-80 transition-all duration-200 hover:bg-white/10 hover:opacity-100 hover:scale-105"
	>
		<Icon class="h-full w-full" icon="mdi:github" />
	</a>
</div>
