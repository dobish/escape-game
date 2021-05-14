<template>
  <div class="container">
    <Overlay v-if="investigate" imageSrc='sticky_note_back.png' Title="Another note" Description="You pull out a piece of paper. Its covered in ink and is ripped down the middle...." Router='Final' class="overlay"></Overlay>
    <TopBar title="the church" imageName="B&W_St_Nikolaj.jpg"></TopBar>
    <div class="story-box">
      <h2 class="title">you found the V</h2>
      <p>
        “Seems like you triggered some sort of switch. The V gets pushed aside,
        and from behind it appears a little room, there seems to be something in
        there. You pull it out.”.
      </p>

      <div class="button-investigate">
        <button @click="investigatePress()">Investigate</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import Overlay from "./Overlay";
export default {
  name: "Stage3",
  components: { TopBar, Overlay },
  props: {},
  data: function () {
    return {
        investigate: false
    };
  },

  watch: {},
  methods: {
      investigatePress: function () {
        this.investigate = true
      }
  },

  mounted() {},

  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
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

.overlay {
  position: absolute;
  top: 0px;
  z-index: 1000;
}
</style>