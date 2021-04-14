<template>
  <div class="makenote">
    <div class="editor"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MakeNotes',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
};
</script>
<style>
.makenote {
	background-color: whitesmoke;
	min-height: calc(100vh - 70px);
	margin-top: 70px;
}
.editor {
	margin:15px;
	border: 3px solid rgba(0,0,0,.5);
	width: 100%;
	height: 400px;
}
</style>