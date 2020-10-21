<template>
  <div class="special-ops">
    <Chat v-bind:messages="getSpecialOps"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "SpecialOps",
  components: { Chat },
  computed: {
    ...mapGetters(["getSpecialOps"])
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
.special-ops {
  height: $content-fill;
}
</style>