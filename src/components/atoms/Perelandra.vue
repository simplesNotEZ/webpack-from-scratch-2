<template>
  <div data-test="img-div">
    <img class="island-girl-pic" src="../../images/perelandra.jpg" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line quotes
  name: "Perelandra",
};
</script>

<style lang="scss" scoped>
[data-test="img-div"] {
  display: flex;
  justify-content: center;
}
.island-girl-pic {
  height: 30rem;
  width: 30rem;
}
</style>
