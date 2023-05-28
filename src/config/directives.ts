import type { App } from "vue";
import { focus } from "@/directives/focus";

export function setupDirectives(app: App<Element>): void {
	app.directive("focus", focus);
}
