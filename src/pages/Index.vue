<template>
  <q-page class="row items-center justify-evenly">
    <DatePicker />
    <!-- <stream-component
      title="Stream component"
      active
      :streams="streams"
      :meta="meta"
    ></stream-component> -->
      <StreamList 
      :tag="ALL" 
      />

  </q-page>
</template>

<script lang="ts">
import { Stream, Meta } from 'components/models';
//import StreamComponent from 'components/Stream.vue';
import DatePicker from 'components/DatePicker.vue';
import StreamList from 'src/components/StreamList.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {  DatePicker, StreamList},
  setup() {
    const streams = ref<Stream[]>([
      {
        id: 0,
        title: '변화의 삶',
        url: 'https://www.youtube.com/embed/Em2d7N_KV2A?rel=0',
        tag: 'HTS',
        preacher: '이석만 목사님',
        thumbnailUrl: 'https://img.youtube.com/vi/Em2d7N_KV2A/mqdefault.jpg',
        date: '2021-10-01',
      },
      {
        id: 1,
        title: '주일설교',
        url: 'https://www.youtube.com/embed/G8WzLLI0Wl4?rel=0',
        tag: 'SundayWorship',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/G8WzLLI0Wl4/mqdefault.jpg',
        date: '2021-10-31',
      },
      {
        id: 2,
        title: '주일설교',
        url: 'https://www.youtube.com/embed/zKbFMkl5CNw?rel=0',
        tag: 'SundayWorship',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/zKbFMkl5CNw/mqdefault.jpg',
        date: '2021-10-24',
      },
      {
        id: 3,
        title: '주일설교',
        url: 'https://www.youtube.com/embed/oMFRqGqeQqk?rel=0',
        tag: 'SundayWorship',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/oMFRqGqeQqk/mqdefault.jpg',
        date: '2021-11-07',
      },
      {
        id: 4,
        title: 'UCM_하나님 아버지',
        url: 'https://www.youtube.com/embed/39qGDU_RDzU?rel=0',
        tag: 'UCM',
        preacher: '이석만 목사님',
        thumbnailUrl: 'https://img.youtube.com/vi/39qGDU_RDzU/mqdefault.jpg',
        date: '2021-11-06',
      },
      {
        id: 5,
        title: '조이랜드 찬양예배',
        url: 'https://www.youtube.com/embed/5560OlbBstw?rel=0',
        tag: 'JoyWorship',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/5560OlbBstw/mqdefault.jpg',
        date: '2021-11-07',
      },
      {
        id: 6,
        title: '조이트리 설교',
        url: 'https://www.youtube.com/embed/oiM53wYOzHg?rel=0',
        tag: 'JoyTree',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/oiM53wYOzHg/mqdefault.jpg',
        date: '2021-11-07',
      },
      {
        id: 7,
        title: '조이틴 설교',
        url: 'https://www.youtube.com/embed/v5wlK1H4rKE?rel=0',
        tag: 'JoyTeen',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/v5wlK1H4rKE/mqdefault.jpg',
        date: '2021-10-31',
      },
      {
        id: 8,
        title: '조이코너 설교',
        url: 'https://www.youtube.com/embed/WIExrz-ESPI?rel=0',
        tag: 'JoyCorner',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/WIExrz-ESPI/mqdefault.jpg',
        date: '2021-11-07',
      },
      {
        id: 9,
        title: '조이틴 설교',
        url: 'https://www.youtube.com/embed/Y1aeX5tyy14?rel=0',
        tag: 'JoyTeen',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/Y1aeX5tyy14/mqdefault.jpg',
        date: '2021-11-07',
      },
      {
        id: 10,
        title: '금요철야기도회',
        url: 'https://www.youtube.com/embed/X85QZJBSqMc?rel=0',
        tag: 'Prayer',
        preacher: '임성일 선교사님',
        thumbnailUrl: 'https://img.youtube.com/vi/X85QZJBSqMc/mqdefault.jpg',
        date: '2021-11-19',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { streams, meta };
  },
});
</script>
