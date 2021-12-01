<template>
  <v-card class="row items-center justify-evenly">
    
    <li v-for="(item, i) in playListItems" :key=i>
      <ol>{{item.snippet.title}}</ol>
    </li>

  </v-card>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PlayListItem',
  props: { 
    id:{
      type : String,
      required : true
    } 
  },
  data() {
    return{
      playList:[],
      playListItems:[],
      playListId:''
    }
  },
  methods: {
  },
  mounted(){
    console.log('playlist mounted');
    this.playListId = this.id;
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+ this.playListId+'&key=AIzaSyChf0b_wFZEzL-iXpEUu0ujnU1ZQDsUmAY&maxResults=50')
      .then(response => {
        this.playListItems = response.data.items;
        })
      .catch(function(error){
        console.log(error);
      })
    console.log(this.playListItems[0].snippet.title);
  },

});
</script>
