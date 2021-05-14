<template>
  <div id="app">

    <transition name="fade" mode="out-in">
      <router-view class="main-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
