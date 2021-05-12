<template>
  <div class="container">
    <TopBar 
    title='Welcome'
    imageName="B&W_St_Nikolaj.jpg"
    ></TopBar>
    <div class="story-box">
      <p class="welcome-box">
        To solve riddles by using your phone, the game needs permission to access its camera, sensors and GPS.

By continuing you accept these terms. 
Enjoy!



      </p>
    </div>
      <div class="input">
        <input
          class="your-name"
          type="text"
          placeholder="insert your name"
          v-model="username"
        />
        <button class="start-button" @click="SaveUsername">
          Start game
        </button>
      </div>
    </div>

</template>

<script>
import TopBar from "./TopBar"


export default {
  name: "WelcomeScreen",
  components: {TopBar},
  props: {},
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    SaveUsername: function () {
      let username = this.username;
      let router = this.$router;

      //if the username field is empty throw an error
      if (this.username === "") {
        alert("username cannot be empty");
      } else {
        //Set localstorage 'username' to the input value
        setLocalStorage(function () {
          router.push("stage1");
        });
      }
      function setLocalStorage(callback) {
        localStorage.setItem("username", username);
        callback();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 100%;
align-items: center;
}

.start-button {
  display: block;
  font-family: "Bangers", cursive;
  width: 50%;
  border-radius: 15px;
  border:none;
  height: 20%;
  color: #970303;
  font-size: 2em;
  padding: 5%;
  margin-top: 5%;

}

.your-name {
  width: 80%;
  border:none;
  border-bottom: 2px solid black;
  font-size: 1.5em;
  font-family: "Bangers", cursive;
}

.story-box {
  width: 80%;
  margin-left: 10%;
}

.welcome-box{
  font-family: 'Unica One', cursive;

}
</style>