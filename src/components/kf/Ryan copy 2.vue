<template>
  <section class="first-wrap">
    <div class="horizon-section" :style="{ transform: translation }">
      <div class="hor-section1">
        <h1>Story</h1>
        <img :src="horRyan1" alt="" />
      </div>
      <div class="hor-section2">
        <div class="enter-wrap">
          <h2>Entertainer</h2>
          <p>
            Ryan was also loved by the character<br />
            itself, but through Ryan's various stories,<br />
            he was able to gain more love.
          </p>
          <img :src="horRyan2" alt="" />
        </div>
        <img class="horRyan3" :src="horRyan3" alt="" />
      </div>
      <div class="hor-section3">
        <figure>
          <img :src="horRyan4" alt="" />
        </figure>
      </div>
    </div>
  </section>
  <section class="second-wrap">
    <div class="ver-section1">
      <img :style="{ opacity: ryanTheLionOpacity }" :src="horRyan2" alt="" />
      <button :style="{ opacity: ryanTheLionButton }">Ryan the lion</button>
    </div>
    <h2>Ryan the lion</h2>
    <p>
      With content based on cut-toon<br />
      and short-form videos, Ryan's<br />
      daily life as well as Ryan's hidden<br />
      insider evaluation.
    </p>
    <div class="rtl-content">
      <figure>
        <img :src="rtlContent1" alt="" />
      </figure>
      <figure>
        <img :src="rtlContent2" alt="" />
      </figure>
      <figure>
        <img :src="rtlContent3" alt="" />
      </figure>
    </div>
  </section>
</template>

<script>
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
const body = document.querySelector('body');
import horRyan1 from '../../assets/hor-ryan1.png';
import horRyan2 from '../../assets/hor-ryan2.png';
import horRyan3 from '../../assets/hor-ryan3.png';
import horRyan4 from '../../assets/hor-ryan4.jpg';
import rtlContent1 from '../../assets/rtl-content1.png';
import rtlContent2 from '../../assets/rtl-content2.png';
import rtlContent3 from '../../assets/rtl-content3.png';

export default {
  name: 'Ryan',
  components: {},
  data() {
    return {
      horRyan1: horRyan1,
      horRyan2: horRyan2,
      horRyan3: horRyan3,
      horRyan4: horRyan4,
      rtlContent1: rtlContent1,
      rtlContent2: rtlContent2,
      rtlContent3: rtlContent3,
      body: body,
      vt: document.documentElement.clientHeight,
      vw: document.documentElement.clientWidth,
      secondWrapTop: '',
      scrollTimeout: null,
      offsetX: 0,
      offsetY: 0,
    };
  },
  methods: {
    handleScroll() {
      if (this.scrollTimeout) {
        window.cancelAnimationFrame(this.scrollTimeout);
        // console.log('cancelAnimationFrame');
      }

      this.scrollTimeout = window.requestAnimationFrame(() => {
        this.offsetY = window.pageYOffset;

        if (this.offsetY > 7000) {
          console.log('offsetY : ', this.offsetY, 'requestAnimationFrame');
          // console.log('this.translation : ', this.translation);
          // console.log('vt : ', this.vt);
          // console.log('vw : ', this.vw);
          // console.log('secondWrapTop : ', this.secondWrapTop);
          // console.log(this.translation);
          // console.log('tihs.ryanTheLionOpacity : ', this.ryanTheLionOpacity);
        }
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
  mounted() {
    const secondWrap = document.querySelector('.second-wrap');
    this.secondWrapTop = secondWrap.getBoundingClientRect().top;
  },
  computed: {
    translation() {
      const scroll = this.offsetY;
      let left;
      if (scroll >= 0 && scroll < this.vw * 2) {
        left = `${-scroll}px`;
      } else if (scroll >= this.vw * 2) {
        left = `${-(this.vw * 2)}px`;
      }

      return `translateX(${left})`;
    },
    ryanTheLionOpacity() {
      const scroll = this.offsetY;
      const breakPoint = this.secondWrapTop + this.vt * 0.7;
      let opacity = 1;
      if (scroll >= breakPoint && scroll < breakPoint + this.vt) {
        opacity = (breakPoint + this.vt - scroll) / this.vt;
      } else if (scroll >= breakPoint + this.vt) {
        opacity = 0;
      } else if (scroll < breakPoint) {
        opacity = 1;
      }

      return opacity;
    },

    ryanTheLionButton() {
      const scroll = this.offsetY;
      const breakPoint = this.secondWrapTop + this.vt * 0.7;
      let opacity = 0;
      if (scroll >= breakPoint && scroll < breakPoint + this.vt) {
        opacity = 1 - (breakPoint + this.vt - scroll) / this.vt;
      } else if (scroll >= breakPoint + this.vt) {
        opacity = 1;
      } else if (scroll < breakPoint) {
        opacity = 0;
      }

      return opacity;
    },
  },
};
</script>

<style>
.first-wrap {
  width: 100vw;
  height: 300vw;
  position: relative;
  z-index: 1;
}

.horizon-section {
  position: fixed;
  top: 0;
  display: flex;
  width: 300vw;
  height: 100vh;
  background: #000;
}

.hor-section1 {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.hor-section1 > h1 {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  color: #fff;
  transform: translate(-50%, 0);
  font-size: 480px;
  font-weight: 700;
}
.hor-section1 > img {
  position: absolute;
  width: 45%;
  right: -50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.hor-section2 {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.hor-section2 > .enter-wrap {
  margin-left: 40vw;
  margin-top: 4rem;
  color: #fff;
}
.hor-section2 > .enter-wrap > h2 {
  font-size: 72px;
  font-weight: 700;
}
.hor-section2 > .enter-wrap > p {
  font-size: 36px;
  font-weight: 300;
}
.hor-section2 > .enter-wrap > img {
  margin-top: 5rem;
  width: 320px;
  height: auto;
}
.hor-section2 > .horRyan3 {
  position: absolute;
  right: 6rem;
  bottom: 4rem;
  width: 160px;
}

.hor-section3 {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.hor-section3 > figure {
  width: 100vw;
  height: 100vh;
}

.hor-section3 > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.second-wrap {
  width: 100vw;
  height: 5000px;
  position: relative;
  z-index: 10;
  background: #fff;
}

.second-wrap .ver-section1 {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.second-wrap .ver-section1 > img {
  width: 400px;
  height: auto;
}

.second-wrap .ver-section1 > button {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 80px;
  background: #000;
  color: #fff;
  font-size: 24px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.second-wrap > h2 {
  position: relative;
  z-index: 4;
  font-size: 120px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60vh;
}

.second-wrap > p {
  position: relative;
  z-index: 4;
  font: 42px sans-serif;
  font-weight: 700;
  transform: translateX(10%);
  margin-bottom: 50vh;
}

.second-wrap > .rtl-content {
  position: relative;
  width: 100%;
  max-width: 1800px;
  z-index: 1;
  display: flex;
  padding: 3rem;
  margin: 0 auto;
}
.second-wrap > .rtl-content > figure {
  flex: 1;
  margin: 1rem;
}
.second-wrap > .rtl-content > figure:first-child > img {
  width: 100%;
  height: auto;
  transform: translateY(40%);
}
.second-wrap > .rtl-content > figure:nth-child(2) > img {
  width: 80%;
  height: auto;
}
.second-wrap > .rtl-content > figure:last-child > img {
  width: 100%;
  height: auto;
  transform: translateY(-20%);
}
</style>
