import { isRef, type MaybeRef, ref, unref, watch } from "vue";

export function useFetch<T>(url: MaybeRef<string>) {
	const data = ref<T | null>(null);
	const error = ref<unknown>(null);
	const loading = ref(false);

	async function doFetch(resetData = true): Promise<void> {
		error.value = null;

		if (resetData) {
			data.value = null;
			loading.value = true;
		}

		try {
			const response = await fetch(unref(url));
			data.value = await response.json();
		} catch (err: unknown) {
			error.value = err;
		} finally {
			loading.value = false;
		}
	}

	if (isRef(url)) {
		watch(url, () => doFetch());
	} else {
		doFetch()
	}

	return {
		data,
		error,
		loading,
		doFetch,
	};
}
