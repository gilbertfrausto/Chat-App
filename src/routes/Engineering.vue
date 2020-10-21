<template>
  <div class="engineering">
    <Chat v-bind:messages="getEngineering"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Engineering",
  components: { Chat },
  computed: {
    ...mapGetters(["getEngineering"])
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
.engineering {
  height: $content-fill;
}
</style>