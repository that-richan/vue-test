import { onMounted, onUnmounted } from "vue";

export function useEventListener(target: EventTarget, event: string, calllback: EventListener): void {
	onMounted(() => target.addEventListener(event, calllback));
	onUnmounted(() => target.removeEventListener(event, calllback));
}
