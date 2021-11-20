<script setup lang="ts">
import AuthBtn from 'components/auth/AuthBtn.vue';
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
            <q-icon :name="fabYoutube" color="red" size="28px" />
            <q-toolbar-title shrink class="text-weight-bold">
              HANA STREAM
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
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
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
          <AuthBtn />
        </div>
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
        <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-mt-md q-mb-xs" />

        <q-item-label header class="text-weight-bold text-uppercase">
          More from Youtube
        </q-item-label>

        <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

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
