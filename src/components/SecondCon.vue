<template>
  <div class="Second-con">
    <h2 class="sec-title">Friends</h2>
    <div class="slide-container">
      <div class="sliders">
        <div class="slide s1">
          <img class="slide-img" src="../assets/apngtest2.png" alt="코끼리apng" />
        </div>
        <div class="slide s2">
          <img class="slide-img" src="../assets/apngtest2.png" alt="코끼리apng" />
        </div>
        <div class="slide s3">
          <img class="slide-img" src="../assets/apngtest2.png" alt="코끼리apng" />
        </div>
      </div>
      <div class="slide-button left-btn"></div>
      <div class="slide-button right-btn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondCon',

  data() {},
};
</script>

<style>
.Second-con {
  width: 100%;
  height: auto;
  padding: 0 20px;
}
.sec-title {
  font-size: 48px;
  margin-bottom: 64px;
}
.slide-container {
  width: 100%;
  position: relative;
  height: 500px;
}
.sliders {
  width: 300%;
  position: absolute;
  display: flex;
}

.slide {
  width: 30%;
  height: 500px;
  background: rgb(237, 186, 124);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  margin-bottom: 96px;
}

.slide-img {
  width: 100%;
}

.slide-button {
  width: 30px;
  height: 30px;
  background: tomato;
}

.left-btn {
  position: absolute;
  top: 50%;
  left: 0;
}
.right-btn {
  position: absolute;
  top: 50%;
  right: 0;
}
</style>
