<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="stream in streams" :key="stream.id" @click="increment">
        {{ stream.id }} - {{ stream.title }} {{ stream.url }} -
        {{ stream.thumbnailUrl }}
      </li>
    </ul>
    <p>Meta(props example): {{ meta.totalCount }}</p>
    <p>Clicks(local ref example): {{ clickCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Stream } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayStream(streams: Ref<Stream[]>) {
  const streamCount = computed(() => streams.value.length);
  return { streamCount };
}

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    streams: {
      type: Array as PropType<Stream[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
  },
  setup(props) {
    return { ...useClickCount(), ...useDisplayStream(toRef(props, 'streams')) };
  },
});
</script>
