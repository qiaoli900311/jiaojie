<template>
  <div class="container">
    {{msg}}
    <el-button @click="testEvent">你好世界</el-button>
  </div>
</template>
<script>
export default {
  name: 'hello-world',
  props: {
    msg: {
      type: String,
      default: 'hello-world'
    }
  },
  methods: {
    testEvent() {
      this.$emit('hello-world')
    }
  }
}
</script>
<style>
.container {
  text-align: center;
}
</style>
