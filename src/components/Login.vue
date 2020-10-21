<template>
  <div class="login">
    <input
      class="login__input"
      type="text"
      v-model="username"
      placeholder="Type your username..."
      v-on:keyup.enter="updateName(username)"
    >
    <button class="login__button" @click="updateName(username)">Join Chat!</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: ""
    };
  },
  computed: {
    ...mapMutations(["setUserName"])
  },
  methods: {
    updateName(name) {
      this.$store.commit("setUserName", name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
@import "../scss/mixins";

.login {
  height: 100%;
  width: 100%;
  @include flex(column);
  @include flex-center;

  .login__input {
    padding: 15px;
    margin: {
      top: 10px;
      bottom: 10px;
    }
    border: 1px solid $chat-input-border;
    width: 80%;
    max-width: $login-form-elements-width;
    box-sizing: border-box;
    font-size: $login-font-size;
  }

  .login__button {
    color: $light;
    padding: 15px;
    border: none;
    cursor: pointer;
    background-color: $room-bg-color;
    width: 80%;
    max-width: $login-form-elements-width;
    border-radius: 4px;
    font-size: $login-font-size;
  }
}
</style>