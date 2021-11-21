<script setup lang="ts">
import StreamListItem from 'src/components/StreamListItem.vue';
import { db } from 'boot/firebase';
import {
  collection,
  getDocs,
  query,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import { onMounted, ref } from 'vue';

const items = ref<QueryDocumentSnapshot<DocumentData>[]>([]);

const getData = async () => {
  const q = query(collection(db, 'streams'));

  const querySnapshot = await getDocs(q);
  items.value = querySnapshot.docs;
};

onMounted(() => getData());
</script>
<template>
  <q-list>
    <StreamListItem v-for="item in items" :key="item.id" :item="item" />
  </q-list>
</template>
