import minesweeperCover from "$lib/assets/minesweeper.webp";
import minesweeperVideo from "$lib/assets/minesweeper.mp4";
import donequickCover from "$lib/assets/donequick.webp";
import donequickVideo from "$lib/assets/donequick.mp4";
import mcsrrankedstatsCover from "$lib/assets/mcsrrankedstats.webp";
import mcsrrankedstatsVideo from "$lib/assets/mcsrrankedstats.mp4";
import ucsdcoursesCover from "$lib/assets/ucsdcourses.webp";
import ucsdcoursesVideo from "$lib/assets/ucsdcourses.mp4";
import joyspringCover from "$lib/assets/joyspring.webp";
import joyspringVideo from "$lib/assets/joyspring.webm";
import wave1 from "$lib/assets/shapes/wave1.svg";
import wave2 from "$lib/assets/shapes/wave2.svg";
import wave3 from "$lib/assets/shapes/wave3.svg";
import wave4 from "$lib/assets/shapes/wave4.svg";

const waves = [wave1, wave2, wave3, wave4];

const projectsData = [
	{
		title: "Minesweeper",
		subtitle: "A Minesweeper clone made to learn React and Next.js",
		coverImage: minesweeperCover,
		video: minesweeperVideo,
		siteUrl: "https://minesweeper-bent101.vercel.app",
		githubUrl: "https://github.com/bent101/minesweeper",
		date: "September 2023",
		description: `
            I believe games are the ultimate challenge in state management. So, to get familiar with React,
            I made a Minesweeper clone. It times you and keeps track of your personal best.
        `,
	},
	{
		title: "donequick",
		subtitle: "A keyboard-friendly shareable lists app",
		coverImage: donequickCover,
		video: donequickVideo,
		siteUrl: "https://donequick.vercel.app",
		githubUrl: "https://github.com/bent101/donequick",
		date: "August - September 2023",
		description: `
            This is a realtime shareable lists app made with SvelteKit and Firebase. It aims to be
            intuitive, keyboard friendly, and minimalistic. I used Firestore, Auth, and Security Rules to
            allow for fast and secure list sharing.
        `,
	},
	{
		title: "MCSR Ranked Stats",
		subtitle: "A stats viewer for Minecraft speedrunners",
		coverImage: mcsrrankedstatsCover,
		video: mcsrrankedstatsVideo,
		siteUrl: "https://mcsrrankedstats.vercel.app",
		githubUrl: "https://github.com/bent101/mcsr-ranked-stats",
		date: "March - June 2023",
		description: `
	    <a href="https://mcsrranked.com" target="_blank" rel="noreferrer">
	        Minecraft Speedrunning (MCSR) Ranked
	    </a>
	    is a Minecraft mod that lets speedrunners race each other in the same seed,
	    but on different worlds. The devs of the mod made a <b>public API</b>
	    for the leaderboards, player stats, match timelines, and more, so I made
	    this website to help players understand and compare their stats.
	    <br />
	    <br />It gets <b>400+</b> MAUs and <b>3,000+</b> page views per month.
	    <br />
	    <br />This is my proudest web dev project, so have a look around!
	    <br /><br />
	`,
	},
	{
		title: "UCSD Courses",
		subtitle: "A resdesign of UC San Diego's course catalog",
		coverImage: ucsdcoursesCover,
		video: ucsdcoursesVideo,
		siteUrl: "https://ucsdcourses.vercel.app",
		githubUrl: "https://github.com/bent101/ucsdcourses",
		date: "January - March 2023",
		description: `
	        I thought this project would be an easy way to practice frontend: I
	        would just scrape the <a target="_blank" href="https://catalog.ucsd.edu/front/courses.html">UCSD course catalog</a> with a bit of Python and make
	        a better-looking one.
	        <br />
	        <br />I couldn't have been more wrong.
	        <br />
	        <br />The HTML structure (and the text content) of the UCSD course
	        catalog is so messy and inconsistent, that the first month of the
	        project was spent just on the scraping. It took over <b>500 lines</b> of
	        Python (and some manual fixes) to parse, filter, organize, and interlink
	        the
	        <b>6,888 courses</b> across <b>82 pages</b>.
	        <br />
	        <br />The result is 82 lists of <b>interlinked courses</b> that you can
	        switch between and save links to.
	        <br /><br />
	        <a
	            href="https://github.com/bent101/ucsd-courses-scraping"
	            target="_blank"
	            class="text-white/30">Scraping repo</a
	        >
	    `,
	},
	{
		title: "Joyspring",
		subtitle: "A challenging platformer with a creative twist",
		coverImage: joyspringCover,
		video: joyspringVideo,
		siteUrl: "https://store.steampowered.com/app/1532360/Joyspring/",
		githubUrl: "https://github.com/studio-heart-engine/joyspring/tree/master",
		date: "2020 - 2021",
		description: `
        <p>
            I worked with a group of friends to make this platformer using
            <b><a href="https://godotengine.org/">Godot</a></b>, a free and
            open-source game engine. I also taught other people how to use Godot as
            the <b>vice-president</b> of the Game Dev club.
            <br />
            <br />Our game has <b>100+</b> positive reviews and <b>50k+</b>
            downloads! From a complex player state machine to custom scarf physics
            to <b>50+</b> unique levels, this game was a very fun challenge.
        </p>
        `,
	},
];

export const projects = projectsData.map((project, i) => ({
	...project,
	slug: project.title.replaceAll(" ", "-").toLowerCase(),
	wave: waves[i % waves.length],
}));

export type Project = (typeof projects)[number];
