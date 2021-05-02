<template>
  <div class="container">
    <h1>Escape game</h1>
    <h2>Do you dare solving Kolding's greatest mystery?</h2>
    <div class="input">
      <input
        class="your-name"
        type="text"
        placeholder="Your name"
        v-model="username"
      />
      <button class="start-button" @click="SaveUsername">Start the game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeScreen",
  props: {},
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    SaveUsername: function () {

        let username = this.username
        let router = this.$router
        
      //if the username field is empty throw an error
      if (this.username === "") {
        alert("username cannot be empty");  
      } else {
        //Set localstorage 'username' to the input value
        setLocalStorage(function(){
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
  margin-left: 25%;
}

.start-button {
  display: block;
  width: 50%;
}

.your-name {
  width: 50%;
}
</style>