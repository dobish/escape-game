<template>
  <div class="container">
    <TopBar title="the church" v-bind:imageName="TopBarImage"></TopBar>
    <div class="story-box">
      <h2 v-if="!pressed" class="title">You found a note!</h2>
      <p v-if="pressed">Try using your phone to investigate the strange note</p>
      <img v-if="!pressed" :src="require('../assets/' + image + '')" alt="" />
      <div>
        {{value}}
      </div>
      <div class="buttons" v-if="!pressed">
        <button @click="investigateEvent()">Investigate</button>
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
      pressed: false,
      value: '',
      image: 'sticky_note_front.png',
      TopBarImage: 'B&W_St_Nikolaj.jpg'
    };
  },

  watch: {},
  methods: {
    vibrate: function () {
        window.navigator.vibrate(100);
    },

    investigateEvent: function() {
      this.investigate = true;
      this.pressed = true;
      this.TopBarImage = 'sticky_note_front.png'
    }
  },

  mounted() {},

  created() {

    var self =this;
if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (event) {
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  }, true)
}
var handleOrientationEvent = function (frontToBack, leftToRight) {

      console.log(frontToBack, leftToRight);
    


      let left = Math.round(leftToRight);

      self.value = left;

      if (self.investigate == true & left >= 85 ) {
        self.vibrate();
        self.test = true;
        self.TopBarImage = 'sticky_note_back.png'

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

.story-box > p {
  font-family: "Unica One", cursive;
  width: 80%;
  margin-left: 10%;
  font-size: 1.5em;
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