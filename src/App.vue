<template>
  <div class="app-container">
    <perelandra-page />
    <p class="test-p">
      Can you see me yet?
    </p>
    <span style="color: yellow; background-color: red">How bout now?</span>
  </div>
</template>

<script>
import PerelandraPage from './components/molecules/PerelandraPage.vue';

export default {
  name: 'App',
  components: {
    PerelandraPage,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 3rem;
  background-color: #fff5e6;
  height: 100vh;
}
.h1-class {
  background-color: goldenrod;
  border: 1px solid black;
  color: green;
}
</style>
