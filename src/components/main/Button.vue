<template>
    <button
        class="btn btn"
        :disabled="disabled"
        v-on="$listeners"
        id="btn"
    >
        <slot/>
    </button>
</template>

<script setup>
    defineProps({
        disabled: Boolean,
    });
</script>

<style scoped>
    @import "src/components/main/styles/Button/component.scss";
</style>