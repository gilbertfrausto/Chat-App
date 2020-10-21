<template>
  <div class="hr">
    <Chat v-bind:messages="getHr"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Hr",
  components: { Chat },
  computed: {
    ...mapGetters(["getHr"])
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
.hr {
  height: $content-fill;
}
</style>