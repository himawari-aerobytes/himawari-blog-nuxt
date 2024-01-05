<template>
  <div class="m-6">
    <h1 class="text-xl">お問い合わせページ</h1>
    <v-form v-if="!isSubmitted && !isError" class="m-3">
      <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message.toString())" :counter="20"
        label="お名前" required @input="v$.name.$touch" @blur="v$.name.$touch"></v-text-field>

      <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message.toString())"
        label="E-mail" required @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>

      <v-textarea v-model="state.comment" :error-messages="v$.comment.$errors.map(e => e.$message.toString())" required
        @input="v$.comment.$touch" @blur="v$.comment.$touch" label="お問い合わせ内容"></v-textarea>

      <div class="flex justify-center mt-4">
        <v-btn class="me-4" @click="handleSubmit" :disabled="v$.$invalid || isSubmitted">
          送信
        </v-btn>
        <v-btn @click="clear">
          キャンセル
        </v-btn>
      </div>
    </v-form>
    <div v-else-if="isError">
      <div class="p-5 m-5">
        <SendFailed />
      </div>
    </div>
    <div v-else>
      <SendDone />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import SendDone from '@/components/SendDone.vue';
import SendFailed from '@/components/SendFailed.vue';
import ContactFormRepository from '~/repositories/ContactFormRepository';

let isSubmitted = ref(false);
let isError = ref(false);


const initialState = {
  name: '',
  email: '',
  comment: '',
}

const state = reactive({
  ...initialState,
})

const rules = {
  name: { required },
  email: { required, email },
  comment: { required }
}

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  state.comment = '';
  state.email = '';
  state.name = '';
  isSubmitted.value = false;
}


const handleSubmit = async () => {
  const body: ContactRequestType = {
    name: state.name,
    email: state.email,
    contactBody: state.comment
  };

  try {
    ContactFormRepository.postMessage(body);
    isSubmitted.value = true;
  } catch (error) {
    console.error(error);
    console.error("送信中にエラーが発生しました");
    isError.value = true;

  }

}
</script>

