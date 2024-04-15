<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>Номер</th>
                    <th>ФИО</th>
                    <th>Компания</th>
                    <th>Группа</th>
                    <th></th>
                    <th>Присутствие</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="visitor in visitors" :key="visitor.id">
                    <td>{{ visitor.id }}</td>
                    <td @click="openModal">{{ visitor.name }}</td>
                    <td>{{ visitor.company }}</td>
                    <td>{{ visitor.group }}</td>
                    <td></td>
                    <td>
                        <PresenceIndicator :is-present="visitor.isPresent" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import PresenceIndicator from '../components/PresenceIndicator.vue'
import visitors from '../../database/visitors.json';

const openModal = inject('openModal');
</script>

<style scoped>
.table-container {
    display: flex;
    width: 100%;
    height: fit-content;
}

.table {
    width: 100%;
    border-spacing: 0;
}

thead {
    font-size: 20px;
    font-weight: 600;
}

th {
    text-align: left;
    border-bottom: 4px solid #E9E9E9;
}

td {
    font-size: 30px;
    padding: 15px 0;
}

td, th {
    padding-right: 20px;
    min-width: 100px;
}

td:last-child, th:last-child {
    text-align: center;
    justify-content: center;
    display: flex;
}
</style>
