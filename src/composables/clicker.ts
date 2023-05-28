import { ref } from "vue";
import { useEventListener } from "@/composables/event-listener";

export function useClicker() {
	const clicks = ref(0);

	function addClick(): void {
		clicks.value++;
	}

	useEventListener(window, "click", addClick);

	return { clicks, addClick };
}
