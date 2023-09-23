<script lang="ts">
	import { rand, range } from "$lib/utils";
	import Polygon from "./Polygon.svelte";

	export let width: number;
	export let height: number;
	export let numPoints: number;
	export let fill: [number, number, number];
	export let valleyness = 0;

	$: peaks = range(numPoints).map((i) => {
		const x = (i * width) / numPoints;
		const valleyHeight = Math.pow(x - width / 2, 2);
		return [x, rand(0, height) - (valleyHeight * valleyness) / 1000] as const;
	});

	$: points = [
		[0, height],
		...peaks,
		[width, peaks[0][1]], // seamless repeat
		[width, height],
	] as [number, number][];
</script>

<Polygon {points} {fill} />
