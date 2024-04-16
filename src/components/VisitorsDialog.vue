<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <button class="close" @click="closeModal">
        <CloseButton />
      </button>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>ФИО</label>
          <input v-model="form.fullname" class="form-control" required />
        </div>

        <div class="form-group mt-3">
          <label>Компания</label>
          <input v-model="form.company" class="form-control" required />
        </div>

        <div class="form-group mt-3">
          <label>Группа</label>
          <input v-model="form.group" class="form-control" required />
        </div>

        <div class="form-group mt-3">
          <label>Присутствие</label>
          <input v-model="form.presence" class="form-control" type="checkbox" />
        </div>

        <div class="modal-button-group">
          <button type="submit" class="btn btn-success mt-3">
            {{ isEditMode ? 'Редактировать' : 'Добавить' }}
          </button>
          <button>Закрыть</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createVisitor, getVisitor, updateVisitor } from '../firebase'
import { ref, defineExpose, reactive } from 'vue';
import CloseButton from '../assets/CloseButton.vue'

const isOpen = ref(false);
const isEditMode = ref(false);
const form = reactive({ id: '', fullname: '', company: '', group: '', presence: false })

const closeModal = () => {
  isOpen.value = false;
  isEditMode.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

const openModalForEdit = async (id: string) => {
  const visitor = await getVisitor(id);
  if (visitor) {
    form.id = id;
    form.fullname = visitor.fullname;
    form.company = visitor.company;
    form.group = visitor.group;
    form.presence = visitor.presence;
    isEditMode.value = true;
    openModal();
  }
};

defineExpose({ openModal, openModalForEdit });

const onSubmit = async () => {
  if (isEditMode.value) {
    await updateVisitor(form.id, { ...form });
    isEditMode.value = false;
  } else {
    await createVisitor({ ...form });
  }
  form.id = '';
  form.fullname = '';
  form.company = '';
  form.group = '';
  form.presence = false;
}

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

