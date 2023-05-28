<script lang="ts" setup>
import { nextTick, ref, watchEffect } from "vue";
import MultipleChildren from "@/components/MultipleChildren.vue";
import Heading from "@/components/Heading.vue";
import Tabs from "@/components/Tabs.vue";
import { useCounterStore } from "@/stores/counter";

const headingText = ref("Hello World!");
const buttonDisabled = ref(false);
const headingComponentElement = ref<InstanceType<typeof Heading> | null>(null);

const name = ref("");
const counterStore = useCounterStore();

counterStore.$subscribe((state) => {
	console.log("Counter store changed:", state);
});

counterStore.$onAction((action) => {
	console.log("Counter store action:", action);
});

watchEffect(() => {
	console.log("Name changed to", name.value);
});

function throwError(event: Event): void {
	console.log("Event which caused the error:", event);
	throw new Error("Not implemented yet");
}

function changeText(): void {
	headingText.value = window.prompt("Enter new text", headingText.value) ?? "";
	counterStore.increment();
	console.log("Right after edit:", headingComponentElement.value?.headingElement?.innerText);
	nextTick(() => {
		console.log("After next tick:", headingComponentElement.value?.headingElement?.innerText);
	});
}

function submitForm(event: Event) {
	console.log("Form submitted", event);
	if (event.target instanceof HTMLFormElement) {
		const formData = new FormData(event.target);
		console.log("Form data submitted:", formData);
		event.target.reset();
	}
}

</script>

<template>
	<Heading :heading="headingText" ref="headingComponentElement">
		Test
	</Heading>

	<div class="group">
		<button v-if="buttonDisabled" @click="throwError($event)">Throw an error</button>
		<button @click="changeText()">Change text</button>
		<p>Times changed text: {{ counterStore.count }}</p>
	</div>

	<div class="group">
		<button
			:disabled="buttonDisabled"
			:class="{
				'red': buttonDisabled,
			}"
		>
			Am I disabled?
		</button>
		<button @click="buttonDisabled = !buttonDisabled">Disable the button >:)</button>
	</div>

	<MultipleChildren
		heading="Multiple children test"
		:class="['red']"
		@click-on-paragraph="console.log('Clicked on paragraph', $event)"
	/>

	<form @submit.prevent="submitForm">
		<input
			v-focus.scroll
			type="text"
			name="name"
			placeholder="Name"
			v-model.lazy.trim="name"
		/>
		<button>Submit</button>
	</form>

	<Tabs></Tabs>
</template>

<style lang="scss">
.group {
	display: flex;
	padding: 1rem;
	gap: .5rem;
}

.red {
	background: red;
}

form {
	margin: 1rem;
}
</style>
