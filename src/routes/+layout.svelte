<script lang='ts'>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { Gradient } from '$lib/gradient';
    import '../app.css';

    let { children } = $props();

    const gradient = new Gradient();

    onMount(() => {
        if (browser) {
            gradient.initGradient('#gradient-canvas');
        }
    });
</script>

{@render children()}
