<template>
  <footer>
    {{ text }}
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
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
