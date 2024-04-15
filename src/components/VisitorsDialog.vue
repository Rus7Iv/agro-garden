<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <button class="close" @click="closeModal">
        <CloseButton />
      </button>
      <div class="modal-form">
        <div class="modal-form--row">
          <span>ФИО</span>
          <input />
        </div>
        <div class="modal-form--row">
          <span>Компания</span>
          <input />
        </div>
        <div class="modal-form--row">
          <span>Группа</span>
          <input />
        </div>
        <div class="modal-form--row">
          <span>Присутствие</span>
          <input type="checkbox" />
        </div>
        
        <div class="modal-button-group">
          <button>Добавить</button>
          <button>Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';
import CloseButton from '../assets/CloseButton.vue'

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
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #FFFFFF;
  border-radius: 30px;
  margin: 0;
  padding: 66px 20px;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
}

.close {
  display: flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 30vw;
}

.modal-form--row {
  display: flex;
  justify-content: space-between;
}

.modal-button-group {
  display: flex;
  gap: 34px;
}
</style>

