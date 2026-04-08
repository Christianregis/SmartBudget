<template>
  <div class="main-layout">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand fw-bold">
          SmartBudget
        </router-link>
        <button
          class="navbar-toggler"
          type="button"

        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">
                Tableau de bord
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/transactions" class="nav-link" active-class="active">
                Transactions
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="main-content py-4">
      <div class="container-fluid">
        <slot />
      </div>
    </main>

    <footer class="footer mt-5 py-3 bg-light border-top">
      <div class="container-fluid text-center text-muted">
        <small>&copy; 2024 SmartBudget - Gestionnaire de Budget Personnel</small>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.navbar-brand {
  font-size: 1.5rem;
}

.nav-link.active {
  font-weight: 600;
  border-bottom: 2px solid white;
}

.footer {
  margin-top: auto;
}
</style>
