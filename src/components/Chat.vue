<template>
  <div class="chat">
    <div class="chat__window">
      <div
        class="chat__window-text"
        v-for="(message, index) in getMessages"
        :key="index"
        :class="{'chat__window-text-self': message.name === getUsername}"
      >
        <p class="chat__window-text-message">{{message.message}}</p>
        <p class="chat__window-text-name">{{message.name}}</p>
        <p>{{this.route}}</p>
      </div>
    </div>
    <div class="chat__tools">
      <input
        type="chat"
        placeholder="Type a message..."
        v-model="chat"
        v-on:keyup.enter="send(chat)"
      >
      <button @click="send(chat)" class="chat__tools-btn">Send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "../db";
import "firebase/firestore";

export default {
  name: "Chat",
  props: ["messages"],
  data() {
    return {
      chat: "",
      route: this.$route.name.toLowerCase(),
      instantMessages: this.messages
    };
  },
  computed: {
    getMessages() {
      const mess = [...this.instantMessages];
      return mess.sort((a, b) => {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      });
    },
    ...mapGetters(["getUsername"])
  },
  mounted() {
    let container = this.$el.querySelector(".chat__window");
    container.scrollTop = container.scrollHeight + 600;
  },
  methods: {
    send(message) {
      if (!message) return;

      const textMessage = {
        message,
        index: this.instantMessages.length,
        name: this.getUsername
      };

      db.collection(this.route)
        .add(textMessage)
        .then(() => {
          console.log("done");
        });

      let container = this.$el.querySelector(".chat__window");
      container.scrollTop = container.scrollHeight + 600;
      this.chat = "";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/vars";
@import "../scss/mixins";

.chat {
  height: 100%;
  overflow: hidden;
  @include flex(column);
  @include transition;
  .chat__window {
    /* max-height: $chat-content-height;*/
    overflow: scroll;
    background-color: $content-bg-color;
    @include flex(column);
    @include flex-auto;
    @include transition;

    .chat__window-text {
      padding: 20px;
      @include flex(column);
      @include flex-start;
      @include transition;

      &.chat__window-text-self {
        @include flex-end;
        .chat__window-text-name {
          display: none;
        }
        .chat__window-text-message {
          color: $light;
          background: $room-bg-color;
        }
      }
    }

    .chat__window-text-name {
      color: gray;
    }
    .chat__window-text-message {
      width: 500px;
      color: $chat-text-color;
      background: $light;
      border-radius: 30px;
      padding: 15px;
      text-align: justify;
    }
  }
  .chat__tools {
    padding: 20px;
    max-height: $chat-height;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    @include flex;
    @include flex-space-between;

    input {
      border: 1px solid $chat-input-border;
      padding: 10px;
      @include flex;
      @include flex-auto;
    }

    .chat__tools-btn {
      border: none;
      outline: none;
      cursor: pointer;
      color: $chat-btn-color;
      margin: {
        left: 10px;
        right: 10px;
      }
      background-color: transparent;
      @include transition;

      &:hover,
      &:active {
        background-color: rgb(230, 230, 232);
      }
    }
  }
}
</style>

