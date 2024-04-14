<template>
    <table class="table-container">
        <thead>
            <tr>
                <th>Номер</th>
                <th>ФИО</th>
                <th>Компания</th>
                <th>Группа</th>
                <th>Присутствие</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Зубенко Михаил Петрович</td>
                <td>ООО "АСОЛЬ"</td>
                <td>Партнёр</td>
                <td>Присутствует</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
</script>
<style scoped>
.table-container {
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
}

td, th {
    padding-right: 20px;
    min-width: 100px;
}

td:last-child, th:last-child {
    text-align: center;
}
</style>