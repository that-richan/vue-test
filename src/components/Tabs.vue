<script lang="ts" setup>
import { type Component as VueComponent, ref } from "vue";
import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";
import TabTodo from "@/components/tabs/TabTodo.vue";

const tabs = ["tab1", "tab2", "tab3"] as const;
const currentTab = ref<typeof tabs[number]>(tabs[0]);
const tabbedComponents: Record<typeof tabs[number], VueComponent> = {
	tab1: Tab1,
	tab2: Tab2,
	tab3: TabTodo,
};
</script>

<template>
	<button v-for="tab in tabs" @click="currentTab = tab" :key="tab">
		{{ tab }}
	</button>

	<Transition name="tab-component" appear mode="out-in">
		<KeepAlive>
			<Component :is="tabbedComponents[currentTab]">
				<template #heading="{ message }">
					<h3>{{ message }}</h3>
				</template>
			</Component>
		</KeepAlive>
	</Transition>
</template>

<style lang="scss" scoped>
.tab-component-enter-active,
.tab-component-leave-active {
	transition: opacity .25s;
	position: absolute;
}

.tab-component-enter-from,
.tab-component-leave-to {
	opacity: 0;
}
</style>
