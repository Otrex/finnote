<template>
  <div class="welcome">
    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div class="mySlides" style="display:block;" ref="slide1">
        <div class="slide-content one">

          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="flex-rh">
                <div class="middle">
                  <h1>Get The Best Out Of You Income</h1>
                  <h4>We offer the best way to manage your finance. At your finger tips.<br>So NO MORE excessive spendings</h4>
                  <button class="btn btn-primary" @click="register = !register">Get Started</button>
                </div>
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
          </div>

        </div>
        <div class="numbertext">FINANCE MANAGER</div>
      </div>

      <div class="mySlides " ref="slide2">
        <div class="slide-content two">
           <div class="container">
            <div class="row">
              <div class="col-md-6">
              </div>
              <div class="col-md-6">
                <div class="flex-rh">
                <div class="middle">
                  <h1>Manage Your Task with ease</h1>
                  <h4>We offer the best way to manage your Task. At your finger tips.<br>So NO MORE excessive spendings</h4>
                  <button class="btn btn-primary" @click="register = !register">Get Started</button>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="numbertext">TODO MANAGER</div>
      </div>

      <div class="mySlides " ref='slide3'>
        <div class="slide-content three">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="flex-rh">
                <div class="middle">
                  <h1>Note Note Note. Save Notes!</h1>
                  <h4>Save your amazing notes with us today. Easily accessible anywhere in the world.</h4>
                  <button class="btn btn-primary" @click="register = !register">Get Started</button>
                </div>
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
          </div>
        </div>
        <div class="numbertext">NOTE MANAGER</div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!-- The dots/circles -->
    <div class="controls" style="text-align:center">
      <span @click="currentSlide(1)" :class="['dot', dots.slide1]"></span>
      <span @click="currentSlide(2)" :class="['dot', dots.slide2]"></span>
      <span @click="currentSlide(3)" :class="['dot', dots.slide3]"></span>
    </div>
    <div class="modal-bg" v-show="register">
      <div class="close-btn"><ico icon="times" @click="register = !register"></ico></div>
      <div class="modal-box-wrapper">
        <div class="modal-box">
          <Register :show="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Register from '../components/sub/Register.vue'

  export default {
    name : "Welcome",
    props : {
      login : Boolean
    },
    data() {
      return {
        slideIndex : 1,
        dots: {slide1: "active", slide2:undefined},
        register : false
      }
    },
    components :{
      Register
    },
    methods : {
      plusSlides: function (n) {
        this.showSlides(this.slideIndex += n);
      },
      currentSlide: function (n) {
        this.showSlides(this.slideIndex = n);
      },

      showSlides: function (n) {
        var i;
        var slides = this.$refs
        if (n > Object.keys(slides).length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = Object.keys(slides).length}


        for (i in slides){
          slides[i].style.display = "none";
          this.dots[i] = undefined
        }

        var currSlide = `slide${this.slideIndex}`

        this.dots[currSlide] = 'active';
        console.log(this.dots)
        slides[currSlide].style.display = "block";
      }
    }
  };
</script>

<style>

.modal-bg .close-btn {
  color: white;
  position: absolute;
  top: 50px;
  right :50px;
  font-size: 50px;
}
.modal-box {
  margin: 50px 15%;
}
.modal-bg {
  position: fixed;
  top: 0px;
  left:0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.8);
  z-index: 2000000;
}
.welcome {
  height: 100vh;
  overflow: hidden;
}
.slide-content {
  color: white;
  position: absolute;
  top:0px;
  left: 0px;
  z-index: 10px;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  /*background: rgba(255, 0,0,.3);*/
}
.middle {
  width: 70%;
}

.middle h1 {
  font-family: 'Sacramento', cursive;
  font-size: 50px;
}

.middle h4 {
  font-weight: 200;
  font-size: 20px;
}
.middle .btn {
  margin-top: 10px;
}

.flex-rh {
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
  height:100vh;
  align-items: center;
}

.btn.btn-primary {
  margin-top: 30px;
  padding: 15px 22px;
  background-color: transparent !important;
  border: 3px solid white;
}

.btn.btn-primary:hover {
  background-color: rgba(10,10,10,.5);
  box-shadow: 0px 0px 10px rgba(0,0,0, .5);
} 
@media screen and (max-width: 700px) {
  .middle {
    width: 95%;
  }
}

.slide-content.one {
  background-image: linear-gradient(to right, rgba(0,0,0,.8), rgba(200,200,200,.2)) , url(https://picsum.photos/1024/480/?image=13);

}
.slide-content.two {
  background-image: linear-gradient(to left, rgba(0,0,0,.8), rgba(200,200,200,.2)) ,url(https://picsum.photos/1024/480/?image=19);
}
.slide-content.three {
  background-image: linear-gradient(to right, rgba(0,0,0,.8), rgba(200,200,200,.2)) ,url(https://picsum.photos/1024/480/?image=15);
}
/*slide-content  {
  position: absolute;
  top:0px;
  left: 0px;
  width: 100%;
}*/
.controls {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.slideshow-container {
  max-width: 100%;
  height: 100vh;
  position: relative;
  margin: auto;
}
.slideshow-container img {
  height: 100%;
  width: auto;
}


/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>