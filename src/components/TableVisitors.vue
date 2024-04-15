<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Компания</th>
                    <th scope="col">Группа</th>
                    <th scope="col"></th>
                    <th scope="col">Присутствие</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, order, fullname, company, group, presence } in visitors" :key="id">
                    <td>{{ order }}</td>
                    <td @click="openModal">{{ fullname }}</td>
                    <td>{{ company }}</td>
                    <td>{{ group }}</td>
                    <td></td>
                    <td>
                        <PresenceIndicator :is-present="presence" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { useLoadVisitors } from '../firebase'
import PresenceIndicator from '../components/PresenceIndicator.vue'

const openModal = inject('openModal');

const visitors = useLoadVisitors()
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
