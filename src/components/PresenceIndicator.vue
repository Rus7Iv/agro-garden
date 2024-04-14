<template>
    <div class="presence-indicator" v-if="isPresent" />
    <div class="absence-indicator" v-else />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { isPresent } = defineProps({
  isPresent: Boolean,
});
</script>

<style scoped>
.presence-indicator {
    width: 59px;
    height: 59px;
    background-color: #80BB00;
    border-radius: 50%;
}

.absence-indicator {
    width: 59px;
    height: 59px;
    background-color: #EC5937;
    border-radius: 50%;
}
</style>