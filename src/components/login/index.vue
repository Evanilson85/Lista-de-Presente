<template>
  <div fluid class="containerForm">
    <form @submit.prevent="login" class="form">
      <h1>Login</h1>

      <input type="email" v-model="email" placeholder="Email" class="input" />

      <input type="password" v-model="password" placeholder="Senha" class="input" />

      <button type="submit" class="button" :disabled="load">
        <spring-spinner v-if="load" :animation-duration="1000" :size="30" color="#ffff" />
        <span v-else> Entrar </span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SpringSpinner } from 'epic-spinners'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

const email = ref<string>('')
const password = ref<string>('')
// const email = ref<string>('evanilson@gmail.com')
// const password = ref<string>('teste')
const load = ref<boolean>(false)
const router = useRouter()
const store = useStore()
const toast = useToast()

const login = async () => {
  load.value = true
  try {
    const result = await store.dispatch('login', { email: email.value, password: password.value })
    router.push('/')
    load.value = false
    toast.success(`Seja bem vindo ${result.data.user.name} `, {
      timeout: 2000,
    })
    return result
  } catch (error) {
    load.value = false
    toast.error(`Ops! login invalido. `, { timeout: 2000 })
  }
}
</script>

<style scoped>
.containerForm {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}
.containerForm h1 {
  color: var(--colorTextInput);
  margin-bottom: 5rem;
  font-size: 32px;
  font-weight: bold;
}
.containerForm .form {
  width: 95%;
  margin: 0 auto;
}
.containerForm .form .input {
  color: var(--colorTextInput);
  border: none;
  background: var(--colorWhite);
  margin-bottom: 40px;
  height: 58px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  transition: 0.2s ease-out;
}
.containerForm .form .input::placeholder {
  color: var(--colorPlaceholder);
}
.containerForm .form .input:focus {
  outline: 1px solid var(--colorButton);
}
.containerForm .form .button {
  background-color: var(--colorButton);
  height: 58px;
  width: 100%;
  color: var(--colorWhite);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.containerForm .form .button:hover {
  background-color: var(--colorButtonHover);
}
.containerForm .form h6 {
  color: var(--textLogin);
  font-size: 15px;
  margin: 15px 0;
  font-weight: bold;
}
.containerForm .form hr {
  height: 2px;
  border: none;
  background: var(--hr);
  border-radius: 5px;
}
</style>
