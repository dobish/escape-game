<template>
  <div class="container">
    <TopBar title="the church" imageName="Church_glimpse.png"></TopBar>
    <div class="story-box">
      <p>
        You get a glimpse of a strange person.. seems like he is tampering with
        a V plate on the side of the church...
      </p>
    </div>
    <div class="button">
      <button class="start-button">Investigate</button>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
export default {
  name: "Stage2",
  props: {},
  components: {
    TopBar,
  },
  data: function () {
    return {};
  },

  watch: {},
  methods: {},

  mounted() {},

  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-button {
  display: block;
  font-family: "Bangers", cursive;
  width: 50%;
  border-radius: 15px;
  border: none;
  height: 20%;
  color: #970303;
  font-size: 2em;
  padding: 5%;
  margin-top: 5%;
}

.button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.story-box {
  width: 100%;

}

.story-box > p {
    width: 80%;
      display: block;
}
</style>