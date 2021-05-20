<template>
  <div class="card-content-container">
    <splide :slides="slides" :options="options">
      <splide-slide class="card-slide-wrap" v-for="slide in slides" :key="slide.index">
        <img class="card-slide-img" :src="slide.src" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'CardSlide',
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    slides: Array,
    cardClicked: Boolean,
  },
  data() {
    return {
      options: {
        // type: 'loop',
        rewind: false,
        focus: 'center',
        trimSpace: false,
        width: '100%',
        // perPage: 1.2,
        gap: '1.5rem',
        padding: {
          left: '3rem',
          right: '3rem',
        },
        pagination: false,
        arrows: false,
      },
    };
  },
};
</script>

<style>
.card-content-container {
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: auto;
  display: flex;
  align-items: center;
}

.card-content-container * {
  width: 100%;
}

.card-slide-img {
  width: 100%;
  height: auto;
}
.card-slide-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
