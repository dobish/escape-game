<template>
  <div class="container">
    <p>You hear your name called out...</p>
    <p>{{ username }}!!</p>
    <p>It sounds like it's coming from the church</p>

    <h2>{{ timerCount }}</h2>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";

export default {
  name: "Stage_1",
  props: {},
  data: function () {
    return {
      username: "",
      timerCount: 10,
      message: ''
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.message = 'you just missed him';
          this.goToNextStage();
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  methods: {
    goToNextStage: function () {
      let router = this.$router;
      router.push("stage2b");
    },
  },

  mounted() {
    // Retrieve saved username from LocalStorage
    this.username = window.localStorage.getItem("username");

    //Check if geolocation is available on the device - Give prompt to accept
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is unavailable");
    }

    //Get current position
    function showPosition(position) {
      console.log("Latitude = " + position.coords.latitude);
      console.log("Longitude = " + position.coords.longitude);
    }


  },

  created() {
    this.mapbox = Mapbox;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  font-weight: 800;
  margin-bottom: 30px;
}
.timing-runner {
  margin-bottom: 50px;
  padding: 50px 0px;
}
.timing-runner .timing-blog .days-box {
  padding: 0px 2%;
  text-align: center;
}
.timing-runner .timing-blog .days-box .day {
  font-size: 70px;
  color: #000000;
  font-family: "robotobold";
  line-height: 1;
}
.timing-runner .timing-blog .days-box span {
  color: #ed1b24;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
}
.timing-runner .timing-blog {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>