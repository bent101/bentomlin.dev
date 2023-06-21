<script lang="ts">
	import waves from "$lib/assets/waves.svg";
	import ben from "$lib/assets/ben.jpg";
	import bottomWave from "$lib/assets/bottom-wave.svg";
	import resume from "$lib/assets/resume.pdf";
	import Project from "../lib/components/Project.svelte";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let main: HTMLElement | undefined;
	let header: HTMLElement | undefined;
	let mainTop = 0;
	let mainHeight = Infinity;

	let scrollY = 0;
	let windowHeight = 0;
	$: scrollBottom = scrollY + windowHeight;
	$: scrolled = scrollBottom - mainTop;
	$: needToScroll = mainHeight;
	$: scrollProgress = Math.max(scrolled / needToScroll, 0);

	if (browser) {
		window.onresize = () => {
			const headerBox = header?.getBoundingClientRect();
			const mainBox = main?.getBoundingClientRect();
			mainTop = headerBox?.height ?? 0;
			mainHeight = mainBox?.height ?? Infinity;
		};
	}

	onMount(() => {
		window.dispatchEvent(new Event("resize"));
	});
</script>

<svelte:head>
	<title>Ben Tomlin</title>
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight={windowHeight} />

<header
	bind:this={header}
	class="pointer-events-none h-[max(500vh,356vw)] select-none bg-cover bg-center"
	style="background-image: url({waves})"
>
	{#if scrollY < mainTop || !browser}
		<div
			style="scale: {1 + Math.max(0, scrollY) / 30}"
			class="fixed inset-0 grid h-screen origin-[calc(50%-58px)_calc(50%-29.9px)] place-items-center bg-black font-extrabold uppercase tracking-wide text-white mix-blend-multiply"
		>
			<div class="mt-6 border-8 border-white p-4 text-center">
				<div class="text-[100px] leading-[60px]">Ben</div>
				<div class="text-[50px]">Tomlin</div>
				<div class="text-[22px] leading-[10px]">Web developer</div>
			</div>
		</div>
	{/if}
</header>

<main bind:this={main} class="p-4">
	<section class="mx-auto flex max-w-3xl flex-col gap-8 sm:flex-row">
		<div class="flex-1">
			<img
				src={ben}
				alt="a selfie"
				class="rounded-xl transition-all duration-300 rotate-2 hover:-rotate-1 hover:scale-105"
			/>
		</div>
		<div class="flex-1">
			<h2 class="font-serif text-5xl font-extrabold text-gray-300">
				Hi, I'm Ben!
			</h2>
			<p class="mt-4 text-lg font-semibold text-gray-500">
				I'm a Computer Science major at <b>UCSD</b>. I started exploring
				<b>web development</b>
				in November of 2022 and have been loving every second of it. Before that,
				I enjoyed learning about
				<b>data structures and algorithms</b>. And in high school, I was the
				lead developer of a
				<b>game</b> made over the course of 2 years.
			</p>
		</div>
	</section>

	<section class="p-4">
		<h2
			class="mx-auto mb-16 mt-[50vh] max-w-3xl font-serif text-5xl font-extrabold text-gray-300"
		>
			My skills
		</h2>

		<div
			class="mx-auto flex max-w-5xl flex-col items-stretch gap-4 lg:flex-row"
		>
			<div class="flex-1 rounded-3xl bg-[#131428] px-8 py-4">
				<h3 class="mb-4 text-2xl font-bold text-gray-400">I'm good at:</h3>
				<ul
					class="list-inside list-disc text-lg font-semibold text-gray-500 marker:text-gray-700"
				>
					<li>Svelte/SvelteKit</li>
					<li>Tailwind</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript/Typescript</li>
					<li>Python</li>
				</ul>
			</div>

			<div class="flex-1 rounded-3xl bg-[#131428] px-8 py-4">
				<h3 class="mb-4 text-2xl font-bold text-gray-400">I know:</h3>
				<ul
					class="list-inside list-disc text-lg font-semibold text-gray-500 marker:text-gray-700"
				>
					<li>Go, Java, C, C++</li>
					<li>Vanilla JS</li>
					<li>Git/Github</li>
					<li>Working with a team</li>
					<li>SQL</li>
					<li>R</li>
					<li>MATLAB</li>
					<li>Keras</li>
					<li>numpy/pandas/matplotlib</li>
				</ul>
			</div>

			<div class="flex-1 rounded-3xl bg-[#131428] px-8 py-4">
				<h3 class="mb-4 text-2xl font-bold text-gray-400">I'm learning:</h3>
				<ul
					class="list-inside list-disc text-lg font-semibold text-gray-500 marker:text-gray-700"
				>
					<li>React/Next</li>
					<li>Using databases</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="p-4">
		<h2
			class="mx-auto my-[50vh] max-w-3xl font-serif text-5xl font-extrabold text-gray-300"
		>
			My projects
		</h2>

		<Project iframeURL="https://mcsrrankedstats.vercel.app/DOOGILE/351573">
			<div slot="title">MCSR Ranked Stats</div>
			<div slot="date">March - present</div>

			<p>
				<a href="https://mcsrranked.com" target="_blank" rel="noreferrer"
					><abbr title="Minecraft Speedrunning">MCSR</abbr> Ranked</a
				>
				is a Minecraft mod that lets speedrunners race each other in the same seed,
				but on different worlds. The devs of the mod made a <b>public API</b>
				for the leaderboards, player stats, match timelines, and more, so I made
				this website.
				<br />
				<br />It received <b>100+</b> visitors and <b>1,200+</b> page views
				during <b>the day after</b> I told people about it.
				<br />
				<br />This is my proudest web dev project, so have a look around!
				<a
					href="https://github.com/bent101/mcsr-ranked-stats"
					target="_blank"
					rel="noreferrer"
					class="ml-4 inline-block opacity-50">Repo</a
				>
			</p>
		</Project>

		<Project iframeURL="https://ucsdcourses.vercel.app/CSE">
			<div slot="title">UCSD Courses</div>
			<div slot="date">January - March</div>

			<p>
				I thought this project would be an easy way to practice frontend: I
				would just scrape the UCSD course catalog with a bit of Python and make
				a better-looking one.
				<br />
				<br />I couldn't have been more wrong.
				<br />
				<br />The HTML structure (and the text content) of the UCSD course
				catalog is so messy and inconsistent, that the first month of the
				project was spent just on the scraping. It took over <b>500 lines</b> of
				Python (and some manual fixes) to parse, filter, and organize, and
				interlink the
				<b>6,888 courses</b> across <b>82 pages</b>.
				<br />
				<br />The result is 82 lists of <b>interlinked courses</b> that you can
				switch between and save links to.
				<br />
				<a
					href="https://github.com/bent101/ucsdcourses"
					target="_blank"
					rel="noreferrer"
					class="inline-block opacity-50">Site repo</a
				>
				<a
					href="https://github.com/bent101/ucsd-courses-scraping"
					target="_blank"
					rel="noreferrer"
					class="ml-4 inline-block opacity-50">Scraping repo</a
				>
			</p>
		</Project>

		<Project iframeURL="https://pigame.vercel.app">
			<div slot="title">Pi Game</div>
			<div slot="date">January</div>

			<p>
				I made this game that helps the player learn the digits of pi, and to
				help myself learn
				<b>SvelteKit</b> and <b>Tailwind</b>. I absolutely love this stack and
				have used it ever since, so you could say this project served its
				purpose!
				<a
					href="https://github.com/bent101/pi-game"
					target="_blank"
					rel="noreferrer"
					class="ml-4 inline-block opacity-50">Repo</a
				>
			</p>
		</Project>

		<Project iframeURL="https://studio-heart-engine.itch.io/joyspring">
			<div slot="title">Joyspring</div>
			<div slot="date">2020 - 2021</div>

			<p>
				I worked with a group of friends to make this platformer using
				<b><a href="https://godotengine.org/">Godot</a></b>, a free and
				open-source game engine. I also taught other people how to use Godot as
				the <b>vice-president</b> of the Game Dev club.
				<br />
				<br />It has over <b>50k</b> downloads with an <b>80%</b> positive
				review rate.
				<a
					href="https://github.com/studio-heart-engine/joyspring/tree/master"
					target="_blank"
					rel="noreferrer"
					class="ml-4 inline-block opacity-50">Repo</a
				>
			</p>
		</Project>
	</section>
</main>

<img src={bottomWave} alt="" class="w-full" />
<footer class="flex items-center justify-center gap-8 bg-[#131428] p-16">
	<a
		class="text-2xl text-gray-300"
		rel="noreferrer"
		target="_blank"
		href={resume}>Resume</a
	>
	<a
		class="text-2xl text-gray-300"
		rel="noreferrer"
		target="_blank"
		href="https://github.com/bent101">Github</a
	>
</footer>

<div
	style="width: {100 * scrollProgress}%"
	class="fixed inset-x-0 top-0 z-[9999] h-2 overflow-clip"
>
	<div class="h-full w-screen bg-gradient-to-r from-purple-700 to-orange-600" />
</div>

<style lang="postcss">
	img {
		user-select: none;
		pointer-events: none;
	}

	b {
		@apply text-gray-300;
	}

	a {
		@apply font-bold underline underline-offset-4;
	}
</style>
