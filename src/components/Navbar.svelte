<script lang='ts'>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/' },
        { label: 'Our Works', href: '/' }
    ];

    let isScrolling = $state(false);
    let isMenuOpened = $state(false);
    let viewportHeight = $state(0);

    function handleScroll() {
        isScrolling = window.scrollY > 50;
    }

    function onclick() {
        isMenuOpened = !isMenuOpened;
    }

    function updateViewportHeight() {
        viewportHeight = window.innerHeight;
    }

    onMount(() => {
        handleScroll();
        updateViewportHeight();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateViewportHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateViewportHeight);
        }
    });
</script>

<div class='z-10 fixed top-0 w-full transition-all { isScrolling ? `bg-white` : `bg-transparent` }'>
    <div class='container mx-auto'>
        <nav class='flex md:justify-between items-center gap-6 w-full h-16 md:h-24 mx-auto max-w-[90%] font-geist { isScrolling ? `text-black` : `text-white` }'>
            <button aria-label='Open menu' { onclick } class="md:hidden relative grid lg:hidden { isMenuOpened && 'menu-toggle' }">
                <div class='w-7 h-[0.15rem] rounded-full transition-all duration-500 before:absolute before:inset-x-0 before:w-7 before:h-[0.15rem] before:rounded-full before:-translate-y-2 before:transition-all before:duration-500 after:absolute after:inset-x-0 after:w-7 after:h-[0.15rem] after:rounded-full after:translate-y-2 after:transition-all after:duration-500 { isScrolling ? `bg-black before:bg-black after:bg-black` : `bg-white before:bg-white after:bg-white` }'></div>
            </button>
            <a href='/'>
                <img src='/logo.svg' alt='Logo Random.ly Studio' class='w-auto h-12 md:h-auto { isScrolling ? `` : `invert` }' />
            </a>
            <ul class='hidden md:flex gap-6 text-lg text-center'>
                {#each navLinks as { label, href }}
                    <li>
                        <a {href} class='inline-block w-24 hover:font-bold transition-all'>{label}</a>
                    </li>
                {/each}
            </ul>
            <div>
                <button type='button' class='hidden md:block px-4 py-2 border rounded-full transition-all { isScrolling ? `border-black hover:bg-black/10` : `border-white hover:bg-white/10` }'>Contact Us</button>
            </div>
        </nav>
    </div>
</div>

{#if isMenuOpened}
    <div transition:fly={{ y: -viewportHeight, duration: 500 }} class='z-20 fixed inset-0 bg-white'>
        <nav class='relative flex flex-col gap-4 w-full h-full max-w-[90%] mx-auto text-black font-geist'>
            <div class='flex justify-between items-center h-16'>
                <a href='/'>
                    <img src='/logo.svg' alt='Logo Random.ly Studio' class='w-auto h-12' />
                </a>
                <button aria-label='Open menu' { onclick } class="relative grid lg:hidden { isMenuOpened && 'menu-toggle' }">
                    <div class='w-7 h-[0.15rem] bg-black rounded-full transition-all duration-500 before:absolute before:inset-x-0 before:w-7 before:h-[0.15rem] before:bg-black before:rounded-full before:-translate-y-2 before:transition-all before:duration-500 after:absolute after:inset-x-0 after:w-7 after:h-[0.15rem] after:bg-black after:rounded-full after:translate-y-2 after:transition-all after:duration-500'></div>
                </button>
            </div>
            <ul class='flex flex-col gap-4 text-lg'>
                {#each navLinks as { label, href }}
                    <li>
                        <a {href} class='inline-block w-full px-4 py-1 rounded-xl focus:bg-black/10 transition-all duration-500'>{label}</a>
                    </li>
                {/each}
            </ul>
            <button type='button' class='absolute inset-x-0 bottom-10 px-4 py-2 hover:bg-black/10 border border-black rounded-full transition-all duration-500'>Contact Us</button>
        </nav>
    </div>
{/if}
