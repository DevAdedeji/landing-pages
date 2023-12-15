<template>
  <main class="bg-white">
    <Navbar />
    <Hero />
    <div class="flex flex-col items-center justify-center gap-6 py-20">
      <p class="uppercase text-lg tracking-wide">
        Businesses worldwide ❤️ primer
      </p>
      <div class="flex items-center gap-10">
        <img src="@/assets/primer/b1.png" />
        <img src="@/assets/primer/b2.png" />
        <img src="@/assets/primer/b3.png" />
        <img src="@/assets/primer/b4.png" />
        <img src="@/assets/primer/b5.png" />
        <img src="@/assets/primer/b6.png" />
        <img src="@/assets/primer/b7.png" />
      </div>
    </div>
    <Automation />
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/primer/navbar.vue";
import Hero from "@/components/primer/hero.vue";
import Automation from "@/components/primer/automation.vue";
</script>
