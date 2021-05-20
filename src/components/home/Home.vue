<template>
  <router-link to="section1">
    <div class="home-box">
      Section1
    </div>
  </router-link>
  <router-link to="section2">
    <div class="home-box">
      Secion2
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style>
.home-box {
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  border-bottom: 3spx solid #eee;
}
</style>
