<template>
<nav class="fixed">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8">
            <div class="flex-h">
                <ul>
                    <li><router-link to='/'>Home</router-link></li>
                    <li><router-link to='/budget'>Budget</router-link></li>
                    <li><router-link to='/calender'>Calendar</router-link></li>
                    <li><router-link to='/notes'>Notes</router-link></li>
                </ul>
                <div class="action">
                    <div style="display:inline-block">
                        <a > <ico icon="bell"></ico></a>
                        <a ><ico icon="user-plus"></ico></a>
                        <img src="static/img/face1.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>
<script >
/* eslint-disable */
export default {
    name : 'TopNav'
};
</script>
<style scoped>
nav {
	padding: 10px;
	overflow-x: hidden;
	background: rgba(250,250,250,.75);
}
nav ul {
	list-style-type: none;
	margin: 0px;
	padding: 0px;
	width: 100%;
}
.fixed {
  position : fixed;
  top: 0px;
  left: 0px;
  z-index: 500;
  width: 100%;
}
nav ul li {
	display: inline-block;
}

nav ul li a {
	display: block;
	padding: 10px 10px;
}

.action {
	padding: 10px 20px;
	text-align: right;
	width: 200px;
	font-size: 20px;
}

.action img {
	transform: translateY(-3px);
}
.action img, .action a {
	text-align: center;
	display: inline-block;
	width: 30px;
	height: 30px;
	border-radius: 5px;
}

.action img:hover, .action a:hover {
	box-shadow: 0px 0px 10px grey
}
</style>