<template>
  <div class="container">
    <TopBar v-bind:title="title" v-bind:imageName="TopBarImage"></TopBar>
    <div class="story-box">
      <h2 v-if="investigate" class="title">{{storyTitle}}</h2>
      <p v-if="investigate && !flipped">Try using your phone to investigate the strange note</p>
      <p v-if="flipped">On the backside of the note it has a pretty distinct <span>v</span> and some readable however incomprehensible text. </p>
      
      <img v-if="!pressed" :src="require('../assets/' + image + '')" alt="" />
 
      <div class="buttons" v-if="!pressed">
        <button @click="investigateEvent()">Investigate</button>
        <button>Throw away</button>
      </div>
      <div class="button-investigate" v-if="flipped">
        <button>Investigate</button>
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
      flipped: false,
      value: '',
      image: 'sticky_note_front.png',
      TopBarImage: 'B&W_St_Nikolaj.jpg',
      storyTitle: 'You found a note!',
      title: 'the church'
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
      this.TopBarImage = 'sticky_note_front.png',
      this.title = 'the note'
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

      if (self.investigate == true & left >= 85 || left <= -85 ) {
        self.vibrate();
        self.test = true;
        self.flipped = true;
        self.TopBarImage = 'sticky_note_back.png'
        self.storyTitle = 'you flipped the note!'

      }
}


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{ 
height: 100%;
}
.story-box {
  width: 100%;
}

.story-box > p {
  font-family: "Unica One", cursive;
  width: 80%;
  margin-left: 10%;
  font-size: 1.2em;
}

.story-box > p > span {
  color: #970303;
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

.button-investigate > button {
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
  margin-left: 30%;
}
</style>