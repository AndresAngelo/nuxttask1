<script setup lang="ts">
import { defineEmits } from 'vue'
import { useUserStore } from '@/stores/pinia'

const emit = defineEmits(['navigate'])
const userStore = useUserStore()

const goToSignup = () => {
  userStore.setCurrentRoute('Signup')
}

const handleSubmit = () => {
  userStore.setCurrentRoute('Home')
}

const visible = ref(false)
const email = ref('')
const password = ref('')
</script>



<template>
  <v-container class="justify-center">
    <v-container class="d-flex ml-16">
    <v-img class="mx-10 justify-center" max-width="928">
        <div class="image-container md:w-1/2 flex justify-center">
        <img src="assets/images/cbper-logo.gif" 
        alt="TaskLogo" 
        class="image rounded-lg" />
      </div>
    </v-img>
    </v-container>
    <v-form fast-fail @submit.prevent="handleSubmit">
        
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field v-model="email" density="compact"  placeholder="Email address" prepend-inner-icon="mdi-email-outline"
            variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password

            <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>

        <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible"></v-text-field>

        <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal">
            Log In
        </v-btn>

        <v-card-text class="text-center">
            <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank" @click.prevent="goToSignup">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
        </v-card-text>
        </v-card>
    </v-form>

    <div v-if="email || password" class="mt-3">
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
    </div>

</v-container>
</template>