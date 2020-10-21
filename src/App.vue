<template>
  <div id="app">
    <Rooms v-if="getUsername"/>

    <aside class="content" v-if="getUsername">
      <Overview/>
      <router-view></router-view>
    </aside>

    <Login v-if="!getUsername"/>
  </div>
</template>

<script>
import Rooms from "./components/Rooms";
import Overview from "./components/Overview";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Rooms,
    Overview,
    Chat,
    Login
  },
  computed: {
    ...mapGetters(["getUsername"])
  },
  created() {
    this.$store.dispatch("bindAnalytics");
    this.$store.dispatch("bindBusiness");
    this.$store.dispatch("bindDesign");
    this.$store.dispatch("bindEngineering");
    this.$store.dispatch("bindHr");
    this.$store.dispatch("bindOperations");
    this.$store.dispatch("bindSpecialOps");
  }
};
</script>

<style lang="scss">
@import "./scss/global";
@import "./scss/mixins";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  @include flex;
}

.content {
  width: 100%;
  @include flex(column);
  @include flex-space-between;
}
</style>
