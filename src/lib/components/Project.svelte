<script lang="ts">
	export let iframeURL: string;

	const frameZoom = 0.7;
</script>

<div class="relative mb-[90vh] flex flex-col gap-8 lg:flex-row">
	<div
		class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
	>
		<div
			class="relative top-0 h-full rounded-3xl bg-gradient-to-br from-purple-700 to-orange-600 p-4 text-xl font-semibold text-white/60 transition-all duration-1000 transform-style-3d hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
		>
			<div class="absolute inset-0 grid animate-pulse place-items-center">
				Loading site preview...
			</div>
			<div class="relative h-full overflow-clip rounded-2xl translate-z-[20px]">
				<iframe
					src={iframeURL}
					title=""
					loading="lazy"
					frameborder="0"
					style="
                        position: absolute;
                        inset: -{50 / frameZoom - 50}%;
                        scale: {frameZoom};
                        width: {100 / frameZoom}%;
                        height: {100 / frameZoom}%;
                    "
				/>
			</div>
		</div>
	</div>
	<div class="flex-1 lg:my-[90vh]">
		<h2 class="font-serif text-5xl font-extrabold text-gray-300">
			<slot name="title" />
		</h2>

		<div class="ml-auto block w-max font-serif text-xl font-bold text-gray-500">
			<slot name="date" />
		</div>

		<p class="mt-32 text-lg font-semibold text-gray-500">
			<slot />
		</p>
	</div>
</div>
