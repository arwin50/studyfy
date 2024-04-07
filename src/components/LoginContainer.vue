<template>
  <div class="w-[40%] bg-white border rounded-sm flex flex-col items-center p-2 space-y-4 mt-32">
    <span class="text-xl font-semibold">Login</span>
    <div class="flex gap-2">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" class="border" />
    </div>
    <div class="flex gap-3">
      <label for="password">Password</label>
      <input type="text" id="password" name="password" class="border" />
    </div>
    <hr />
    <button class="hover:text-gray-400" @click="loginWithGoogle">
      <span class="flex gap-2 items-center"
        >Login with Google
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256"
          class="h-5"
      /></span>
    </button>
  </div>
</template>

<script setup>
const loginWithGoogle = () => {
  window.open('http://localhost:5000/auth/google/callback', '_self')
}
</script>
