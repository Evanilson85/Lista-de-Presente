<template>
  <div fluid class="containerForm">
      <form @submit.prevent="login" class="form">
          
          <h1>Login</h1>
          
          <input type='email' v-model="email" placeholder='Email' class="input" />
          
          <input type='password' v-model="password" placeholder='Senha' class="input" />

          <button type="submit" class="button">Next</button>
          <!-- <atom-spinner
          :animation-duration="1000"
          :size="60"
          :color="'#ff1d5e'"
     /> -->
     <HalfCircleSpinner
    :animation-duration="1000"
    :size="30"
    color="#ff1d5e"
  />
      </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HalfCircleSpinner } from "epic-spinners"
// import { auth } from '@/Firebase/index.js'
// import LoadButton from '@/components/Loader/buttonLoad.vue'

const email = ref<string>('')
const password = ref<string>('')

const login =  async () => {
  console.log(email.value, password.value)
    // this.load = true
    // const { email, password } = this;

    // try {
        
    //     const result = await auth(email, password);
    //     // console.log(result.user.email);
    //     console.log(window.uid);
    //     // this.$router.push({ name: 'Home' });
    //     this.load = false
    //     this.$store.commit('changeLoad', false)

    // } catch (error) {   
    //     console.log(error);
    //     this.load = false
    // }
}
</script>

<style scoped>
.containerForm {
	 height: 100%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 max-width: 500px;
	/* padding: 0;
	 */
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