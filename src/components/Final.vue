<template>
  <div class="container">
    <TopBar title="Thank you" imageName = 'sticky_note_front.png'></TopBar>
    <div class="story-box">
        <p>
            Thank you for participating in our user testing
        </p>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
export default {
  name: "final",
  components: { TopBar },
  props: {},
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
.story-box {
  width: 100%;
}

.story-box > p {
  font-family: "Unica One", cursive;
  width: 80%;
  margin-left: 10%;
  font-size: 1.2em;
}

</style>