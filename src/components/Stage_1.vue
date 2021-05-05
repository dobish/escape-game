<template>
  <div class="container">
    <TopBar title="time to move" imageName="B&W_St_Nikolaj.jpg"></TopBar>
    <div class="story-box">
      <p>
        <span class="username-input">{{ username }}</span>
        the Time is running, You should better get to the next location....
      </p>
    </div>

<div class="timer">
  {{timerCount}}
</div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import TopBar from "./TopBar";

export default {
  name: "Stage_1",
  props: {},
  components: {
    TopBar,
  },
  data: function () {
    return {
      username: "",
      timerCount: 1000,
      message: "",
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
          this.message = "you just missed him";
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


  },

  created() {
    this.mapbox = Mapbox;

        //Check if geolocation is available on the device - Give prompt to accept
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is unavailable");
    }

setInterval(navigator.geolocation.getCurrentPosition(showPosition), 300);



    //Get current position
    function showPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      //let churchCoordinates = {latitude: '55.49058418501905', longitude: '9.47216005990786'};

      let dormCoordinates = {latitude: '55.49380475700325', longitude: '9.470198347154795'};

      console.log(parseFloat(dormCoordinates.latitude).toFixed(3));
      console.log(parseFloat(latitude).toFixed(3));





      if (parseInt(dormCoordinates.latitude).toFixed(3) == parseInt(latitude).toFixed(3) & parseInt(dormCoordinates.longitude).toFixed(3) == parseInt(longitude).toFixed(3)){
        console.log('Jesteś u celu');

      }
    }
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

.username-input {
  font-size: 2em;
  color: #970303;
}

.story-box {
  font-size: 2em;
  font-family: "Unica One", cursive;
  width: 100%;
}

.story-box > p {
  width: 80%;
  margin-left: 10%;
}

.timer {
  display: block;
  font-family: "Bangers", cursive;
  width: 50%;
  border-radius: 10px;
  border:none;
  height: 20%;
  color: #970303;
  font-size: 2em;
  margin-left: 25%;
background-color: #E1E1E1;


}



</style>