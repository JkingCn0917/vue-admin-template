<template>
  <div :class="{'has-logo':showLogo}"
       v-bind:tabVal="tabVal">
    <logo v-if="showLogo"
          :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :collapse="isCollapse"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :unique-opened="false"
               :active-text-color="variables.menuActiveText"
               :collapse-transition="false"
               mode="vertical">
        <sidebar-item v-for="route in routes"
                      :key="route.path"
                      :item="route"
                      :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  props: ["tabVal"],
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      //由于项目需求一级导航和二级、三级导航是分开的，所以这里要做一下过滤
      let res = this.$router.options.routes.filter(item => {
        return item.path == this.tabVal;
      });
      return res[0].children; //剔除导航一多余的包裹
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
