<script lang="ts" setup>
import { useFetch } from "@/composables/fetch";
import { computed } from "vue";

interface Todo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

const { data, error, loading, doFetch } = useFetch<{ todos: Todo[] }>("https://dummyjson.com/todos");
const todos = computed<Todo[]>(() => data.value?.todos ?? []);

function shuffleArray<T>(array: T): T {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
</script>

<template>
	<div>
		<button @click="doFetch(false)">Refetch data</button>
		<div v-if="!loading">
			<ul v-if="!error">
				<TransitionGroup name="todo-list">
					<li v-for="todo in shuffleArray(todos)" :key="todo.id">
						{{ todo.todo }}
					</li>
				</TransitionGroup>
			</ul>
			<code v-else>Failed to load todo</code>
		</div>
		<div v-else>
			<p>Loading data for TODO...</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.todo-list-move {
	transition: transform .5s ease;
}
</style>
