<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import StreamComponent from "./Stream.vue"

const props = defineProps<{
  item: QueryDocumentSnapshot<DocumentData>;
}>();

const stream = computed(() => props.item.data());
</script>
<template>
  <q-item> {{ stream }} </q-item> 
</template>
