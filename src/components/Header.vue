<template>
  <div class="editor__header">
    <nav class="ctas">
      <span class="bullet"></span>
      <span class="bullet"></span>
      <span class="bullet"></span>
    </nav>

    <nav class="menu">
      <router-link :to="{ path: '/' }">Editor Font</router-link>
      <router-link :to="{ path: '/about' }">About</router-link>
    </nav>
  </div>
</template>
