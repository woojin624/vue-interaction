<template>
  <nav class="gnb">
    <ul class="nav-list">
      <li>burger</li>
      <li>MACAO FRIENDS</li>
      <li>lang</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.gnb {
  position: sticky;
  top: 0;
  width: 100%;
  height: 54px;
  background: rgba(238, 238, 238, 0.173);
  z-index: 9999;
}

.nav-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
