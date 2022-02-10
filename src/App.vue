<template>
  <el-config-provider size="small" :zIndex="3000">
    <router-view v-slot="{ Component }">
      <!-- cache the component -->
      <keep-alive :include="[/*'Home'*/]">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<style>
</style>
