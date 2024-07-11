<script>
	import Header from '$lib/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
</script>

<ModeWatcher />
<Header />


<slot/>
