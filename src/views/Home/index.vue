<template>
  <div>
    <!-- <p>后期考虑使用tailwind.css</p> -->
    <button type="button" class="w-32 text-cyan-600" @click="countStore.increment">{{ refCount.count }}</button>
    <p>
      <el-button @click="goHello">go</el-button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import userStore from '@/store/user'
import router from '@/router'
const countStore = userStore()
const refCount = storeToRefs(countStore)
const goHello = () => {
  router.push('/Hello')
}
</script>

<style scoped lang="scss">
  span {
    color: red;
  }
</style>
