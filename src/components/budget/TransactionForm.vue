<template>
  <AppCard title="Ajouter une transaction">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Titre</label>
        <input
          id="title"
          v-model="formData.title"
          type="text"
          class="form-control"
          placeholder="Ex: Salaire, Courses..."
          required
        />
      </div>

      <div class="mb-3">
        <label for="amount" class="form-label">Montant</label>
        <input
          id="amount"
          v-model.number="formData.amount"
          type="number"
          class="form-control"
          placeholder="0.00"
          step="0.01"
          min="0"
          required
        />
      </div>

      <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <select v-model="formData.type" id="type" class="form-select" required>
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
        </select>
      </div>

      <div class="d-grid">
        <AppButton type="submit" variant="primary">
          Ajouter
        </AppButton>
      </div>
    </form>
  </AppCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

interface FormData {
  title: string
  amount: number
  type: 'income' | 'expense'
}

const formData = ref<FormData>({
  title: '',
  amount: 0,
  type: 'expense',
})

const emit = defineEmits<{
  submit: [data: FormData]
}>()

const submitForm = () => {
  if (formData.value.title && formData.value.amount > 0) {
    emit('submit', { ...formData.value })
    formData.value = {
      title: '',
      amount: 0,
      type: 'expense',
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-label {
  font-weight: 500;
  color: #333;
}

.form-control,
.form-select {
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 0.75rem;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}
</style>
