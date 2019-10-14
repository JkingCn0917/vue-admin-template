<template>
  <div class="dashboard-container">
    <div class="dashboard-text">招投标详情</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "zblist",
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
