
<template>
  <div id="app">
    <div class="colapse-nav" v-if="!show_sidebars">
      <label for="cnav"><ico icon="bars" /></label>
      <input type="checkbox" id="cnav" style="display:none">
      <div class="cnav-menu-container">
        <div class="cnav-menu">
          <ul>
            <li><router-link to="/budget"> Finance Manager </router-link></li>
            <li><router-link to="/note"> Note Manager </router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-full">
      <TopNav v-if='show_sidebars' class="col-md-12 fixed" />

      <div class="row no-gutters">
        <router-view :class="show_sidebars ? 'col-md-8' : 'col-md-12 full' "/>
        <Notes v-if='show_sidebars' class="col-md-4" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TopNav from '@/components/TopNav.vue'
import Notes from '@/components/Notes.vue'

export default {
  name: 'App',
  components : {
    TopNav, Notes
  },
  computed : {
    show_sidebars : function() {
      if (this.$route.name !== 'Welcome') return true
    }
  }
};

</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgba(250,250,250,.75);
}

.container-full {
  overflow-x: hidden;
}
.full {
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  /*overflow: hidden;*/
  padding: 0px !important;
}
a {
  color: rgba(50,50,50,.95);
}

a:hover {
  background: rgba(255,255,0,.3);
  text-decoration: none;
}
.flex-center {
  display: flex;
  align-items: center;
}
.flex-h {
  display: flex;
}
.fixed {
  position : fixed;
  top: 0px;
  left: 0px;
  z-index: 500;
  width: 100%;
}
.pad-50 {
  padding: 80px 20px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.m-info ~ span.m-ref {
  position: absolute;
  top: 0px;
  left:100%;
  display: none;
}
.m-info:hover ~ span.m-ref {
  display: inline-block;
  z-index: 910;
}

.m-ref {
  background: rgba(50,50,50,1);
  color: white;
  padding: 10px;
  border-radius: 0px 20px 20px 0px;
}
.colapse-nav {
  position: fixed;
  top:0px;
  right: 30px;
  z-index: 10000;
}

.colapse-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.colapse-nav ul li a {
  display: block;
  padding: 10px 15px;
}
.cnav-menu-container {
  display: inline-block;
}

input#cnav ~ div.cnav-menu-container {
  max-height: 0px;
  transition: all .3s;
  overflow: hidden;
  position: absolute;
  top:50px;
  right: 0px;
  width: 200px;
  background: white;
}

input#cnav:checked ~ div.cnav-menu-container {
  max-height: 100vh;
}

label[for='cnav'] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 0px 0px 5px 5px;
}
label[for='cnav']:hover {
  background: white;
  color: black;
}
</style>
