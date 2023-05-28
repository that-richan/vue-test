<script lang="ts" setup>
defineProps<{
	heading: string;
}>();

defineEmits<{
	(e: 'clickOnParagraph', item: number): void;
}>();

const array = [2, 1, 5];
const range = 10;
const object = {
	foo: "bar",
	baz: "qux",
};
</script>

<template>
	<h2>{{ heading }}</h2>
	<p
		v-bind="$attrs"
		v-for="(item, index) in array"
		:key="item"
		:class="{
			[$attrs.class]: index === 0,
		}"
		@click="$emit('clickOnParagraph', item)"
	>
		{{ index + 1 }}. Paragraph about thing #{{ item }}
	</p>
	<code>
		{
		<template v-for="(key, value, index) in object" :key="key">
			{{ key }}: {{ value }}{{ index === Object.keys(object).length - 1 ? "" : ", " }}
		</template>
		}
	</code>
	<span v-for="(n, index) in range" :key="index">{{ n + " " }}</span>
</template>
