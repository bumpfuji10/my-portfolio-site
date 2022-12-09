<template>
  <!--header-->
  <TheHeader text="Yo's Portfolio Site" />
  <!--ルーティング-->
  <router-view></router-view>
  <!--footer-->
  <!--<TheFooter text="hogeFooter"/>--->
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>
