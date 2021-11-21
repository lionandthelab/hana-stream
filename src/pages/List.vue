<script setup lang="ts">
import StreamList from 'src/components/StreamList.vue';

const tagList = [
  'UCM',
  'JoyWorship',
  'HTS',
  'SundayWorship',
  'JoyCorner',
  'Prayer',
  'JoyTeen',
  'JoyTree',
];
</script>
<template>
  <q-page padding>
    <q-item>
      ALL
      <StreamList :tag="tag" />
    </q-item>
    <q-item v-for="tag in tagList" :key="tag">
      {{ tag }}
      <StreamList :tag="tag" />
    </q-item>
  </q-page>
</template>
