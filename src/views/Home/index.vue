<template>
  <div>
    <p class="m-10">使用tailwind.css</p>
    <button class="m-2" type="button" @click="userStore.increment">{{ refCount.count }}</button>
    <button class="m-2" type="button" @click="plus">{{ num }}</button>
    <p>
      <el-button @click="goLogin">go to login</el-button>
    </p>
    <div class="bg-white rounded shadow border m-10 p-6 w-64 mx-auto">
      <h5 class="text-3xl font-bold mb-4 mt-0 center">My Title</h5>
      <p class="text-gray-700 text-sm">Content goes here</p>
    </div>
    <button class="btn">hover me</button>
  </div>
</template>

<script setup lang="ts" name="Home">
import { storeToRefs } from 'pinia'
import useUserStore from '@/store/user'
import router from '@/router'
const userStore = useUserStore()
const refCount = storeToRefs(userStore)
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
