<script lang="ts">
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/' },
        { label: 'Our Works', href: '/' }
    ];
</script>

<nav class="sticky top-0 z-10 container flex justify-between items-center h-24 mx-auto text-white font-geist">
    <a href="/">
        <img src="/logo.svg" alt="Logo Random.ly Studio" class="invert" />
    </a>
    <ul class="flex gap-6 text-lg text-center">
        {#each navLinks as { label, href }}
            <li>
                <a {href} class="inline-block w-24 hover:font-bold transition-all">{label}</a>
            </li>
        {/each}
    </ul>
    <div>
        <button
            type="button"
            class="px-4 py-2 hover:bg-white/10 border border-white rounded-full transition-all"
        >
            Contact Us
        </button>
    </div>
</nav>
