<template>
 <div class="note">
  <div class="row">
   <div class="col-md-6">
    <div class="title">
     <slot name="title"></slot>
    </div>
   </div>
   <div class="col-md-6">
    <div class="date">
     <slot name="date"></slot>
    </div>
   </div>
   <div class="col-md-12">
    <div class="content">
     <slot name="content"></slot>
     <div class="select-control">
     <div style="display:inline-block">
      <label :for="key" class="flex-center">
       <span style="font-size:17px;"> Select </span><i v-if="!select"><ico icon='square'  ></ico></i>
       <i v-if="select"><ico icon='check-square'></ico></i>
       <input type="checkbox" style="display:none;" v-model="select" :id="key" name="">
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
export default {
	name: "Note",
	props : {
		key : String
	},
	data() {
		return {
			select : false
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
