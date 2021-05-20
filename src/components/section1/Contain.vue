<template>
  <div class="main-container">
    <div class="main">
      <div class="section1-contain">
        <img class="contain-main" :style="{ transform: scale }" src="../../assets/ryan1.png" alt="" />
        <img :class="imgHide" src="../../assets/kakaofriends.png" alt="" />
        <div class="text-wrap">
          <div v-for="msg in msgs" :key="msg.id" class="text-section">
            <p v-if="msg.text1" class="desc" :style="{ transform: translation[msg.id - 1], opacity: opacity[msg.id - 1] }">{{ msg.text1 }}</p>
            <p v-if="msg.text2" class="desc" :style="{ transform: translation[msg.id - 1], opacity: opacity[msg.id - 1] }">{{ msg.text2 }}</p>
            <p v-if="msg.text3" class="desc2" :style="{ transform: translation[msg.id - 1], opacity: opacity[msg.id - 1] }">{{ msg.text3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const msgs = [
  {
    id: 1,
    text1: 'Vue',
    text2: 'Interacton',
  },
  {
    id: 2,
    text1: 'Test',
    text2: 'Demo',
  },
  {
    id: 3,
    text1: 'Parallax',
  },
  {
    id: 4,
    text1: 'Scroll',
  },
  {
    id: 5,
    text3: 'Interacton',
  },
];

export default {
  name: 'Contain',

  data() {
    return {
      msgs,
      vt: document.documentElement.clientHeight,
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
        console.log('offsetY : ', this.offsetY, 'requestAnimationFrame');
        // console.log('this.translation : ', this.translation);
        // console.log('vt : ', this.vt);
      });
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
  computed: {
    translation() {
      const translate = (this.offsetY / this.vt) * 200;
      let first, second, third, fourth, fifth;
      let position = [first, second, third, fourth, fifth];
      for (let i = 0; i < position.length; i++) {
        if (this.offsetY > this.vt * i && this.offsetY <= this.vt * (i + 1)) {
          position[i] = `translateY(${100 - (translate - i * 200)}%)`;
        } else if (this.offsetY <= this.vt * i) {
          position[i] = `translateY(100%)`;
        } else {
          position[i] = `translateY(-100%)`;
        }
      }
      return position;
    },
    opacity() {
      const scroll = this.offsetY / this.vt;
      let first, second, third, fourth, fifth;
      //   for (let i = 0; i < opacity.length; i++) {
      //     if (this.offsetY > this.vt * i && this.offsetY < this.vt * (i + 1)) {
      //       opacity[i] = scroll < i + 0.5 ? 0 + (scroll - i) * 2 : 1 - (scroll * 2 - (i * 2 + 1));
      //     } else {
      //       opacity[i] = 0;
      //     }
      //   }

      if (this.offsetY > this.vt * 0 && this.offsetY <= this.vt * 1) {
        first = scroll < 0.5 ? 1 : 1 - (scroll * 2 - 1);
      } else if (this.offsetY === this.vt * 0) {
        first = 1;
      } else {
        first = 0;
      }
      if (this.offsetY > this.vt * 1 && this.offsetY <= this.vt * 2) {
        second = scroll < 1.5 ? 0 + (scroll - 1) * 2 : 1 - (scroll * 2 - 3);
      } else {
        second = 0;
      }
      if (this.offsetY > this.vt * 2 && this.offsetY <= this.vt * 3) {
        third = scroll < 2.5 ? 0 + (scroll - 2) * 2 : 1 - (scroll * 2 - 5);
      } else {
        third = 0;
      }
      if (this.offsetY > this.vt * 3 && this.offsetY <= this.vt * 4) {
        fourth = scroll < 3.5 ? 0 + (scroll - 3) * 2 : 1 - (scroll * 2 - 7);
      } else {
        fourth = 0;
      }
      if (this.offsetY > this.vt * 4 && this.offsetY <= this.vt * 5) {
        fifth = scroll < 4.5 ? 0 + (scroll - 4) * 2 : 1;
      } else if (this.offsetY > this.vt * 5) {
        fifth = 1;
      } else {
        fifth = 0;
      }
      let opacity = [first, second, third, fourth, fifth];

      return opacity;
    },
    scale() {
      //   const scroll = this.offsetY / this.vt;
      let scaleInt = 15;
      let translateInt = 0;
      if (this.offsetY >= this.vt * 0 && this.offsetY < this.vt * 4) {
        scaleInt = 15 - (this.offsetY / (this.vt * 4)) * 14;
        translateInt = 0 + (this.offsetY / (this.vt * 4)) * 14;
      } else {
        scaleInt = 1;
        translateInt = 14;
      }

      //   const scale = `scale(${scaleInt}) translateY(30%)`;
      //   console.log('scale: ', scale);
      return `scale(${scaleInt}) translateY(${translateInt + 27}% )`;
    },
    imgHide() {
      let imgHide;
      if (this.offsetY < this.vt * 4.3) {
        imgHide = 'img-main img-hide';
      } else {
        imgHide = 'img-main';
      }

      return imgHide;
    },
  },
};
</script>

<style>
.main-container {
  width: 100%;
  height: auto;
  position: relative;
}
.main {
  width: 100%;
  height: 600vh;
}
.text-section {
  width: 100%;
  height: 100vh;
}

.section1-contain {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.contain-main {
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2;
}
.img-main {
  position: absolute;
  transform: translateY(32%) scale(1);
  width: 100%;
  height: auto;
  transition: 0.2s ease-in;
  opacity: 1;
}
.img-hide {
  opacity: 0;
  transform: translateY(38%) scale(0.7);
}
.text-wrap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
}
.text-section {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30vh;
}
.desc {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
.desc2 {
  text-align: center;
  color: white;
  background: #000;
  padding: 10px 16px 6px 16px;
  border-radius: 28px;

  font-size: 34px;
  font-weight: 700;
}

.content-container {
  margin: 60px 0;
  padding: 20px;
}
.content-container > h3 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
}
.content-container > p {
  line-height: 1.3;
  font-size: 22px;
  margin-bottom: 48px;
}
.content-card {
  width: 100%;
}
</style>
