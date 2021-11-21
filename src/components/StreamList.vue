<script setup lang="ts">
import {} from 'vue';
import StreamListItem from 'src/components/StreamListItem.vue';
</script>
<template>
  <q-list>
    <StreamListItem v-for="i in 7" :key="i" />
  </q-list>
</template>
