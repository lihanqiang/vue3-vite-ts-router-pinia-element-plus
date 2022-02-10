<template>
  <div>
    <p>
      {{ login }}
    </p>
    <el-button @click="back">back</el-button>
  </div>
</template>

<script setup lang="ts" name="Login">
import router from '@/router'
const login = ref('login')
const back = () => {
  router.back()
}
</script>

<style scoped lang="scss">
</style>
