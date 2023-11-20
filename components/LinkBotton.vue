<template>
    <a :href="href" target="_blank" class="font-bold focusable rounded-md flex items-center gap-1 h-12 p-2 shadow-inner transition text-zinc-100">
        <slot/>
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        }
    }
}
</script>