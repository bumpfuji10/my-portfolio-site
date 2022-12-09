<template>
  <header class="sticky top-0">

    <nav class="flex items-center justify-between flex-wrap bg-green-300　bg-opacity-50 p-4">

      <div class="flex items-center flex-shrink-0 text-black hover:text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">
          <router-link :to="{ path: '/'}">{{ text }}</router-link>
        </span>
      </div>

      <div class="w-full block flex-row-reverse lg:flex lg:items-center lg:w-auto">
        <div class="text-xl lg:flex-grow">

          <button class="block mt-2 lg:inline-block lg:mt-0 text-black-200  hover:text-white hover:border-white mr-4 ">
            <router-link :to="{ path: '/'}">Home</router-link>
          </button>

          <button class="block mt-2 lg:inline-block lg:mt-0 text-black-200  hover:text-white hover:border-white mr-4 ">
            <router-link :to="{ path: '/about'}">About</router-link>
          </button>

          <button class="block mt-2 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:border-white mr-4">
            <router-link :to="{ path: '/skill'}">Skill</router-link>
          </button>

          <button class="block mt-2 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:border-white mr-4">
            <router-link :to="{ path: '/works'}">Works</router-link>
          </button>

        </div>

      </div>

    </nav>

  </header>
</template>

<script>
  export default {
    name: 'TheHeader',
    props: {
      text: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style>

</style>
