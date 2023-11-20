<template>
    <nav class="fixed top-0 w-full z-10 p-5 flex flex-row justify-between items-center">
        <div class="flex text-2xl font-semibold items-center">
            <NuxtLink to="/" class="hover:text-green-600 dark:hover:text-green-400 focusable rounded-md bg-transparent 
                p-1.5 transition hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20">@immnlshn</NuxtLink>
            <p class=" text-gray-600 dark:text-gray-400">{{ route.path }}</p>
        </div>
        <div class="flex-grow"></div>
        <button @click="changeTheme" class="flex justify-center items-center focusable rounded-md bg-transparent p-1.5 transition
         hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20">
            <Icon v-if="this.color.value === 'light'" class="text-gray-500" name="uil:moon" size="2rem"/>
            <Icon v-if="this.color.value === 'dark'" class="text-yellow-300" name="uil:sun" size="2rem"/>
        </button>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            color: useColorMode(),
            route: useRoute()
        }
    },
    methods: {
        changeTheme() {
            this.color.preference = this.color.value === 'light' ? 'dark' : 'light'
        }
    },
}
</script>