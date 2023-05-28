import { type App, readonly, ref } from "vue";
import { appConfigKey } from "@/config/inject-keys";

export interface TestAppConfig {
	name: string;
}

export function setupAppProviders(app: App<Element>): void {
	const appConfig = ref<TestAppConfig>({
		name: "Vite App",
	});

	app.provide(appConfigKey, readonly(appConfig));
}
