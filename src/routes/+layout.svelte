<script>
	import "../app.postcss";

	import Hero from "$lib/components/Hero.svelte";
	import Links from "$lib/components/Links.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	import ben from "$lib/assets/selfie.webp";
	import blob1 from "$lib/assets/shapes/blob1.svg";
	import blob2 from "$lib/assets/shapes/blob2.svg";
	import ogImage from "$lib/assets/ogImage.png";

	import { onNavigate } from "$app/navigation";
	import { projects } from "$lib/projects";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let scrollY = 0;
</script>

<svelte:head>
	<title>Ben Tomlin</title>
	<meta property="og:title" content="Ben Tomlin" />
	<!-- <meta
		property="og:description"
		content="this is a really long og description with lots of words to fiill up more space so that maybe the image will be bigger maybe hopefully im just trying evreything and seeing what works"
	/> -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="747" />
	<meta property="og:image:height" content="449" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:type" content="website" />

	<meta name="darkreader-lock" />
</svelte:head>

<svelte:window bind:scrollY />

<Links />

<Hero />

<main class="relative space-y-48 overflow-x-clip bg-dark-navy px-4 py-32">
	<section
		class="mx-auto flex max-w-4xl flex-col gap-8 sm:flex-row sm:items-center"
	>
		<div class="relative h-80 w-80">
			<div
				style="background-image: url({blob1});
				transform: translateY({(scrollY - 400) / 8}px)"
				class="absolute -inset-24 bg-cover bg-center"
			/>
			<img
				src={ben}
				alt="a selfie"
				class="absolute inset-0 rounded-full grayscale transition-all duration-500 rotate-2 scale-95 hover:grayscale-0 hover:-rotate-1 hover:scale-100"
			/>
		</div>
		<div class="relative flex-1">
			<h2>Hi, I'm Ben!</h2>
			<p class="mt-4 text-lg/relaxed">
				I'm a 3rd year Computer Science major at <b>UC San Diego</b>. I started
				exploring <b>web development</b> in November of 2022 and have been
				loving every second of it. Before that, I enjoyed learning about
				<b>data structures and algorithms</b>. And in high school, I was the
				lead developer of a
				<b>video game</b> made over the course of 2 years.
			</p>
		</div>
	</section>

	<section class="relative pb-20">
		<div
			class="absolute inset-0 bg-center bg-no-repeat"
			style="background-image: url({blob2});
		transform: translateY({(scrollY - 1000) / 20}px)"
		/>

		<div class="relative">
			<h2 class="mx-auto mb-8 max-w-3xl">My skills</h2>

			<div
				class="mx-auto flex max-w-5xl flex-col items-stretch gap-4 md:flex-row"
			>
				<div
					class="flex-1 rounded-3xl border-4 border-navy bg-dark-navy px-8 py-8"
				>
					<h3 class="mb-4">I know:</h3>
					<ul
						class="list-inside list-disc space-y-1 text-lg font-semibold marker:text-neutral-800"
					>
						<li>HTML, CSS, JS</li>
						<li>Typescript</li>
						<li>React, Next.js (<code>/app</code> & <code>/pages</code>)</li>
						<li>Svelte, SvelteKit</li>
						<li>Tailwind</li>
						<li>Firebase (Firestore, Auth, Functions)</li>
						<li>SQL, noSQL, Data modeling</li>
						<li>Git, GitHub</li>
						<li>Python</li>
						<li>Figma</li>
					</ul>
				</div>

				<div
					class="flex-1 rounded-3xl border-4 border-navy bg-dark-navy px-8 py-8 md:translate-y-20"
				>
					<h3 class="mb-4">I'm familiar with:</h3>
					<ul
						class="list-inside list-disc space-y-1 text-lg font-semibold marker:text-neutral-800"
					>
						<li>Go</li>
						<li>Java</li>
						<li>C, C++</li>
						<li>numpy, pandas, matplotlib</li>
						<li>Keras</li>
						<li>R</li>
						<li>MATLAB</li>
						<li>Godot, GDScript</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2 class="mx-auto mb-16 max-w-3xl">My projects</h2>

		<div
			class="mx-auto grid max-w-md grid-flow-row grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-2"
		>
			{#each projects as { title, subtitle, slug, coverImage, wave }}
				<ProjectCard {title} {subtitle} {slug} {coverImage} {wave} />
			{/each}
		</div>
	</section>
</main>

<slot />

<style lang="postcss">
	h2 {
		@apply font-serif text-5xl font-extrabold text-neutral-200;
	}

	h3 {
		@apply text-2xl font-bold text-neutral-400;
	}

	p,
	li {
		@apply font-semibold text-neutral-500;
	}

	b {
		@apply font-bold text-neutral-200;
	}

	a {
		@apply font-bold underline underline-offset-4 hover:text-neutral-200;
	}

	code {
		@apply rounded-md bg-neutral-900 px-1 py-0.5 font-mono font-semibold text-neutral-500;
	}
</style>
