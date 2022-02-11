<template>
  <div>
    <!-- <p>后期考虑使用tailwind.css</p> -->
    <el-button @click="countStore.increment">{{ refCount.count }}</el-button>
    <el-button @click="plus">{{ num }}</el-button>
    <p>
      <el-button @click="goLogin">go to login</el-button>
    </p>
    <div class="bg-white rounded shadow border p-6 w-64">
      <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
      <p class="text-gray-700 text-sm">Content goes here</p>
    </div>
    <button class="btn">dsad</button>
  </div>
</template>

<script setup lang="ts" name="Home">
import { storeToRefs } from 'pinia'
import userStore from '@/store/user'
import router from '@/router'
const countStore = userStore()
const refCount = storeToRefs(countStore)
const goLogin = () => {
  router.push('/login')
}
const num = ref(0)
const plus = () => {
  num.value++
}
</script>

<style scoped lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-700;
}
</style>
