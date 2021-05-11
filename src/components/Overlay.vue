<template>
  <div class="container">
    <div class="image">
      <img :src="require('../assets/' + imageSrc + '')" alt="" />
    </div>
    <div class="title">
      <h1>{{ Title }}</h1>
    </div>
    <div class="description">
      {{ Description }}
    </div>
    <div class="button-container">
      <button class="overlay-button" @click="CloseOverlay">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  props: ["imageSrc", "Title", "Description", "Router"],
  data: function () {
    return {
      opened: "false",
      stage: this.Router,
    };
  },

  watch: {},
  methods: {
    CloseOverlay: function () {
      //this.opened = !this.opened;

      this.$emit("clicked", this.opened, "closed");
      let router = this.$router;
      router.push(this.stage);
      console.log(this.stage);
    },
  },

  mounted() {},

  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.95);
  width: 100%;
  height: 100vh;
}

.image > img {
  width: 80%;
  border-radius: 50%;
  margin-top: 5%;
}
.overlay-button {
  display: block;
  font-family: "Bangers", cursive;
  width: 50%;
  border-radius: 15px;
  border: none;
  height: 10%;
  color: #970303;
  font-size: 2em;
  padding: 5%;
  margin-top: 5%;
}

.title {
   font-family: "Bangers", cursive;
   color: #970303;
   font-size: 1.7em;
}

.description {
    font-size: 1.5em;
  font-family: "Unica One", cursive;
  width: 100%;
  color: white;
}

.button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>