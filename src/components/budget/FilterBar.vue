<template>
  <div class="filter-bar mb-4">
    <div class="btn-group w-100" role="group">
      <input
        type="radio"
        class="btn-check"
        name="filter"
        id="all"
        value="all"
        v-model="selectedFilter"
        @change="emitFilter"
      />
      <label class="btn btn-outline-primary" for="all"> Toutes </label>

      <input
        type="radio"
        class="btn-check"
        name="filter"
        id="income"
        value="income"
        v-model="selectedFilter"
        @change="emitFilter"
      />
      <label class="btn btn-outline-success" for="income"> Revenus </label>

      <input
        type="radio"
        class="btn-check"
        name="filter"
        id="expense"
        value="expense"
        v-model="selectedFilter"
        @change="emitFilter"
      />
      <label class="btn btn-outline-danger" for="expense"> Dépenses </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type FilterType = "all" | "income" | "expense";

const selectedFilter = ref<FilterType>("all");

const emit = defineEmits<{
  filter: [type: FilterType];
}>();

const emitFilter = () => {
  emit("filter", selectedFilter.value);
};
</script>

<style scoped>
.filter-bar {
  display: flex;
  gap: 0.5rem;
}

.btn-group {
  display: flex;
  gap: 0;
}

.btn {
  flex: 1;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 0.25rem;
}

.btn:last-child {
  margin-right: 0;
}

.btn-check:checked + .btn {
  font-weight: 600;
}
</style>
