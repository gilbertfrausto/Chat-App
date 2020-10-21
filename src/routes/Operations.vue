<template>
  <div class="operations">
    <Chat v-bind:messages="getOperations"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Operations",
  components: { Chat },
  computed: {
    ...mapGetters(["getOperations"])
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
.operations {
  height: $content-fill;
}
</style>