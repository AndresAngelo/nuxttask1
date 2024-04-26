
<script setup lang="ts">
import { defineEmits } from 'vue'
import { useUserStore } from '@/stores/pinia'

const emit = defineEmits(['navigate'])
const userStore = useUserStore()

const suffixes = ref(['N/A', 'Jr.', 'Sr.', 'II', 'III'])
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const suffix = ref('')
const contactNumber = ref('')
const dateOfBirth = ref('')
const age = ref('')
const gender = ref('')
const email = ref('')
const consent = ref(false)
const password = ref('')
const confirmPassword = ref('')
const snackbar = ref(false)

const handleSubmit = () => {
  userStore.setCurrentRoute('Home')
}

const formattedData = computed(() => {
  return `
    First Name: ${firstName.value}
    Middle Name: ${middleName.value}
    Last Name: ${lastName.value}
    Suffix: ${suffix.value}
    Contact Number: ${contactNumber.value}
    Date of Birth: ${dateOfBirth.value}
    Age: ${age.value}
    Gender: ${gender.value}
    Email: ${email.value}
    Data Privacy Consent: ${consent.value ? 'Yes' : 'No'}
    Password: ${password.value}
    Confirm Password: ${confirmPassword.value}
  `;
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
    <v-form @submit.prevent="handleSubmit">
      <h3>Sign Up</h3>
        
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstName" label="First Name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="middleName" label="Middle Name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastName" label="Last Name"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="suffix" :items="suffixes" label="Suffix"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="contactNumber" label="Contact Number"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="dateOfBirth" label="Date of Birth" type="date"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="age" label="Age"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="gender" :items="['Male', 'Female', 'Other']" label="Gender"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-checkbox v-model="consent" label="I consent to data processing" required>
          </v-checkbox>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"></v-text-field>
        </v-col>
      </v-row>

      <v-btn color="primary" block @click="handleSubmit">Sign Up</v-btn>
    </v-form>

    </v-card>
    <div class="text-center ma-2">
    <v-btn
      @click="snackbar = true"
    >
      Open information
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ formattedData }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  </v-container>
  
</template>
