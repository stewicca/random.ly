<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    const textList = ['Studio', 'Awesome Design'];

    let currentIndex = 0;
    let currentText = textList[currentIndex];

    let textWrapper: HTMLSpanElement;
    let textHeight: number;

    onMount(() => {
        if (textWrapper) {
            textHeight = textWrapper.getBoundingClientRect().height;
        }

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % textList.length;
            currentText = textList[currentIndex];
        }, 3000);

        return () => clearInterval(interval);
    });
</script>

<div class='relative flex flex-col justify-center gap-12 lg:gap-4 2xl:gap-6 max-w-[80%] min-h-screen mx-auto text-white font-geist'>
    <div class='flex flex-col gap-6'>
        <h2 class='text-xl md:text-3xl 2xl:text-4xl md:tracking-widest'>Prepare to be Amazed by</h2>
        <h1 class='flex flex-col gap-3 text-3xl md:text-7xl 2xl:text-8xl font-bold'>
            <span>Random.ly</span>
            <span class='relative block h-[1em]' bind:this={textWrapper}>
				{#key currentText}
					<span class='absolute inset-0' in:fly={{ y: textHeight, duration: 500 }} out:fly={{ y: -textHeight, duration: 500 }}>
						{currentText}
					</span>
				{/key}
			</span>
        </h1>
    </div>
    <div class='flex justify-between items-center'>
        <button class='relative group flex items-center gap-2 px-4 md:px-0 py-1 md:py-0 md:pr-4 md:text-lg 2xl:text-2xl border md:border-0 rounded-full'>
            <div class='hidden md:block absolute w-12 2xl:w-14 group-hover:w-full h-12 2xl:h-14 border-2 rounded-full transition-all'></div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class='hidden md:block w-12 2xl:w-14 h-auto group-hover:scale-y-[-1] transition-all'>
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            LET'S DISCUSS
        </button>
        <pre class='hidden lg:block text-[#F4F4F2]/70 text-end'>
            Creating Designs That Stand Out
            and Weave Your Story
            With Every Detail That's Found
            and Cherished in Memory
        </pre>
    </div>
    <div class='absolute inset-x-0 bottom-20 flex justify-center items-center gap-2 text-[#F4F4F2]/40 text-sm md:text-lg lg:text-xl'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class='w-6 md:w-8 h-auto animate-bounce'>
            <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>There's Good Stuff Below</span>
    </div>
</div>

<div class='min-h-screen'></div>
