<template>
  <div>
      <h1>我是新闻页</h1>
  </div>
</template>

<script>
export default {
  name: 'classs',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
   
  },
  methods:{
    test(){
      this.$eventHub.$emit("sub",{name:"Msea"})
    }
  }
}
</script>


