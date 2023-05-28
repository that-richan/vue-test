<script setup lang="ts">
import { computed, ref } from "vue";

const headingElement = ref<HTMLHeadingElement | null>(null);

export interface HeadingProps {
	heading: string;
}

const props = withDefaults(defineProps<HeadingProps>(), {
	heading: "",
});

const wrappedHeadingText = computed(() => `<i>${props.heading}</i>`);

defineExpose({
	headingElement,
});
</script>

<template>
	<h1 ref="headingElement">{{ heading }}</h1>
	<h2 v-html="wrappedHeadingText"></h2>
	<slot>Default content</slot>
</template>
