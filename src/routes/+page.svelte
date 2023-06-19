<script lang="ts">
	import waves from "$lib/images/waves.svg";
	import ben from "$lib/images/ben.jpg";
	import bottomWave from "$lib/images/bottom-wave.svg";
	import resume from "$lib/assets/resume.pdf";

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
	class="pointer-events-none h-[500vh] select-none bg-cover bg-center"
	style="background-image: url({waves})"
>
	<div
		style="scale: {1 + Math.max(0, scrollY) / 30}"
		class="fixed inset-0 grid h-screen place-items-center bg-black font-extrabold uppercase tracking-wide text-white mix-blend-multiply"
	>
		<div class="mt-6 border-8 border-white p-4 text-center">
			<div class="text-[100px] leading-[60px]">Ben</div>
			<div class="text-[50px]">Tomlin</div>
			<div class="text-[22px] leading-[10px]">Web developer</div>
		</div>
	</div>
</header>

<main class="p-4">
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

	<section class="mt-[30vh] p-8">
		<h2
			class="mx-auto mb-16 mt-64 max-w-3xl font-serif text-5xl font-extrabold text-gray-300"
		>
			My skills
		</h2>

		<div
			class="mx-auto mb-[30vh] flex max-w-5xl flex-col items-stretch gap-4 lg:flex-row"
		>
			<div class="flex-1 rounded-3xl bg-[#131428] px-8 py-4">
				<h3 class="mb-4 text-2xl font-bold text-gray-400">I'm "good" at:</h3>
				<ul
					class="list-inside list-disc text-lg font-semibold text-gray-500 marker:text-gray-700"
				>
					<li>Svelte/SvelteKit</li>
					<li>Tailwind</li>
					<li>HMTL</li>
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

	<section class="mt-16 p-8">
		<h2
			class="mx-auto mb-[70vh] mt-64 max-w-3xl font-serif text-5xl font-extrabold text-gray-300"
		>
			My projects
		</h2>

		<div class="relative flex flex-col gap-8 pb-[70vh] lg:flex-row">
			<div
				class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
			>
				<div
					class="top-0 h-full rounded-3xl bg-[#131428] p-4 transition-all duration-1000 hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
				>
					<div class="relative h-full">
						<iframe
							src="https://mcsrrankedstats.vercel.app/DOOGILE"
							title="MCSR Ranked Stats"
							frameborder="0"
							class="absolute -inset-1/2 h-[200%] w-[200%] scale-50"
						/>
					</div>
				</div>
			</div>
			<div class="flex-1 lg:my-[90vh]">
				<h2 class="font-serif text-5xl font-extrabold text-gray-300">
					MCSR Ranked Stats
				</h2>
				<div
					class="ml-auto block w-max font-serif text-xl font-bold text-gray-500"
				>
					March - present
				</div>
				<p class="mt-32 text-lg font-semibold text-gray-500">
					<a href="https://mcsrranked.com" target="_blank" rel="noreferrer"
						><abbr title="Minecraft Speedrunning">MCSR</abbr> Ranked</a
					>
					is a Minecraft mod that lets speedrunners race each other in the same seed,
					but on different worlds. The devs of the mod made a public API for the
					leaderboards, player stats, match timelines, and more, so I made this website.
					<br /><br />
					This is my proudest web dev project, so have a look around!
					<a
						href="https://github.com/bent101/mcsr-ranked-stats"
						target="_blank"
						rel="noreferrer"
						class="ml-4 inline-block opacity-40">Repo</a
					>
				</p>
			</div>
		</div>

		<div class="relative flex flex-col gap-8 pb-[70vh] lg:flex-row">
			<div
				class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
			>
				<div
					class="top-0 h-full rounded-3xl bg-[#131428] p-4 transition-all duration-1000 hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
				>
					<div class="relative h-full">
						<iframe
							src="https://ucsdcourses.vercel.app/CSE"
							title="UCSD Courses"
							frameborder="0"
							class="absolute -inset-1/2 h-[200%] w-[200%] scale-50"
						/>
					</div>
				</div>
			</div>
			<div class="flex-1 lg:my-[90vh]">
				<h2 class="font-serif text-5xl font-extrabold text-gray-300">
					UCSD Courses
				</h2>
				<div
					class="ml-auto block w-max font-serif text-xl font-bold text-gray-500"
				>
					January - March
				</div>
				<p class="mt-32 text-lg font-semibold text-gray-500">
					I thought this project would be an easy way to practice frontend: I
					would just scrape the UCSD course catalog with a bit of Python and
					make a better-looking one.
					<br />
					<br />I couldn't have been more wrong.
					<br />
					<br />The HTML structure (and the text content) of the UCSD course
					catalog is so messy and inconsistent, that first month of the project
					was spent just on the scraping. It took over <b>500 lines</b> of
					Python (and some manual formatting) to parse, filter, and organize the
					<b>6,888 courses</b> across <b>82 pages</b>.
					<br />
					<br />The result is 82 lists of interlinked courses that you can
					switch between and save links to.
					<a
						href="https://github.com/bent101/ucsdcourses"
						target="_blank"
						rel="noreferrer"
						class="ml-4 inline-block opacity-40">Site repo</a
					>
					<a
						href="https://github.com/bent101/ucsd-courses-scraping"
						target="_blank"
						rel="noreferrer"
						class="ml-4 inline-block opacity-40">Scraping repo</a
					>
				</p>
			</div>
		</div>

		<div class="relative flex flex-col gap-8 pb-[70vh] lg:flex-row">
			<div
				class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
			>
				<div
					class="top-0 h-full rounded-3xl bg-[#131428] p-4 transition-all duration-1000 hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
				>
					<div class="relative h-full">
						<iframe
							src="https://pigame.vercel.app"
							title="Pi Game"
							frameborder="0"
							class="absolute -inset-1/2 h-[200%] w-[200%] scale-50"
						/>
					</div>
				</div>
			</div>
			<div class="flex-1 lg:my-[90vh]">
				<h2 class="font-serif text-5xl font-extrabold text-gray-300">
					Pi Game
				</h2>
				<div
					class="ml-auto block w-max font-serif text-xl font-bold text-gray-500"
				>
					January
				</div>
				<p class="mt-32 text-lg font-semibold text-gray-500">
					I made this game that helps the player learn the digits of pi, and to
					help myself learn <b>SvelteKit</b> and <b>Tailwind</b>. I absolutely
					love this stack and have used it ever since, so you could say this
					project served its purpose!

					<a
						href="https://github.com/bent101/pi-game"
						target="_blank"
						rel="noreferrer"
						class="ml-4 inline-block opacity-40">Repo</a
					>
				</p>
			</div>
		</div>

		<div class="relative flex flex-col gap-8 pb-[70vh] lg:flex-row">
			<div
				class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
			>
				<div
					class="top-0 h-full rounded-3xl bg-[#131428] p-4 transition-all duration-1000 hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
				>
					<div class="relative h-full">
						<iframe
							src="https://store.steampowered.com/app/1532360/Joyspring/"
							title="Joyspring"
							frameborder="0"
							class="absolute -inset-1/2 h-[200%] w-[200%] scale-50"
						/>
					</div>
				</div>
			</div>
			<div class="flex-1 lg:my-[90vh]">
				<h2 class="font-serif text-5xl font-extrabold text-gray-300">
					Joyspring
				</h2>
				<div
					class="ml-auto block w-max font-serif text-xl font-bold text-gray-500"
				>
					2020 - 2021
				</div>
				<p class="mt-32 text-lg font-semibold text-gray-500">
					I worked with a group of friends to make this platformer using <b
						><a href="https://godotengine.org/">Godot</a></b
					>, a free and open-source game engine. I also taught other people how
					to use Godot as the <b>vice-president</b> of the Game Dev club.
					<br />
					<br />It has over <b>50k</b> downloads with an <b>80%</b> positive
					review rate.

					<a
						href="https://github.com/studio-heart-engine/joyspring/tree/master"
						target="_blank"
						rel="noreferrer"
						class="ml-4 inline-block opacity-40">Repo</a
					>
				</p>
			</div>
		</div>
	</section>

	<p class="p-16 text-center font-semibold text-gray-400">
		And last but not least, this site! It was made in a few hours and is still a
		work in progress.
	</p>
</main>

<img src={bottomWave} alt="" class="w-full" />
<footer class="flex items-center justify-center bg-[#131428] p-16">
	<a
		class="text-2xl text-gray-300"
		rel="noreferrer"
		target="_blank"
		href={resume}>Resume</a
	>
</footer>

<style lang="postcss">
	img {
		user-select: none;
	}

	b {
		@apply text-gray-300;
	}

	a {
		@apply font-bold underline underline-offset-4;
	}
</style>
