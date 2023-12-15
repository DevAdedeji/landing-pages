<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  gsap.to(".explore-btn", {
    y: 10,
    duration: 0.5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });
});
</script>

<template>
  <div
    class="w-[90%] mx-auto bg-[#FAFAFA] rounded-3xl p-6 my-10 flex flex-col gap-6"
  >
    <p class="text-3xl w-2/3">
      Unlimited apps and integrations to grow your payment and commerce stack
    </p>
    <div class="flex items-center gap-4">
      <img
        src="@/assets/primer/heroIcon1.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img
        src="@/assets/primer/heroIcon2.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img
        src="@/assets/primer/heroIcon3.png"
        class="w-[62px] h-[62px] hero-icon"
      />
      <img
        src="@/assets/primer/heroIcon4.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img
        src="@/assets/primer/heroIcon5.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img
        src="@/assets/primer/heroIcon6.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img
        src="@/assets/primer/heroIcon7.png"
        class="w-[62px] h-[62px] hero-icon"
      />

      <img src="@/assets/primer/heroIcon8.png" class="w-[62px] h-[62px]" />

      <img
        src="@/assets/primer/heroIcon9.png"
        class="w-[62px] h-[62px] hero-icon"
      />
      <img src="@/assets/primer/heroIcon10.png" class="w-[64px] h-[64px]" />
      <img
        src="@/assets/primer/heroIcon11.png"
        class="w-[62px] h-[62px] hero-icon"
      />
    </div>
    <router-link
      to="#"
      class="text-black self-start border border-black rounded-3xl py-3 px-4 explore-btn"
      >Explore connections</router-link
    >
  </div>
</template>
