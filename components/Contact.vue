<template>
    <div class="min-h-screen flex flex-col gap-3 items-center justify-center p-6">
        <h2 class="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-950 dark:from-white dark:to-gray-400">Contact me</h2>
        <p class="sm:w-1/2 md:w-1/3 text-center">Feel free to hit me up on social media or write me an email. I'd love to hear from you and we bring your ideas to life! </p>
        <div class="flex flex-col items-center justify-start gap-5">
            <div class="flex text-4xl items-center gap-5">
                <a href="https://instagram.com/immnl.shn" target="_blank">
                    <Icon name="uil:instagram" size="4rem" class="hover:text-red-500 dark:hover:text-red-400 focusable
                        rounded-md bg-transparent p-1.5 transition hover:bg-zinc-500/10
                        dark:hover:bg-zinc-400/20"/>
                </a>
                <a href="https://discord.com/users/299225879039442944" target="_blank">
                    <Icon name="bi:discord" size="4rem" class="hover:text-blue-400 dark:hover:text-blue-500 focusable
                        rounded-md bg-transparent p-1.5 transition hover:bg-zinc-500/10
                        dark:hover:bg-zinc-400/20"/>
                </a>
                <a href="https://github.com/immnlshn" target="_blank">
                    <Icon name="uil:github" size="4rem" class="hover:text-gray-500 dark:hover:text-gray-600 focusable
                        rounded-md bg-transparent p-1.5 transition hover:bg-zinc-500/10
                        dark:hover:bg-zinc-400/20"/>
                </a>
            </div>
            <div class="flex flex-col items-center">
                <p>Or just write me an Email:</p>
                <a href="mailto:me@manu.cologne" class="font-bold text-green-600 dark:text-green-400 tracking-wider hover:underline">me@manu.cologne</a>
            </div>
        </div>
    </div>
</template>