<template>
  <div class="h-screen w-64 bg-gray-900 text-white flex flex-col">
    <div class="p-5 text-lg font-bold border-b border-gray-700">
      My Dashboard
    </div>
    
    <nav class="flex-1 p-4 space-y-2">
      <router-link to="/" class="sidebar-item">
        <i class="fas fa-home"></i> Dashboard
      </router-link>
      <router-link to="/wallets" class="sidebar-item">
        <i class="fas fa-wallet"></i> Wallets
      </router-link>
      <router-link to="/settings" class="sidebar-item">
        <i class="fas fa-cog"></i> Settings
      </router-link>
    </nav>
    
    <div class="p-4 border-t border-gray-700">
      <button class="w-full p-2 bg-red-500 rounded-md hover:bg-red-600">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar-item {
  @apply flex items-center space-x-2 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700;
}
</style>

