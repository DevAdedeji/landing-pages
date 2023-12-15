<script setup>
const footerLinks = [
  {
    title: "Product",
    links: [
      "Universal Checkout",
      "Payment workflows",
      "Observability",
      "Uplift AI",
      "Apps & Integrations",
    ],
  },

  {
    title: "Why Primer",
    links: [
      "Expand to new markets",
      "Boost payment status",
      "Improve conversion rates",
      "Reduce payment frauds",
      "Recover revenue",
    ],
  },
  {
    title: "Developer",
    links: [
      "Primer Docs",
      "API Reference",
      "Payments Method Guide",
      "Servie status",
      "Community",
    ],
  },
  {
    title: "Resource",
    links: ["Blog", "Success stories", "Newsroom", "Terms", "Privacy"],
  },
  {
    title: "Careers",
    links: ["Careers"],
  },
];
</script>

<template>
  <footer class="py-10">
    <div class="w-[90%] mx-auto flex justify-between">
      <router-link to="/primer">
        <img src="@/assets/primer/logo.png" />
      </router-link>
      <div class="grid grid-cols-3 gap-10 w-4/5">
        <div v-for="(link, index) in footerLinks" :key="index">
          <p class="font-medium pb-3">{{ link.title }}</p>
          <ul class="flex flex-col gap-2">
            <li v-for="(item, i) in link.links" :key="i">
              <router-link to="#" class="text-sm">{{ item }}</router-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-medium">Stay up to date</p>
          <div class="flex items-center h-[48px]">
            <input
              type="text"
              class="h-[48px] px-2 outline-none border border-black"
              placeholder="Email address"
            />
            <button
              class="h-[48px] bg-black text-white rounded-tr-lg rounded-br-lg px-4 text-sm"
            >
              Submit
            </button>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" />
            <p class="text-sm text-[#616161]">
              I confirm that I have read Primer’s Privacy policy and agree with
              it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
