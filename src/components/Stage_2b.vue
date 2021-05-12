<template>
  <div class="container">
    <TopBar title="the church" imageName="B&W_St_Nikolaj.jpg"></TopBar>
    <div class="story-box">
      <h2 class="title">You found a note!</h2>
      <img :src="require('../assets/sticky_note_front.png')" alt="" />
      <div class="buttons">
        <button>Investigate</button>
        <button>Throw away</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";

export default {
  name: "Stage2b",
  components: { TopBar },
  props: {},
  data: function () {
    return {
      investigate: false,
      throwAway: false,
    };
  },

  watch: {},
  methods: {},

  mounted() {},

  created() {
if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (event) {
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  }, true)
}
var handleOrientationEvent = function (leftToRight) {

      console.log(leftToRight);
    
      let left = Math.round(leftToRight);

      if (left === 90 || left === -90) {
        navigator.vibrate(100)
      }
}


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.story-box {
  width: 100%;
}

.story-box > img {
  width: 50%;
}

.title {
  color: black;
  font-family: "Bangers", cursive;
}

.buttons > button {
  color: #970303;
  font-family: "Bangers", cursive;
  display: block;
  width: 40%;
  border-radius: 15px;
  border: none;
  height: 10%;
  color: #970303;
  font-size: 1.2em;
  padding: 5%;
  margin-top: 5%;
  margin-left: 7%;
}

.buttons {
  width: 100%;
  display: flex;
  
}
</style>