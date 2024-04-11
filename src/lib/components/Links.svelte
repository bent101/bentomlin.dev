<script lang="ts">
	import Link from "./Link.svelte";
</script>

<div
	class="fixed inset-x-0 top-4 z-50 mx-auto flex w-max rounded-full bg-sky-blue p-1 text-white backdrop-blur-md"
>
	<Link
		href="https://www.linkedin.com/in/ben-tomlin-46b788275/"
		icon="mdi:linkedin"
		tooltip="View my Linkedin"
	/>
	<Link
		href="/ben-tomlin-resume.pdf"
		icon="mdi:resume"
		tooltip="View my resume"
	/>
	<Link
		href="mailto:btomlin@ucsd.edu"
		icon="mdi:email"
		tooltip="Email me (btomlin@ucsd.edu)"
	/>
	<Link
		href="https://github.com/bent101"
		icon="mdi:github"
		tooltip="Explore my GitHub"
	/>
</div>
