<script lang="ts">
	let count = 0;
</script>

<h1>Alper Reha Blog</h1>

<p>Count: {count}</p>
<button on:click={() => (count -= 1)}>Decrement</button>
<button on:click={() => (count += 1)}>Increment</button>
