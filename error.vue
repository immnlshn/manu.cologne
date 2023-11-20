<template>
    <NuxtLayout>
        <main class="relative overflow-hidden">
            <div class="absolute h-[200px] w-[400px] top-0 left-0 right-0 -z-1 mx-auto -translate-y-24
                rounded-full content-[''] bg-gradient-radial from-red-400 via-orange-500 to-transparent blur-2xl
              dark:from-red-600 dark:via-orange-700 dark:to-transparent"></div>
            <div class="absolute h-[200px] w-[200px] top-0 left-0 right-0 -z-1 mx-auto translate-x-60 -translate-y-36
                rounded-full content-[''] bg-gradient-radial from-violet-400 via-orange-500 to-transparent blur-2xl
              dark:from-violet-600 dark:via-orange-700 dark:to-transparent"></div>
            <div class="absolute h-[200px] w-[200px] top-0 left-0 right-0 -z-1 mx-auto -translate-x-36 -translate-y-44
                rounded-full content-[''] bg-gradient-radial from-purple-400 via-orange-500 to-transparent blur-2xl
              dark:from-purple-600 dark:via-orange-700 dark:to-transparent"></div>
            
            <div class="min-h-screen flex flex-col justify-center items-center gap-4 p-6">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent
                    bg-gradient-to-r from-red-500 to-red-600">
                    {{ `Error ${error.statusCode}` }}
                </h1>
                <p class="md:w-1/2 text-center text-xl italic">
                    {{ error.message }}
                </p>
                <NuxtLink to="/" class="text-xl font-bold text-green-900 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 focusable rounded-md bg-transparent 
                p-1.5 transition hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20">Back to  <Icon name="uil:home-alt" size="1.75rem"/></NuxtLink>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        }
    },  
}
</script>