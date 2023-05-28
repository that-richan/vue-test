import type { Directive } from "vue";

export const focus: Directive<HTMLElement> = {
	mounted: (el, binding) => {
		el.focus({
			preventScroll: !binding.modifiers.scroll,
		});
	},
};
