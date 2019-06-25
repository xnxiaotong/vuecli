<template>
  <div class="hello">
    <h1>我是信息页</h1>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$apis.mockLogin().then(res => {
      // console.log(res);
    });
  },
  methods: {
    jia() {
      // console.log()
      // 调用mutations里面同步方法的方法,使用commit
      this.$store.commit("add");
    },
    test() {
      // 调用actions里面异步方法的方法,使用dispatch
      // this.$store.dispatch("add");
      // 注册全局事件
      this.$eventHub.$emit("sub", { name: "Msea" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>


