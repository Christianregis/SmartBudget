<template>
  <div class="not-found-view">
    <div class="container text-center py-5">
      <h1 class="display-1 fw-bold text-danger">404</h1>
      <p class="fs-3 fw-bold text-dark mb-4">
        Oups ! Page non trouvée
      </p>
      <p class="lead text-muted mb-4">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <router-link to="/" class="btn btn-primary btn-lg">
        Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.display-1 {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.btn-lg {
  padding: 0.75rem 2rem;
  font-weight: 600;
}
</style>
