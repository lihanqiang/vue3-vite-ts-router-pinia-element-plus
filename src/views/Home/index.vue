<template>
  <div>
    <!-- <p>后期考虑使用tailwind.css</p> -->
    <button type="button" @click="userStore.increment">{{ refCount.count }}</button>
    <button type="button" @click="plus">{{ num }}</button>
    <p>
      <el-button @click="goLogin">go to login</el-button>
    </p>
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

<style scoped lang="scss">
</style>
