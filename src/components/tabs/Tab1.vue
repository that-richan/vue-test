<script lang="ts" setup>
import { inject, ref } from "vue";
import type { TestAppConfig } from "@/config/providers";
import { appConfigKey } from "@/config/inject-keys";
import { useClicker } from "@/composables/clicker";

const appConfig = inject(appConfigKey, ref<TestAppConfig>({ name: "Default" }));
const { clicks } = useClicker();
</script>

<template>
	<div>
		<h3>App name is: {{ appConfig.name }}</h3>
		<p>Tab 1</p>
		<p>Clicks: {{ clicks }}</p>
	</div>
</template>
