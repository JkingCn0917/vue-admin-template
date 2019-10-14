<template>
  <div class="dashboard-container">
    <div class="dashboard-text">进度</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "projectDetail",
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
