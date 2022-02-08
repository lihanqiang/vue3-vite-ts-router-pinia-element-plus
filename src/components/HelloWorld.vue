<template>
  <div>
    <el-button @click="back">back</el-button>
</div>
</template>

<script lang="ts" setup="setup">
import router from '@/router'
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped></style>
