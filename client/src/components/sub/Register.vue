<template>
  <div class="Register">
     <form @submit.prevent="registerUser" >
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirst4">First Name</label>
                  <input type="text" class="form-control" id="inputFirst4" placeholder="Enter your First Name" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLast4">Last Name</label>
                  <input type="text" class="form-control" id="inputLast4" placeholder="Enter Your Last Name or Surname" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your Email" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputUser4">Username</label>
                  <input type="text" class="form-control" id="inputUser4" placeholder="Enter Your Username" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Eg. reffwefw234$$" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputRPassword4">Retype Password</label>
                  <input type="password" class="form-control" id="inputRPassword4" placeholder="Eg. reffwefw234$$" required>
                </div>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="accept-terms" required>
                  <label class="form-check-label" for="accept-terms">
                    By checking this box, We assume that you have read our <a href="terms"> Terms & Conditions</a>
                  </label>
                </div>
              </div>
              <button type="submit" class="site-btn sb-gradients">Register <i class="fa fa-refresh j-rotating"></i></button>
        </form>
    </div>
</template>
<script >
/* eslint-disable */
	export default {
		name: "Register",
		props: {
			show : Boolean
		}
	};
</script>
<style scoped>
	.Register form {
		position: fixed;
		top: 50%;
		left:50%;
		transform: translate(-50%, -50%);
	}

	.Register form div input {
		background-color: rgba(0,0,0,0.05) !important;
		border: 2px solid white;
	}

	.Register form button {
		background-color: rgba(0,0,0,0.4) !important;
		border: 2px solid white;
		color: white;
	}
</style>