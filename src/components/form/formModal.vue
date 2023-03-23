<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :error-messages="name.errorMessage.value"
      label="Nome"
      bg-color="#f4f8f7"
      color="#71a9dd"
    ></v-text-field>

    <v-textarea
      bg-color="#f4f8f7"
      v-model="message.value.value"
      color="#71a9dd"
      label="Digite a sua Mesagem ( Opcional )"
    ></v-textarea>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#F44336" variant="text" @click="close"> Fechar </v-btn>
      <v-btn color="green-darken-1" variant="text" type="submit"> Confirmar </v-btn>
    </v-card-actions>
  </form>
</template>

<script lang="ts">
import { ref, defineEmits } from 'vue'
import { useField, useForm } from 'vee-validate'
// const emit = defineEmits(['inFocus', 'submit', 'closeModal'])
export default {
  emits: ['inFocus', 'submit', 'closeModal', 'sendUpdate'],
  setup(props, ctx) {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value: string) {
          if (value?.length >= 2) return true

          return 'Nome obrigatorio'
        },
        message(value = '') {
          return true
        },
      },
    })

    const name = useField('name')
    const message = useField('message')

    const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

    const close = () => {
      ctx.emit('closeModal', false)
    }

    const submit = handleSubmit((values: any) => {
      // alert(JSON.stringify(values, null, 2))
      ctx.emit('sendUpdate', values)
      // close()
    })

    return { name, items, submit, handleReset, close, message }
  },
}
</script>
<style scoped>
label {
  font-size: 13px;
}
</style>
