<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const menus = ref([
  "Ochestrate Payment",
  "Streamline shipping % returns",
  "Build customer loyalty",
  "Manage your marketplace",
  "Increase operational efficiency",
]);

const selectedMenu = ref(menus.value[0]);

const selectMenu = (menu) => {
  selectedMenu.value = menu;
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const payImageAnimation = gsap.from(".pay_image", {
    x: -300,
    opacity: 0,
    duration: 0.6,
    paused: true,
  });
  const testimonialAnimation = gsap.from(".testimonial", {
    x: 300,
    opacity: 0,
    duration: 0.6,
    paused: true,
  });
  ScrollTrigger.create({
    trigger: "#features",
    start: "top 30%",
    onEnter: () => {
      payImageAnimation.play();
      testimonialAnimation.play();
    },
  });
  console.log(ScrollTrigger);
});
</script>

<template>
  <div id="features" class="w-[90%] mx-auto flex flex-col gap-5">
    <div class="w-full flex items-center justify-center gap-6">
      <button
        v-for="menu in menus"
        :key="menu"
        class="text-[#959595] w-[224px] h-[100px]"
        :class="menu === selectedMenu ? 'border-b-4 border-[#FF8C78]' : ''"
        @click="selectMenu(menu)"
      >
        {{ menu }}
      </button>
    </div>
    <div
      class="rounded-3xl bg-[#EEF0FF] flex flex-col items-center justify-center gap-10 px-6 py-10"
    >
      <div class="pay_image">
        <img src="@/assets/primer/pay.png" class="w-[489px] h-[310px]" />
      </div>

      <div class="flex items-center gap-4 testimonial">
        <div
          class="border border-[#E3E3E3] rounded-xl p-6 w-[500px] h-[258px] flex flex-col justify-between"
        >
          <div>
            <p>@AndrewMiles</p>
            <span class="text-[#959595] text-sm"
              >Head of Alliance & Partnerships</span
            >
          </div>
          <p class="text-[#1B1A1A]">
            With <span class="text-[#FF8C78]">@Primer</span>, we can have a
            different workflow for each market. This level of flexibility means
            the world, especially to our multinational customers 🛴🔥
          </p>
        </div>
        <img src="@/assets/primer/joyride.png" class="w-[248px] h-[258px]" />
      </div>
    </div>
  </div>
</template>
