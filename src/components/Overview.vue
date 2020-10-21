<template>
  <div class="overview">
    <h2>{{$route.name}}</h2>

    <ul class="overview__users">
      <li v-for="(name, index) in user" v-bind:key="name">
        <p
          class="overview__users-name"
          :class="{'overview__users-name--self': name === getUsername}"
        >
          {{name}}
          <span v-if="index < user.length - 1">,</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Overview",
  data() {
    return {
      length: 0
    };
  },
  computed: {
    user() {
      return this.$store.getters[`get${this.$route.name}`].reduce(
        (all, item) => {
          if (!all.includes(item.name)) {
            all.push(item.name);
          }

          return all;
        },
        []
      );
    },
    ...mapGetters(["getUsername"])
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
@import "../scss/mixins";

.overview {
  z-index: 10;
  text-align: center;
  min-height: $overview-height;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  @include flex(column);
  @include flex-center;

  h2 {
    color: $overview-route-color;
  }

  .overview__users {
    @include flex;
  }

  .overview__users-name {
    padding: {
      left: 5px;
      right: 5px;
    }
    margin: none;
    color: $overview-route-color;

    &.overview__users-name--self {
      color: $room-bg-color;
    }
  }
}
</style>