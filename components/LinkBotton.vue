<template>
    <a :href="href" target="_blank" class="font-bold focusable rounded-md p-3 shadow-inner transition text-zinc-100">
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