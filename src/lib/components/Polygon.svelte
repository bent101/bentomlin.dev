<script lang="ts">
	import { colorToString } from "$lib/utils";

	export let points: [number, number][];
	export let fill: [number, number, number];

	$: minX = Math.min(...points.map((p) => p[0]));
	$: maxX = Math.max(...points.map((p) => p[0]));
	$: minY = Math.min(...points.map((p) => p[1]));
	$: maxY = Math.max(...points.map((p) => p[1]));

	$: width = maxX - minX;
	$: height = maxY - minY;
</script>

<svg {width} {height} viewBox="{minX} {minY} {width} {height}">
	<polygon
		fill={colorToString(fill)}
		points={points.map(([x, y]) => `${x},${y}`).join(" ")}
	/>
</svg>
