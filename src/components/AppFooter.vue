<template>
    <footer class="footer-container">
        <span class="filtered-span">Фильтровать по:</span>
        <button>Отсутсвующим</button>
        <button>Присутствующим</button>
        <button>Без фильра</button>
    </footer>
</template>

<script setup lang="ts">
</script>
<style scoped>
.footer-container {
    display: flex;
    gap: 40px
}

.filtered-span {
    font-size: 30px;
    font-weight: 700;
}

button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
}
</style>