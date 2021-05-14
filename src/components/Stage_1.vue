<template>
  <div class="container">
    <Overlay
      v-if="opened"
      v-bind:imageSrc="imageSrcData"
      v-bind:Title="titleData"
      v-bind:Description="descriptionData"
      class="overlay"
      @clicked="hideOverlay"
      v-bind:Router="stage"
    ></Overlay>
    <TopBar title="time to move" imageName="B&W_St_Nikolaj.jpg"></TopBar>
    <div class="story-box">
      <p>
        <!-- <span class="username-input">{{ username }}</span> -->
        You hear your name called out - sounds like it’s coming from 
the church. Try and get there before time reaches zero To see who it is... 
      </p>
    </div>

    <div class="timer">
      {{ timerCount }}
    </div>
    <div class="debugging">
      <p></p>
    </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import TopBar from "./TopBar";
import Overlay from "./Overlay.vue";

export default {
  name: "Stage_1",
  props: {},
  components: {
    TopBar,
    Overlay,
  },
  data: function () {
    return {
      username: "",
      timerCount: 45,
      message: "",
      userCoords: { latitude: "", longitude: "" },
      churchCoords: { latitude: "", longitude: "" },
      opened: false,
      stage: "",
      descriptionData: "",
      titleData: "",
      imageSrcData: "",
      onTime: true,
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
          this.onTime = !this.onTime;

          //this.goToNextStage();
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

    getPosition: function (position) {
      this.userLatitude = position.coords.latitude;
      this.userLongitude = position.coords.longitude;
    },

    hideOverlay: function (value) {
      console.log(value);
      this.opened = value;
    },
  },

  mounted() {
    // Retrieve saved username from LocalStorage
    this.username = window.localStorage.getItem("username");
  },

  created() {
    this.mapbox = Mapbox;
   var self =this;
 

   
   




    // var userLat = this.userCoords.latitude;
    //var userLong = this.userCoords.longitude;
    //Check if geolocation is available on the device - Give prompt to accept
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is unavailable");
    }

    setInterval(function () {
      navigator.geolocation.getCurrentPosition(showPosition);
    }, 1000);

    //Get current position
    function showPosition(position) {

      

      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      //userLat = position.coords.latitude;
      //userLong = position.coords.longitude;

      let churchCoordinates = {
        latitude: "55.49058418501905",
        longitude: "9.47216005990786",
      };

      //let dormCoordinates = {latitude: '55.49380475700325', longitude: '9.470198347154795'};

      console.log(parseFloat(churchCoordinates.latitude).toFixed(3));
      console.log(latitude);
      console.log(parseFloat(latitude).toFixed(3));

      // & parseInt(churchCoordinates.longitude).toFixed(3) == parseInt(longitude).toFixed(3)

      let churchLatitude = parseFloat(churchCoordinates.latitude).toFixed(3);
      let churchLongitude = parseFloat(churchCoordinates.longitude).toFixed(3);

      let userLatitude = parseFloat(latitude).toFixed(3);
      let userLongitude = parseFloat(longitude).toFixed(3);

      if (
        (churchLatitude == userLatitude) &
        (churchLongitude == userLongitude)
      ) {
          
  
        console.log("Jesteś u celu");



        if (self.onTime == true) {
          console.log('ssssss')
          self.stage = "Stage2";
          self.descriptionData =
            "Congratulations! You reached right ON time!";
          self.titleData = "the church";
          self.imageSrcData = "B&W_St_Nikolaj_square.jpg";
          self.opened = true;
        } else {
           self.opened = true;
          self.stage = "Stage2b";
          self.descriptionData =
            "You didnt make it in time to see who called... Nevertheless,you found something.";
          self.titleData = "the church";
          self.imageSrcData = "B&W_St_Nikolaj_square.jpg";
                   
        }
      } else {
        console.log("go further!!!!!!!!!");
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

.overlay {
  position: absolute;
  top: 0px;
  z-index: 1000;
}

.username-input {
  font-size: 2em;
  color: #970303;
}

.story-box {
  font-size: 1.5em;
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
  border: none;
  height: 20%;
  color: #970303;
  font-size: 2em;
  margin-left: 25%;
  background-color: #e1e1e1;
}
</style>