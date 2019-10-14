<template>
  <div class="headbar ovhd ">
    <div class="fl padd-l-30 mar-t-20 fs-18">上海银龙建筑装饰绿化有限公司</div>
    <div class="fl right mar-l-100">
      <ul class="ovhd ul1 fl">
        <li v-for="route in routes"
            :key="route.path"
            v-if="route.hidden!==true"
            @click="changeLi(route.path)">{{route.meta.title||route.name}}</li>
      </ul>
      <ul class="right-menu fl mar-l-40 ovhd ul1">
        <li>
          <el-dropdown class="avatar-container">
            <div class="avatar-wrapper">
              <el-avatar shape="square"
                         name="touxiang"
                         size="small"
                         src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                         style="width:50px;height:50px;background:#fff;"> user </el-avatar>
              <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown"
                              class="user-dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  修改密码
                </el-dropdown-item>
              </router-link>
              <router-link to="/">
                <el-dropdown-item>
                  基本信息
                </el-dropdown-item>
              </router-link>
              <!-- <a target="_blank"
               href="https://github.com/PanJiaChen/vue-admin-template/">
              <el-dropdown-item>修改密码</el-dropdown-item>
            </a>
            <a target="_blank"
               href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>基本信息</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;"
                    @click="logout">Log Out</span>
            </el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <svg-icon icon-class="example" />
        </li>
        <li><i class="el-icon-setting" /></li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headbar",
  data() {
    return {
      tabVal: "1"
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    changeLi(route) {
      this.tabVal = route;
      this.$emit("childTabVal", this.tabVal);
      this.$router.push(this.tabVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.headbar {
  width: 100%;
  height: 60px;
  background-color: #1a86fe;
  color: #fff;
  .right {
    height: 100%;
    .ovhd {
      li {
        line-height: 60px;
        text-align: center;
        padding: 0 20px;
        float: left;
        height: 60px;
        font-size: 14px;
      }
      li:hover {
        cursor: pointer;
      }
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>