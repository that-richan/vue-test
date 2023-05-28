import { ref } from "vue";
import { useEventListener } from "@/composables/event-listener";

export function useClicker(target = window) {
	const clicks = ref(0);

	function addClick(): void {
		clicks.value++;
	}

	useEventListener(target, "click", addClick);

	return { clicks, addClick };
}
