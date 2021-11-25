<script setup lang="ts">
import { ref } from 'vue';
import {
  fasVideo,
  fasGrinStars,
  fasGuitar,
  fasBookmark,
} from '@quasar/extras/fontawesome-v5';
import AuthBtn from 'components/auth/AuthBtn.vue';

const leftDrawerOpen = ref(false);
const search = ref('');
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const links1 = [{ icon: 'home', text: '홈', url: '/' }];
const links2 = [
  { icon: fasVideo, text: '주일 예배', url: '/list/SundayWorship' },
  { icon: 'local_movies', text: 'UCM 예배', url: '/list/UCM' },
  { icon: 'watch_later', text: 'HTS 성경공부', url: '/list/HTS' },
  { icon: fasGuitar, text: '금요 기도회', url: '/list/Prayer' },
];
const links3 = [
  { icon: fasGuitar, text: '조이랜드 찬양예배', url: '/list/JoyWorship' },
  { icon: 'local_movies', text: '조이코너/드림 설교', url: '/list/JoyCorner' },
  { icon: fasBookmark, text: '조이트리 설교', url: '/list/JoyTree' },
  { icon: fasGrinStars, text: '조이틴 설교', url: '/list/JoyTeen' },
];
// const links4 = [
//   { icon: 'settings', text: 'Settings' },
//   { icon: 'flag', text: 'Report history' },
//   { icon: 'help', text: 'Help' },
//   { icon: 'feedback', text: 'Send feedback' },
// ];
// const buttons1 = [
//   { text: 'About' },
//   { text: 'Press' },
//   { text: 'Copyright' },
//   { text: 'Contact us' },
//   { text: 'Creators' },
//   { text: 'Advertise' },
//   { text: 'Developers' },
// ];
// const buttons2 = [
//   { text: 'Terms' },
//   { text: 'Privacy' },
//   { text: 'Policy & Safety' },
//   { text: 'Test new features' },
// ];
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <router-link to="/" style="text-decoration: none; color: inherit">
          <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs" #>
            <q-avatar>
              <q-img
                fit="scale-down"
                src="../assets/hana-stream-logo-grey.png"
                spinner-color="white"
                style="max-width: 30px; height: 24px"
              />
            </q-avatar>
            <q-toolbar-title shrink class="text-weight-bold">
              하나스트림
            </q-toolbar-title>
          </q-btn>
        </router-link>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
            disabled
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
            disabled
          />
          <q-tooltip> 아직 지원되지 않습니다 </q-tooltip>
        </div>

        <q-space />

        <!-- <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
        </div> -->
        <AuthBtn />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-item
          v-for="link in links1"
          :key="link.text"
          v-ripple
          clickable
          :to="link.url"
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-mt-md q-mb-xs" />

        <q-item-label
          header
          class="text-weight-bold text-uppercase text-justify"
        >
          <q-icon name="mdi-tree-outline" /> 성인 예배
        </q-item-label>

        <q-item
          v-for="link in links2"
          :key="link.text"
          v-ripple
          clickable
          :to="link.url"
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-mt-md q-mb-xs" />

        <q-item-label
          header
          class="text-weight-bold text-uppercase text-justify"
        >
          <q-icon name="mdi-tree-outline" /> 어린이 예배
        </q-item-label>

        <q-item
          v-for="link in links3"
          :key="link.text"
          v-ripple
          clickable
          :to="link.url"
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-separator class="q-my-md" />

        <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item> -->

        <q-separator class="q-mt-md q-mb-lg" />

        <div class="q-px-md text-grey-9">
          <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
            <a
              v-for="button in buttons1"
              :key="button.text"
              class="YL__drawer-footer-link"
              href="javascript:void(0)"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
        <div class="q-py-md q-px-md text-grey-9">
          <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
            <a
              v-for="button in buttons2"
              :key="button.text"
              class="YL__drawer-footer-link"
              href="javascript:void(0)"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
