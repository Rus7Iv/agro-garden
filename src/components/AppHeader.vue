<template>
    <header class="header-container">
        <div class="logo-and-search">
            <Logo />
            <input placeholder="Поиск по имени" />
            <input placeholder="Поиск по компании" />
            <button>Добавить</button>
        </div>
        <div class="visitors">
        </div>
    </header>
</template>
<script setup lang="ts">
import Logo from '../assets/Logo.vue';

</script>
<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 130px;
  padding: 0 50px;
  margin: 0;
  z-index: 1000; 
  box-sizing: border-box;
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo-and-search {
    display: flex;
    gap: 40px;
    align-items: center;
}

.visitors {
    display: flex;
}

input, button {
    height: 52px;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px 0px #00000029;
    border: none;
    border-radius: 4px;
}

input {
    padding: 15px;
    font-size: 16px;
    width: 394px;
}

input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.7);
}

button {
    background-color: #4CAF50;
    text-align: center;
    color: white;
    font-size: 24px;
    width: 273px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

button:active {
    background-color: #3e8e41;
}
</style>
