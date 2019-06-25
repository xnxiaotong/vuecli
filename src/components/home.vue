<template>
  <div>
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        v-wechat-title="$route.meta.title"
        img-set="/static/logo.png"
      />
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      v-wechat-title="$route.meta.title"
      img-set="/static/logo.png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>


