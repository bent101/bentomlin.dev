<script lang="ts">
	import BenTomlinBox from "$lib/components/BenTomlinBox.svelte";
	import Mountain from "$lib/components/Mountain.svelte";
	import { END_COLOR, START_COLOR } from "$lib/constants";
	import { colorToString, getLerpedColors, lerp, lerpColors } from "$lib/utils";

	const POINTS_PER_LAYER = 10;
	const NUM_LAYERS = 16;
	const SPREAD = 30;
	const MOUNTAIN_HEIGHT = 120;
	const SKY_HEIGHT = 350;
	const SKY_START_COLOR = [235, 50, 40] as [number, number, number];
	const SKY_END_COLOR = [235, 50, 0] as [number, number, number];

	$: colors = getLerpedColors(START_COLOR, END_COLOR, NUM_LAYERS);
	$: heroIndex = Math.floor(colors.length / 2);
	$: totalHeight = NUM_LAYERS * SPREAD + SKY_HEIGHT;

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-- {#if scrollY <= totalHeight} -->
<div
	class:invisible={scrollY > totalHeight}
	class="sticky inset-x-0 top-0 -z-50"
	style:height="{SKY_HEIGHT}px"
	style:background-color={colorToString(
		lerpColors(
			SKY_START_COLOR,
			SKY_END_COLOR,
			Math.min(scrollY / totalHeight, 1)
		)
	)}
/>

<div class="flex flex-col items-center overflow-x-clip">
	{#each colors as color, i}
		{@const closeness = (i + 1) / NUM_LAYERS}
		<div
			style:width="2000px"
			style:height="{SPREAD}px"
			style:background-color={colorToString(color)}
			style:transform="translateY({lerp(scrollY, 0, closeness)}px)"
			class="relative"
		>
			<div class="absolute inset-x-0 bottom-[99%]">
				{#if i === heroIndex}
					<div class="-mb-12">
						<BenTomlinBox />
					</div>
				{/if}

				<Mountain
					width={2000}
					height={MOUNTAIN_HEIGHT}
					numPoints={POINTS_PER_LAYER}
					fill={color}
					valleyness={Math.pow(closeness, 4) / 2}
				/>
			</div>
		</div>
	{/each}
</div>
<!-- {:else}
	<div style:height={`${totalHeight}px`} />
{/if} -->
