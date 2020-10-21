<template>
  <div class="design">
    <Chat v-bind:messages="getDesign"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../components/Chat";
import { IM } from "../constants/index";

export default {
  name: "Design",
  components: { Chat },
  computed: {
    ...mapGetters(["getDesign"])
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

.design {
  height: $content-fill;
}
</style>