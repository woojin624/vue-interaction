<template>
  <section class="first-wrap">
    <figure>
      <img :src="walkingRyan" :style="{ transform: scale }" alt="" />
    </figure>
    <div class="first-div">
      <h1>Ryan</h1>
      <p>The Symbol of Comfort,<br />eliable Advisor.</p>
    </div>
    <div class="second-div">
      <p class="baloon">Hello! Ryan</p>
    </div>
    <div class="third-div">
      <p class="baloon">A big,&nbsp;</p>
      <p class="baloon">blunt looking</p>
    </div>
    <div class="fourth-div">
      <p class="baloon">warm-hearted</p>
      <p class="baloon">delicate</p>
    </div>
    <div class="fifth-div">
      <p class="baloon">lion without mane</p>
    </div>
  </section>
</template>

<script>
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
const body = document.querySelector('body');
import walkingRyan from '../../assets/walkingRyan.png';

export default {
  name: 'Ryan',
  components: {},
  data() {
    return {
      walkingRyan: walkingRyan,
      body: body,
      vt: document.documentElement.clientHeight,
      vw: document.documentElement.clientWidth,
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
          // console.log('vt : ', this.vt);
          // console.log('vw : ', this.vw);
        }
        console.log(this.scale);
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
  mounted() {},
  computed: {
    scale() {
      const scroll = this.offsetY;

      let scaleInt = 1;
      let translateInt = 30;
      if (scroll >= this.vt * 0 && scroll < this.vt * 3) {
        console.log(scroll / (this.vt * 1));
        scaleInt = 1 - scroll / (this.vt * 1) / 4;
        // translateInt = 30 - (scroll / (this.vt * 4)) * 1;
        translateInt = 30;
      } else if (scroll < this.vt * 0) {
        scaleInt = 1;
        translateInt = 30;
      } else if (scroll >= this.vt * 3) {
        scaleInt = 0.25;
        translateInt = 30;
      }

      return `scale(${scaleInt}) translate(0%, ${translateInt}% )`;
    },
  },
};
</script>

<style>
.first-wrap {
  width: 100%;
  height: 600vh;
}

.first-wrap figure {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.first-wrap figure img {
  position: absolute;
  /* margin-top: 60vh; */
  top: 0%;
  /* left: 50%; */
  transform: translate(0%, 0%) scale(1);
  transform-origin: center top;
  width: 100%;
  height: auto;
}

.first-div {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.first-div > h1 {
  font-size: 200px;
  font-weight: 700;
}

.first-div > p {
  font-size: 48px;
  font-weight: 400;
}

.second-div {
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
}

.third-div {
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
}

.third-div > p:last-child {
  margin-top: 2rem;
  margin-left: 10%;
}

.fourth-div {
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
}

.fourth-div > p:last-child {
  margin-top: 2rem;
  align-self: flex-end;
}

.fifth-div {
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
}

.fifth-div > p {
  margin-top: 2rem;
  align-self: center;
}

.baloon {
  width: fit-content;
  display: inline-block;
  font-size: 72px;
  font-weight: 500;
  padding: 2rem 4rem;
  border-radius: 100px;
  background: rgb(255, 247, 0);
}
</style>
