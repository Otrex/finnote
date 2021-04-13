<template>
  <div style="padding-left:15px; padding-right: 15px;">
  <div class="notes" style="margin-top:70px">
    <div class="controls row">
      <div class="col-md-6">
        <div class="flex-center">
          <i ><ico icon='plus-square' ></ico></i><span > Add New Note </span>
        </div>
      </div>
      <div class="col-md-6" style="text-align:right;">
        <div style="display:inline-block">
        <label for="selectall" class="flex-center">
          <span style="font-size:17px;"> Select All </span><i v-if="!selectall"><ico icon='square'  ></ico></i>
          <i v-if="selectall"><ico icon='check-square'  ></ico></i>
        </label>
        <input type="checkbox" style="display:none;" v-model="selectall" id="selectall" name="">
        </div>
      </div>
    </div>

    <div v-for="(note , key) in notes" :key="key">
      <Note :key="key">
        <template #title>
          {{note.title}}
        </template>
        <template #date>
          {{note.createdAt}}
        </template>
        <template #content>
          {{note.content}}
        </template>
      </Note>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Note from './sub/Note.vue'
const moment = require('moment')

export default {
  name: 'Notes',
  components : {
  	Note
  },
  data () {
    return {
      notes : [
        {
          title : "Happy",
          createdAt : "2000-06-08",
          content : `Started restoring cached node modules
          11:59:04 AM: Finished restoring cached node modules
          11:59:04 AM: Installing NPM modules using NPM version 6.14.4`
        },
        {
          title : "Treasure",
          createdAt : "2021-09-07",
          content : `Started restoring cached node modules
          11:59:04 AM: Finished restoring cached node modules
          11:59:04 AM: Installing NPM modules using NPM version 6.14.4`
        },
      ],
      selectall : false,
    }
  },
  created(){
    fetch ('/notes/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(json => {
      if (json.data) {
        this.notes = json.data
      } else {
        alert('Login to view your saved notes')
      }
    })
  }
};
</script>

<style scoped>
.notes .controls {
  font-size: 16px;
}

.notes .controls span {
  font-size: 16px;
}
.controls i {
  text-align: center;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  transition: all .3s;
}
.controls i:hover {
  transform: scale(1.1);
}
.notes {
  padding: 15px;
  border-radius: 8px;
  min-height: calc(100vh - 80px);
  width: 100%;
  background: rgba(255,255,0,.2);
}

/*notes * {
  border: 1px solid rgba(255, 20, 0, .5);
}*/
</style>