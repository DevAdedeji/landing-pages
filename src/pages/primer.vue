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
    <Features />
    <Payment />
    <div class="py-20 w-[90%] mx-auto flex items-center justify-between">
      <div
        v-for="benefit in benefits"
        :key="benefit.desc"
        class="flex items-center gap-2"
      >
        <img :src="benefit.image" />
        <p>{{ benefit.desc }}</p>
      </div>
    </div>
    <Connections />
    <div class="py-20 w-[90%] mx-auto grid grid-cols-2 gap-8">
      <div
        class="bg-[#F3EBFF] flex flex-col items-center justify-center rounded-3xl px-12 py-20 gap-6"
      >
        <img src="@/assets/primer/authorization.png" />
        <p class="text-center text-[#616161]">
          Smash your goals with a clear source of truth across your entire
          stack. Track and manage payments, reporting, everything—from one
          beautiful dashboard.
        </p>
        <router-link
          to="#"
          class="text-black self-center border border-black rounded-3xl py-3 px-8 explore-btn"
          >Learn more</router-link
        >
      </div>
      <div
        class="bg-[#DCFCE7] flex flex-col items-center justify-center rounded-3xl p-6 gap-6"
      >
        <img src="@/assets/primer/batches.png" />
        <p class="text-center text-[#616161]">
          Save countless hours and handle reconciliation seamlessly for all your
          payment providers. Ditch those messy spreadsheets for good, we've
          automated it all.
        </p>
        <router-link
          to="#"
          class="text-black self-center border border-black rounded-3xl py-3 px-8 explore-btn"
          >Learn more</router-link
        >
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/primer/navbar.vue";
import Hero from "@/components/primer/hero.vue";
import Automation from "@/components/primer/automation.vue";
import Payment from "@/components/primer/payments.vue";
import Features from "@/components/primer/features.vue";
import Connections from "@/components/primer/connections.vue";
import Footer from "@/components/primer/footer.vue";
import TimeImage from "@/assets/primer/time.png";
import IncreaseImage from "@/assets/primer/increase.png";
import GlobalImage from "@/assets/primer/global.png";
import ShieldImage from "@/assets/primer/shield.png";

const benefits = [
  {
    image: IncreaseImage,
    desc: "99.99% platform uptime",
  },
  {
    image: GlobalImage,
    desc: "Global coverage",
  },
  {
    image: TimeImage,
    desc: "24/7 Incident response",
  },
  {
    image: ShieldImage,
    desc: "PCI-1 & GDPR-compliant",
  },
];
</script>
