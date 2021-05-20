<template>
  <div>
    <Contain />
    <SecondCon />
  </div>
</template>

<script>
import Contain from './Contain';
import SecondCon from './SecondCon.vue';
export default {
  name: 'Parallax',
  components: {
    Contain,
    SecondCon,
  },
};
</script>

<style></style>
