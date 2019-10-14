<template>
  <div :class="classObj"
       class="app-wrapper">
    <headbar v-on:childTabVal="childTabVal"></headbar>
    <div v-if="device==='mobile'&&sidebar.opened"
         class="drawer-bg"
         @click="handleClickOutside" />

    <div style="position:fixed;height:100%;width:100%;">
      <sidebar class="sidebar-container"
               :tabVal='tabVal' />
      <div class="main-container">
        <div :class="{'fixed-header':fixedHeader}">
          <navbar />
        </div>
        <app-main />
      </div>
    </div>

  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Headbar } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Headbar
  },
  mixins: [ResizeMixin],
  data() {
    return { tabVal: "/" };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    childTabVal: function(childValue) {
      // childValue就是子组件传过来的值
      this.tabVal = childValue;
      console.log("child 传过来的", childValue, "tab", this.tabVal);
    },
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
