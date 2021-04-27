<template>
  <div class="Second-con">
    <h2 class="sec-title">Friends</h2>
    <div class="slide-container">
      <splide :slides="slides" :options="options" @splide:move="onMoved">
        <splide-slide class="slide-wrap" v-for="slide in slides" :key="slide.index" :style="{ backgroundColor: slide.back }">
          <h2 class="slide-char-name">{{ slide.name }}</h2>
          <img class="slide-img" :src="slide.src" />
        </splide-slide>
      </splide>
      <div class="char-desc-wrap">
        <div class="char-desc" v-if="this.currentIdx === 0">라이언 페이지</div>
        <div class="char-desc" v-if="this.currentIdx === 1">어피치 페이지</div>
        <div class="char-desc" v-if="this.currentIdx === 2">프로도 페이지</div>
        <div class="char-desc" v-if="this.currentIdx === 3">네오 페이지</div>
        <div class="char-desc" v-if="this.currentIdx === 4">무지 페이지</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import elepant from '../assets/apngtest2.png';
import whatisthis from '../assets/apngtest1.png';

export default {
  name: 'SecondCon',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      slides: [
        { src: elepant, index: 0, name: 'ryan', back: 'rgb(240, 176, 38)' },
        { src: whatisthis, index: 1, name: 'apeach', back: 'rgb(240, 157, 179)' },
        { src: elepant, index: 2, name: 'prodo', back: 'rgb(79, 135, 238)' },
        { src: whatisthis, index: 3, name: 'neo', back: 'rgb(184, 111, 47)' },
        { src: elepant, index: 4, name: 'muzi', back: 'rgb(181, 155, 69)' },
      ],
      options: {
        type: 'loop',
        // rewind: true,
        focus: 'center',
        trimSpace: false,
        width: '100%',
        // perPage: 1.7,
        gap: '1rem',
        padding: {
          left: '2rem',
          right: '2rem',
        },
        pagination: false,
        arrows: false,
      },
      currentIdx: 0,
    };
  },
  methods: {
    onMoved(root, newIndex) {
      //   console.log('root : ', root);
      //   console.log('newIndex : ', newIndex);
      //   console.log('oldIndex : ', oldIndex);
      this.currentIdx = newIndex;
      console.log('this.currentIdx : ', this.currentIdx);
    },
  },
};
</script>

<style>
.Second-con {
  width: 100%;
  height: auto;
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

.slide-img {
  width: 100%;
  height: auto;
}
.slide-wrap {
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.slide-char-name {
  font-size: 32px;
  margin-top: 32px;
}

.char-desc-wrap {
  width: 100%;
  margin: 48px 0;
  padding: 0 20px;
  height: auto;
}

.char-desc {
  padding: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  background: rgb(201, 201, 201);
  border-radius: 30px;
}
</style>
