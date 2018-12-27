<template>
  <section class="app">
    <template v-if="!$route.meta.hidden">
      <header class="app-header">
        <router-link 
          :to="{path: '/'}"
          class="app-header_logo">
          <i 
            class="el-icon-menu app-header_toggle_icon" 
            @click.stop.prevent="toggleSidebar"></i> 中智诚集团
          <span class="app-header__system_name">资金管理系统</span>
        </router-link>
        <div 
          v-if="$store && $store.getters && $store.getters.name"
          class="app-header_user_info">
          <span class="app-header_welcome_info">您好！{{ $store.getters.name }}</span>
          <router-link 
            :to="{path: '/'}">
            <el-badge 
              v-if="$store && $store.getters && $store.getters.unreadNewsAmount" 
              :style="{position: 'relative', top: '-3px', marginLeft: '10px', 
                       marginRight: $store && $store.getters && $store.getters.unreadNewsAmount ? ($store.getters.unreadNewsAmount > 99 ? '30px' : '20px') : '10px'}"
              :value="$store.getters.unreadNewsAmount" 
              :max="99" 
              class="item">
              <i class="el-icon-bell"></i>
            </el-badge>
            <i 
              v-else 
              style="margin-left: 10px;margin-right: 10px"
              class="el-icon-bell"></i>
          </router-link>
          <span class="app-header_logout">
            <i 
              class="el-icon-fa-power-off" 
              @click="logout"></i>
          </span>
        </div>
      </header>
      <el-aside 
        v-if="routers.length"
        :width="asideWidth"
        class="app-sidebar">
        <el-menu 
          :default-active="activeMenu" 
          :unique-opened="uniqueOpened" 
          :collapse="$store.getters.sidebar" 
          :class="{'app-sidebar-collapse': $store.getters.sidebar}"
          background-color="#34445C"
          text-color="#ffffff" 
          active-text-color="#409EFF" 
          router>
          <template v-for="(route, index) in routers[routers.length - 3].children">
            <template v-if="route.children && route.name">
              <el-submenu 
                :index="route.name" 
                :key="'home'+index">
                <template slot="title">
                  <i :class="route.iconClass"></i>
                  <span slot="title">{{ route.title }}</span>
                </template>
                <el-menu-item 
                  v-for="(cRoute, cIndex) in route.children" 
                  v-show="!cRoute.hidden || activeMenu == cRoute.name" 
                  :index="cRoute.name" 
                  :key="'home'+cIndex"
                  :route="cRoute">{{ cRoute.title }}</el-menu-item>
              </el-submenu>
            </template>
            <template v-if="!route.children && route.name">
              <el-menu-item 
                :index="route.name" 
                :key="'home'+index" 
                :route="route">
                <i :class="route.iconClass"></i>
                <span slot="title">{{ route.title }}</span>
              </el-menu-item>
            </template>
          </template>
          <template v-for="(route, index) in routers[routers.length - 2].children">
            <template v-if="route.children && route.name">
              <el-submenu 
                :index="route.name" 
                :key="'other'+index">
                <template slot="title">
                  <i :class="route.iconClass"></i>
                  <span slot="title">{{ route.title }}</span>
                </template>
                <el-menu-item 
                  v-for="(cRoute, cIndex) in route.children" 
                  v-show="!cRoute.hidden || activeMenu == cRoute.name" 
                  :index="cRoute.name" 
                  :key="'other'+cIndex"
                  :route="cRoute">{{ cRoute.title }}</el-menu-item>
              </el-submenu>
            </template>
            <template v-if="!route.children && route.name">
              <el-menu-item 
                :index="route.name" 
                :key="'other'+index" 
                :route="route">
                <i :class="route.iconClass"></i>
                <span slot="title">{{ route.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main 
        :style="leftStyleObj"
        class="app-main">
        <transition 
          enter-active-class="animated bounceInLeft">   
          <router-view></router-view>
        </transition>
      </el-main>
    </template>
    <template v-else>
      <transition 
        enter-active-class="animated bounceInLeft">   
        <router-view></router-view>
      </transition>
    </template>
  </section>
</template>

<script>
import { getUnreadNewsList } from '@/api/news';

export default {
  data() {
    return {
      activeMenu: '',
      uniqueOpened: true
    };
  },
  computed: {
    routers() {
      return this.$store &&
        this.$store.getters &&
        this.$store.getters.permissionRouters
        ? JSON.parse(JSON.stringify(this.$store.getters.permissionRouters))
        : [];
    },
    leftStyleObj() {
      return {
        paddingLeft:
          this.$store && this.$store.getters && !this.$store.getters.sidebar
            ? '220px'
            : '84px'
      };
    },
    asideWidth() {
      return this.$store && this.$store.getters && !this.$store.getters.sidebar
        ? '200px'
        : '64px';
    }
  },
  watch: {
    $route() {
      this.activeMenu = this.$route.name;
    }
  },
  created() {
    this.activeMenu = this.$route.name;
    if (this.$store && this.$store.getters && this.$store.getters.token) {
      getUnreadNewsList({
        page: 1,
        limit: 1
      })
        .then(res => {
          this.$store.dispatch('SetUnreadNewsAmount', parseInt(res.data.count));
        })
        .catch(() => {});
    }
  },
  methods: {
    logout() {
      this.mconfirm('确定要注销吗?')
        .then(() => {
          this.$store
            .dispatch('ServerLogOut')
            .then(() => {
              this.$store.dispatch('FedLogOut').then(() => {
                window.location.reload();
              });
            })
            .catch(() => {
              this.$store.dispatch('FedLogOut').then(() => {
                window.location.reload();
              });
            });
        })
        .catch(() => {});
    },
    toggleSidebar() {
      this.$store.dispatch('ToggleSideBar');
    }
  }
};
</script>

<style lang="scss">
$headerBg: #324157;
$sidebarBg: #34445c;
$menuActiveBg: #2a364a;

// 头部
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background-color: $headerBg;
  color: #fff;
  box-sizing: border-box;
  padding: 0 10px;
}

.app-header_logo {
  font-size: 2.4rem;

  .app-header_toggle_icon {
    transition: 0.3s linear all;
  }
  .app-header_toggle_icon:hover {
    transform: rotate(180deg);
  }
  .app-header__system_name {
    font-size: 1.8rem;
  }
}
.app-header_user_info {
  i {
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
  }
  i:before {
    color: #ffffff;
    font-size: 2rem;
  }

  i:hover::before {
    color: #e6a23c;
    cursor: pointer;
  }
}
.app-header_welcome_info {
  font-size: 2rem;
}

// 侧边栏菜单
.app-sidebar {
  position: fixed;
  top: 48px;
  left: 0;
  height: 100%;
  z-index: 99;
  background-color: $sidebarBg;

  .el-menu {
    border-right: 0;
  }

  .el-menu-item.is-active {
    background: rgb(42, 54, 74) !important;
  }

  .el-submenu {
    .el-menu-item {
      padding-left: 54px !important;
    }
  }

  .el-submenu.is-active i:first-child {
    color: #ffffff;
  }

  .app-sidebar-collapse .el-submenu.is-active i:first-child {
    color: rgb(64, 158, 255);
  }
}

// 页面主体
.app-main {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 70px;
  padding-right: 20px;
}
.app-main .abstract {
  height: 100%;
}
.app-main .app-page-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-main .app-page-body {
  .content-container {
    overflow: auto;
  }
}
</style>
