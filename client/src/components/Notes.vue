<template>
  <div style="padding-left:15px; padding-right: 15px;">
  <div class="notes" style="margin-top:70px">
    <div class="ncontrols row">
      <div class="col-md-6">
        <div class="flex-center">
          <i ><ico icon='plus-square' ></ico></i><span > Add New Note </span>
        </div>
      </div>
      <div class="col-md-6" style="text-align:right;">
        <div style="display:inline-block">
        <label for="selectall" class="flex-center" @click="selectall">
          <span style="font-size:17px;"> Select All </span><i v-if="!selected"><ico icon='square'  ></ico></i>
          <i v-if="selected"><ico icon='check-square'  ></ico></i>
        </label>
        </div>
      </div>
    </div>

    <div v-for="(note , key) in notes.data" :key="key">
      <Note :nid="key" :note="note" />
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import Note from './sub/Note.vue'
import { mapState, mapMutations } from 'vuex'
const moment = require('moment')

export default {
  name: 'Notes',
  components : {
  	Note
  },
  computed : {
    ...mapState(['notes']),
    selected : function(){
      if (this.notes.selected.find(note=>note==1)){
        return false
      } 
      if (this.notes.selected.length === 0) {
        return false
      } 
      if (this.notes.data.length == this.notes.selected.length) {
        this.select = true
        return this.select
      }
    }
  },
  data () {
    return {
      select : false,
    }
  },
  methods : {
    ...mapMutations(['addAllSelectedNotes', 'removeAllSelectedNotes']),
    selectall : function() {
      if (this.select == false){
        this.addAllSelectedNotes()
        this.notes.selected = this.notes.data
      } else {
        this.select = false
        this.removeAllSelectedNotes()
      }
    }
  },
  created(){
    // fetch ('/notes/get', {
    //   method: "GET",
    // })
    // .then(res => res.json())
    // .then(json => {
    //   if (json.data) {
    //     this.notes.data = json.data
    //   } else {
    //     alert('Login to view your saved notes')
    //   }
    // })
  }
};
</script>

<style scoped>
.notes .controls {
  font-size: 16px;
}

.notes .ncontrols span {
  font-size: 16px;
}
.ncontrols i {
  text-align: center;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  transition: all .3s;
}
.ncontrols i:hover {
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