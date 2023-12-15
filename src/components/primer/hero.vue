<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";

const rotateElement = () => {
  gsap.fromTo(
    ".hero-icon",
    {
      rotation: 0,
    },
    {
      rotation: 360,
      duration: 1,
    }
  );
};

onMounted(() => {
  gsap.from(".hero-big-text", 1, {
    delay: 0.5,
    opacity: 0,
    y: -800,
    ease: "Expo.easeInOut",
  });
  gsap.from(".hero-small-text", 1, {
    delay: 0.8,
    opacity: 0,
    x: -800,
    ease: "Expo.easeInOut",
  });
  gsap.from(".hero-action-button", 1, {
    delay: 1,
    opacity: 0,
    y: 800,
    ease: "Expo.easeInOut",
    onComplete: function () {
      gsap.to(".hero-action-button", {
        y: 10,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
  });
  gsap.from(".hero-icon", {
    opacity: 0,
    ease: "Power3.easeInOut",
    stagger: 0.08,
    duration: 1,
  });
});
</script>

<template>
  <section
    class="h-[80vh] relative flex items-center justify-center overflow-hidden mt-[10vh]"
  >
    <div class="flex flex-col gap-10 w-1/2 mx-auto z-50">
      <h2 class="text-6xl hero-big-text text-center">
        Build brilliant commerce & payment experiences
      </h2>
      <p class="text-center text-[#616161] text-lg hero-small-text">
        Connect your favorite payment and commerce services, create beautiful
        customer journeys and expand into new markets fast—with one unified
        infrastructure.
      </p>
      <router-link
        to="#"
        class="text-white bg-black rounded-3xl py-3 px-4 self-center hero-action-button"
        >Talk to our team</router-link
      >
    </div>
    <div class="absolute left-16 bottom-0">
      <img
        src="@/assets/primer/heroIcon1.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute right-40 bottom-36">
      <img
        src="@/assets/primer/heroIcon2.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute left-10 bottom-24">
      <img
        src="@/assets/primer/heroIcon3.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute left-48 top-24">
      <img
        src="@/assets/primer/heroIcon4.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute left-32 top-34">
      <img
        src="@/assets/primer/heroIcon5.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute left-10 top-16">
      <img
        src="@/assets/primer/heroIcon6.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute right-36 top-44">
      <img
        src="@/assets/primer/heroIcon7.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute right-0 top-36">
      <img src="@/assets/primer/heroIcon8.png" class="w-[80px] h-[80px]" />
    </div>
    <div class="absolute right-0 bottom-40">
      <img
        src="@/assets/primer/heroIcon9.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
    <div class="absolute left-0 top-40">
      <img src="@/assets/primer/heroIcon10.png" class="w-[64px] h-[64px]" />
    </div>
    <div class="absolute left-52 bottom-20">
      <img
        src="@/assets/primer/heroIcon11.png"
        class="w-[80px] h-[80px] hero-icon"
        @mouseenter="rotateElement"
      />
    </div>
  </section>
</template>
