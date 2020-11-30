<template>
  <div data-test="perelandra-page-container">
    <title-card />
    <perelandra />
  </div>
</template>

<script>
import TitleCard from '../atoms/TitleCard.vue';
import Perelandra from '../atoms/Perelandra.vue';

export default {
  name: 'PerelandraPage',
  components: {
    TitleCard,
    Perelandra,
  },
};
</script>
