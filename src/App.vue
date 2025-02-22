<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <Navbar />

      <!-- Main Content -->
      <div class="p-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

