<template>
  <div class="business">
    <Chat v-bind:messages="getBusiness"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Business",
  components: { Chat },
  computed: {
    ...mapGetters(["getBusiness"])
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

.business {
  height: $content-fill;
}
</style>