<template>
  <div id="app">
    <AppHeader />
    <router-view class="content" />
    <AppFooter />
    <VisitorsDialog ref="dialog" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import VisitorsDialog from './components/VisitorsDialog.vue';

const dialog = ref();

const openModal = () => {
  if (dialog.value) {
    dialog.value.openModal();
  }
};

const openModalForEdit = (id: string) => {
  if (dialog.value) {
    dialog.value.openModalForEdit(id);
  }
};


provide('openModal', openModal);
provide('openModalForEdit', openModalForEdit);
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 82vh;
  align-items: flex-start;
}

.content {
  flex-grow: 1;
}

</style>
