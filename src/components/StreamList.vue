<script setup lang="ts">
import StreamListItem from 'src/components/StreamListItem.vue';
import { db } from 'boot/firebase';
import {
  collection,
  getDocs,
  query,
  QueryDocumentSnapshot,
  DocumentData,
  where,
} from 'firebase/firestore';
import { onMounted, ref, defineProps, computed } from 'vue';

const props = defineProps<{
  tag: string;
}>();

const items = ref<QueryDocumentSnapshot<DocumentData>[]>([]);

const getData = async () => {
  let q;

  if (props.tag) {
    q = query(collection(db, 'streams'), where('tag', '==', props.tag));
  } else {
    q = query(collection(db, 'streams'));
  }

  const querySnapshot = await getDocs(q);
  items.value = querySnapshot.docs;
};

onMounted(() => getData());
</script>
<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3 q-pa-md" v-for="item in items" :key="item.id">
        <StreamListItem  :item="item" />
      </div>
    </div>
  </div>
</template>
