<template>
  <div class="home">
    <Contain />
    <SecondCon />
  </div>
</template>

<script>
import Contain from './components/Contain';
import SecondCon from './components/SecondCon.vue';

export default {
  name: 'App',
  components: {
    Contain,
    SecondCon,
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

.home {
  width: 100%;
  height: auto;
}

.home-top {
  width: 100%;
  height: 30px;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
