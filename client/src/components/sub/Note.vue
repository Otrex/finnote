<template>
 <div class="note">
  <div class="row">
   <div class="col-md-6">
    <div class="title">
     {{note.title}}
    </div>
   </div>
   <div class="col-md-6">
    <div class="date">
     {{note.createdAt}}
    </div>
   </div>
   <div class="col-md-12">
    <div class="content">
     {{note.content}}
     <div class="select-control">
     <div style="display:inline-block">
      <label class="flex-center" @click="addToList">
       <span style="font-size:17px;" > Select </span><i v-if="!isSelected"><ico icon='square'  ></ico></i>
       <i v-if="isSelected"><ico icon='check-square'></ico></i>
      </label>
     </div>
     </div>
    </div>
   </div>
  </div>
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'

export default {
	name: "Note",
	props : {
		nid : Number,
    note : Object
	},
  computed : {
    ...mapState(['notes']),
    isSelected : function() {
      this.select = this.notes.selected.find(note =>note == this.note)
      return this.select
    }
  },
	data() {
		return {
			select : false
		}
	},
  methods : {
    ...mapMutations(['addSelectedNote', 'removeSelectedNote']),
    addToList : function() {
      if (!this.select) {
        this.addSelectedNote(this.note)
      } else {
        this.select = false
        this.removeSelectedNote(this.notes.selected.indexOf(this.note))
      }
    }
  }
};
</script>
<style>
.note {
	background: rgba(255,255,255,.8);
	color: black;
	border-radius: 8px;
	min-height: 100px;
	padding: 20px;
	margin-bottom: 20px;
}
.select-control {
	text-align: right;
}
.select-control label span {
	padding-right: 10px;
}
.title , .date {
	font-weight: bold;
}
.date {
	text-align: right;
}
</style>
