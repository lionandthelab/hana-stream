<template>
  <div class="q-pa-md">
    <q-card class="my-card">
        <q-img
          :src="ThumbUrl"
          :ratio="16/9"
        />

      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-subtitle2">{{date}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThumbView',
  props: {

  },
});
</script>
