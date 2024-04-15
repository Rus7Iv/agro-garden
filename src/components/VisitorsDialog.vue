<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">×</span>
      <p>Здесь ваш контент</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

defineExpose({ openModal });

</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(2px);
}

.modal-content {
  background-color: #FFFFFF;
  border-radius: 30px;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

