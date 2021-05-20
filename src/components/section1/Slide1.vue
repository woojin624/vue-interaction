<template>
  <div>
    <HorizonScroll />
    <CardFlip />
  </div>
</template>

<script>
import CardFlip from './CardFlip.vue';
import HorizonScroll from './HorizonScroll';

export default {
  name: 'Slide1',
  components: {
    HorizonScroll,
    CardFlip,
  },
};
</script>

<style></style>
