<script setup lang="ts">
import StreamList from 'src/components/StreamList.vue';
import { defineProps } from 'vue'
// const tagList = [
//   'UCM',
//   'JoyWorship',
//   'HTS',
//   'SundayWorship',
//   'JoyCorner',
//   'Prayer',
//   'JoyTeen',
//   'JoyTree',
// ];
const props= defineProps<{
  id: string;
}>();
</script>
<template>
  <q-page padding>
    {{props.id}}
    <q-item>
      <StreamList 
      :tag="props.id" 
      :key="props.id" 
      />
    </q-item>
  </q-page>
</template>
