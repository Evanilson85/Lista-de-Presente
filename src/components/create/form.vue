<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Nome"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Categoria"
    ></v-select>

    <v-row class="my-5">
      <v-btn @click="handleReset" color="#F44336" variant="text"> Limpar </v-btn>
      <v-btn class="me-4" type="submit" color="green-darken-1" variant="text"> Criar </v-btn>
    </v-row>
  </form>
  <spring-spinner :animation-duration="2000" :size="60" color="#F44336" />
</template>

<script lang="ts">
import { ref } from 'vue'
import { SpringSpinner } from 'epic-spinners'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
  setup() {
    const store = useStore()
    const toast = useToast()

    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value: string) {
          if (value?.length >= 2) return true

          return 'Nome Obrigatorio.'
        },

        category(value: string) {
          if (value) return true

          return 'Selecione um Item.'
        },
      },
    })
    const name = useField('name')
    const select = useField('category')

    const items = ref([
      'Casa',
      'Banheiro',
      'Cozinha',
      'Eletrodomésticos',
      'Quarto',
      'Sala',
      'Lavanderia',
      'Móveis',
      'Outros',
    ])

    const submit = handleSubmit((values) => {
      const { name, category } = values
      const json = {
        name: name,
        email: '',
        check: false,
        category: category,
        sendRequestEmail: false,
      }

      create(json)
      // alert(JSON.stringify(values, null, 2))
    })

    const create = async (params: any) => {
      try {
        const result = await store.dispatch('createGift', params)
        console.log(result)
        toast.success('Presente criado com sucesso')
      } catch (error) {
        console.log(error)
      }
    }

    return { name, select, items, submit, handleReset }
  },
}
</script>
