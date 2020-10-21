<template>
  <div class="analytics">
    <Chat v-bind:messages="getAnalytics"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Analytics",
  components: { Chat },
  computed: {
    ...mapGetters(["getAnalytics"])
  },
  data() {
    return {
      messages: IM
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
.analytics {
  height: $content-fill;
}
</style>