<template>
  <div class="Login">
     <form @submit.prevent="LoginUser" >
                <div class="form-group">
                  <label for="inputEmail4">Email</label>
                  <input type="email" v-model="form.email" class="form-control" id="inputEmail4" placeholder="Enter your Email" required>
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Password</label>
                  <input type="password" v-model="form.password" class="form-control" id="inputPassword4" placeholder="Eg. reffwefw234$$" required>
                </div>
                <div class="form-group">
                    <button @click="loginUser" class="site-btn sb-gradients">Login <ico icon="plus-square"></ico></button>
                </div>
        </form>
    </div>
</template>
<script >
/* eslint-disable */

import { mapMutations } from 'vuex'
	export default {
		name: "Login",
		props: {
			show : Boolean
		},
		data() {
			return {
				form : {}
			}
		},
		methods : {
			...mapMutations(['setUser']),
			// loginUser : function() {
			// 	fetch('/auth/login',{
			// 		method : "POST",
			// 		body : JSON.stringify(form),
			// 		headers: {
			// 	      'Content-Type': 'application/json'
			// 	      // 'Content-Type': 'application/x-www-form-urlencoded',
			// 	    },
			// 	})
			// 	.then (res =>res.json())
			// 	.then (json =>{
			// 		if (json.status == "ok") {
			// 			this.setUser(json.user)
			// 		}
			// 	})
			// }
		}
	};
</script>
<style scoped>
	.Login form {
		position: fixed;
		top: 50%;
		left:50%;
		transform: translate(-50%, -50%);
	}

	.Login form div input {
		background-color: rgba(0,0,0,0.05) !important;
		border: 2px solid white;
		width: 200px;
	}

	.Login form button {
		background-color: rgba(0,0,0,0.4) !important;
		border: 2px solid white;
		color: white;
		width: 100%;
	}
	.form-check  {
		text-align: left;
	}
	.form-check input {
		float : left;
	}
</style>