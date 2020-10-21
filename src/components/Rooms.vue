<template>
  <aside class="rooms">
    <!-- username/activity-->
    <div class="rooms__user">
      <h2 class="rooms__user-username">{{getUsername}}</h2>
      <p>{{date}}</p>
    </div>

    <!-- Rooms -->
    <ul class="room__links">
      <li class="room__links-item" v-for="room of this.rooms" v-bind:key="room.name">
        <router-link :to="room.path" replace exact>{{room.name}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import { routes } from "../router/index";

export default {
  name: "Rooms",
  computed: {
    ...mapGetters(["getUsername"])
  },
  data() {
    console.log(routes);
    return {
      username: "Ryan Gonzalez",
      date: "Online Now",
      rooms: routes
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
@import "../scss/mixins";

.rooms {
  height: 100%;
  background-color: $room-bg-color;
  width: $room-max-width;

  .rooms__user {
    padding: {
      top: 30px;
    }
    .rooms__user-username {
      color: white;
      margin: 0;
    }
    p {
      color: $room-links;
      margin: 0;
    }
  }

  .room__links {
    padding: 0;
    margin: {
      top: 40px;
      bottom: 20px;
    }
    list-style: none;

    .room__links-item {
      width: 100%;

      a {
        color: $room-links;
        width: 100%;
        text-decoration: none;
        min-height: 50px;
        background-color: transparent;
        @include flex;
        @include flex-center;
        @include transition;

        &.router-link-active {
          background-color: $room-link-active;
        }
        &:hover {
          background-color: $room-link-hover;
        }
      }
    }
  }
}
</style>