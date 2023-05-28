import type { App } from "vue";

export function setupErrorHandler(app: App<Element>): void {
	app.config.errorHandler = (err, instance, info) => {
		console.error("Oops! An error occurred!", err);
		console.error("Error vm:", instance);
		console.error("Error info:", info);

		window.alert("Sorry, an error happened.");
	};
}
