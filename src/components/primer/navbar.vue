<template>
  <nav
    class="w-full fixed top-0 right-0 left-0 flex items-center h-[10vh] z-[100] bg-white"
  >
    <div class="w-[90%] mx-auto flex items-center justify-between">
      <router-link to="/primer">
        <img src="@/assets/primer/logo.png" />
      </router-link>
      <ul class="flex items-center gap-6">
        <li>
          <router-link to="#" class="font-medium hover:font-semibold"
            >Products</router-link
          >
        </li>
        <li>
          <router-link to="#" class="font-medium hover:font-semibold"
            >Why primer</router-link
          >
        </li>
        <li>
          <router-link to="#" class="font-medium hover:font-semibold"
            >Developers</router-link
          >
        </li>
        <li>
          <router-link to="#" class="font-medium hover:font-semibold"
            >Company</router-link
          >
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <router-link to="#" class="font-medium hover:font-semibold"
          >Log in</router-link
        >
        <router-link to="#" class="text-white bg-black rounded-3xl py-2 px-4"
          >Contact Sales</router-link
        >
      </div>
    </div>
  </nav>
</template>
