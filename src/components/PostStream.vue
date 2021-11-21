<script setup lang="ts">
import { ref } from 'vue';
import { isSigned, firebaseUser } from 'src/composables/useAuth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';

const title = ref('');
const vid = ref('');
const messenger = ref('');
const kind = ref('');
const date = ref(new Date());
const clear = () => {
  title.value = '';
  vid.value = '';
  messenger.value = '';
  kind.value = '';
  date.value = new Date();
};
const onSubmit = async () => {
  // const docRef = await addDoc(collection(db, 'streams'), {
  //   title: title.value,
  //   url: `https://www.youtube.com/embed/${vid.value}?rel=0`,
  //   tag: kind.value,
  //   messenger: messenger.value,
  //   thumbnailUrl: `https://img.youtube.com/vi/${vid.value}/mqdefault.jpg`,
  //   date: date.value,
  // });
  // console.log('Document written with ID: ', docRef.id);

  await setDoc(doc(db, 'streams', vid.value), {
    title: title.value,
    url: `https://www.youtube.com/embed/${vid.value}?rel=0`,
    tag: kind.value,
    messenger: messenger.value,
    thumbnailUrl: `https://img.youtube.com/vi/${vid.value}/mqdefault.jpg`,
    date: date.value.toString(),
  });
  clear();
};
const onReset = () => {
  clear();
};
const existenceCheckRule = (val: string) =>
  (val && val.length > 0) || '입력란이 비었습니다';
</script>
<template>
  <q-card
    v-if="isSigned && firebaseUser?.email === 'raccoon.olive.829@example.com'"
  >
    관리자 페이지
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-card-section>
        <q-input
          filled
          v-model="title"
          label="제목"
          hint="제목을 입력하세요"
          lazy-rules
          :rules="[existenceCheckRule]"
        />

        <q-input
          filled
          v-model="vid"
          label="비디오 ID"
          hint="내용을 입력하세요"
          lazy-rules
          :rules="[existenceCheckRule]"
        />

        <q-input
          filled
          v-model="kind"
          label="분류"
          hint="내용을 입력하세요"
          lazy-rules
          :rules="[existenceCheckRule]"
        />

        <q-input
          filled
          v-model="messenger"
          label="메신저"
          hint="내용을 입력하세요"
          lazy-rules
          :rules="[existenceCheckRule]"
        />

        <q-date v-model="date" minimal />
      </q-card-section>

      <q-card-actions>
        <q-space />
        <q-btn label="등록" type="submit" color="primary" />
        <q-btn
          label="초기화"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </q-card-actions>
    </q-form>
  </q-card>
  <q-card v-else> 권한이 없습니다. </q-card>
</template>
