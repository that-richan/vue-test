<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const AsyncComponent = defineAsyncComponent({
	loader: () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.5) {
					reject(new Error("Failed to load component!"));
				}
				resolve(import("@/components/AsyncComponent.vue"));
			}, 1000);
		});
	},
	loadingComponent: {
		template: "<p>Loading...</p>",
	},
	errorComponent: {
		template: "<p>Error!</p>",
	},
});
</script>

<template>
	<div>
		<slot name="heading" message="Heading for second tab!!"></slot>
		<p>Tab 2</p>
		<AsyncComponent />
	</div>
</template>
