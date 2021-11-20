<script setup lang="ts">
import {} from 'vue';
import { firebaseUser, isSigned } from 'src/composables/useAuth';
</script>
<template>
  <q-page padding>
    <q-card
      v-if="isSigned && firebaseUser?.email === 'raccoon.olive.829@example.com'"
    >
      관리자 페이지
    </q-card>
    <q-card v-else> 권한이 없습니다. </q-card>
  </q-page>
</template>
