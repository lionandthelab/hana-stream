<template>
  <q-page class="row items-center justify-evenly">
    <v-card v-for="(item, i) in playList" :key=i>
      {{item.snippet.title}}
      <playListId :id="item.id" />
    </v-card>
  </q-page>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import playListId from 'components/PlayListItem.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { playListId },
  data() {
    return{
      playList:[],
      playListItems:[]
    }
  },
  methods: {
  },
  mounted(){
      axios.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UChzI-IJRRWNTdwkHeCs5PKg&key=AIzaSyChf0b_wFZEzL-iXpEUu0ujnU1ZQDsUmAY&maxResults=50')
      .then(response => {
        this.playList = response.data.items;
        })
      .catch(function(error){
        console.log(error);
      })
  },
});
</script>

<style>
  v-card{
    border: 2px solid #F0F;;
  }
</style>
