<script lang="ts">
	export let iframeURL: string;
</script>

<div class="relative flex flex-col gap-8 pb-[70vh] lg:flex-row">
	<div
		class="h-screen py-16 perspective-1000 transform-style-3d lg:sticky lg:bottom-0 lg:top-0 lg:flex-[2]"
	>
		<div
			class="top-0 h-full rounded-3xl bg-[#131428] p-4 transition-all duration-1000 hover:translate-x-0 hover:translate-z-[1px] hover:rotate-x-0 hover:rotate-y-0 lg:translate-z-[200px] lg:rotate-x-3 lg:rotate-y-[24deg]"
		>
			<div class="relative h-full">
				<iframe
					src={iframeURL}
					title=""
					frameborder="0"
					class="absolute -inset-1/2 h-[200%] w-[200%] scale-50"
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
