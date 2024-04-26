<script setup lang="ts">
import { useUserStore } from '@/stores/pinia'

const userStore = useUserStore()

const handleNavigation = (route: string) => {
  userStore.setCurrentRoute(route)
}
</script>

<template>
  <Nav @navigate="handleNavigation" />
  <div id="app" class="bg-pink-400 min-h-screen flex justify-center items-center">
    <div class="main-container flex flex-col md:flex-row">
      <div class="image-container md:w-1/2 flex justify-center">
        <img src="@/assets/images/cbper-1.gif" 
        alt="TaskLogo" 
        class="image rounded-lg" />
      </div>
      <div class="wrapper-container md:w-1/2">
        <div class="auth-wrapper">
          <div class="auth-inner">
            <div v-if="userStore.currentRoute === 'Login'">
              <Login @navigate="handleNavigation" />
            </div>
            <div v-else-if="userStore.currentRoute === 'Signup'">
              <Signup  @navigate="handleNavigation" />
            </div>
            <div v-else-if="userStore.currentRoute === 'Home'">
              <Home @navigate="handleNavigation"/>
            </div>
            <component :is="userStore.currentRoute" @navigate="handleNavigation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
