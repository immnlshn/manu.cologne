<template>
    <div class="w-full flex flex-col">
        <div class="flex items-center">
            <Icon :name="icon" size="1.75rem"/>
            <p class="font-bold">
                {{ name  }}
            </p>
        </div>
        <div class="w-full bg-zinc-300 rounded-full h-2.5 dark:bg-zinc-700 transition-colors">
            <div class="bg-green-600 dark:bg-green-400 h-2.5 rounded-full transition-colors" :style="{'width': progress+'%'}"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        progress: {
            type: Number,
            required: true
        }
    },  
}
</script>