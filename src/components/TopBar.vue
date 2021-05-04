<template>
  <div class="container">
      <div class="image-title">
      <img :src="require('../assets/' + imageName + '')" alt="" />
    </div>
    <div id="title-bar">
      <h1 id="title">{{title}}</h1>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "topbar",
  props: ['title', 'imageName'],
  data: function () {
    return {

    };
  },

  watch: {
  },
  methods: {

  },

  mounted() {


  },

  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-title {
  width: 100%;
  height: auto;
}

img {
  width: 100%;
}

#title {
  font-family: "Bangers", cursive;
  margin-left: 5%;
  margin-top: 0;
  color: #970303; 
}

#title-bar {
  background-color: #ebebeb;
  text-align: left;
  margin: 0;
  -webkit-box-shadow: 0px 19px 15px -9px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 19px 15px -9px rgba(0, 0, 0, 0.05);
}

</style>