<template>
  <el-button 
    :type="type" 
    :size="size" 
    :name="name"
    :params="params"
    @click.prevent="handleBack">返回</el-button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    name: {
      type: String,
      default: ''
    },
    params: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleBack() {
      if (
        this.$store.getters.routerFrom &&
        (this.$store.getters.routerFrom == 'dashboard' ||
          this.$store.getters.routerFrom == 'EodTradeReports' ||
          this.$store.getters.routerFrom == 'fullTradeReports')
      ) {
        this.$router.go(-1);
      } else {
        if (this.name && this.params) {
          this.$router.replace({
            name: this.name,
            params: this.params
          });
        } else if (this.name) {
          this.$router.replace({
            name: this.name
          });
        } else {
          this.$router.go(-1);
        }
      }
    }
  }
};
</script>
