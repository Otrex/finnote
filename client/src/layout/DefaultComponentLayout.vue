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
  </div>
</template>

<script>
/* eslint-disable */

  export default {
    name : "DefaultComponentLayout",
    data() {
      return {
        slideIndex : 1,
        dots: {slide1: "active", slide2:undefined},
        register : false
      }
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

<style scoped>
@import '../styles/layout/defaultlayout.css'
</style>