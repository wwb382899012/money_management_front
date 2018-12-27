<template lang="html">
  <div class="abstract">
    <el-row v-if="children">
      <el-col 
        v-for="(route, index) in children" 
        v-if="!route.hidden" 
        :xs="10" 
        :sm="8" 
        :md="6" 
        :lg="4" 
        :offset="index > 0 ? 2 : 0"
        :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <div class="abstract__card-wrapper">
            <div class="abstract__card-img">
              <img 
                :src="route.imgUrl" 
                type="image/webp">
            </div>
            <div class="abstract__card-text">
              <p>{{ route.meta.title }}</p>
              <router-link :to="{name: route.name}">查看</router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <transition 
      enter-active-class="animated bounceInLeft">   
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      children: null
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let children = vm.$route.meta.children;
      if (children) {
        vm.children = children;
      } else {
        vm.children = null;
      }
    });
  },
  watch: {
    $route() {
      let children = this.$route.meta.children;
      if (children) {
        this.children = children;
      } else {
        this.children = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.abstract__card-wrapper {
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 150px;
  }
}

.abstract__card-img {
  height: 150px;
}
.abstract__card-text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #20a0ff;
  }
}
</style>
