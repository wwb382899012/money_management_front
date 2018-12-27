<template lang="html">
  <el-breadcrumb 
    separator="/" 
    class="app-breadcrumb">
    <span class="breadcrumb-loc">当前位置：</span>
    <el-breadcrumb-item 
      v-for="(item, index) in breadcrumbs" 
      :key="index">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'TpBreadcrumb',

  data() {
    return {
      breadcrumbs: []
    };
  },

  mounted() {
    this.breadcrumbs =
      (this.$parent && this.$parent.$route && this.$parent.$route.matched) ||
      [];
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  margin-bottom: 20px;
  background-color: #f2f6fc;
  line-height: 40px;
  padding-left: 20px;
}

.breadcrumb-loc {
  float: left;
  color: #409eff;
}
</style>
