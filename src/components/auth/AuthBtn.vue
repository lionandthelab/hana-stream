<script setup lang="ts">
import {} from 'vue';
import { auth } from 'boot/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { firebaseUser, useAuth } from 'src/composables/useAuth';

useAuth();

const provider = new GoogleAuthProvider();
</script>
<template>
  <q-btn v-if="firebaseUser" round color="primary">
    <q-avatar size="26px" padding="xs">
      <img
        :src="
          firebaseUser.photoURL || 'https://cdn.quasar.dev/img/boy-avatar.png'
        "
      />
      <q-menu>
        <q-card>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-account"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>이름</q-item-label>
                <q-item-label caption>{{
                  firebaseUser.displayName
                }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-email"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>이메일</q-item-label>
                <q-item-label caption>{{ firebaseUser.email }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-card-actions align="right">
            <q-btn
              icon="mdi-logout"
              label="로그아웃"
              flat
              color="primary"
              @click="signOut(auth)"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-menu>
    </q-avatar>
  </q-btn>
  <q-btn v-else @click="signInWithPopup(auth, provider)" round color="primary">
    <q-avatar icon="mdi-login" size="26px" />
  </q-btn>
</template>
