<template>
  <div class="card-flip">
    <section class="card-wrap" v-for="card in cardContent" :key="card.index">
      <h1 class="card-title">{{ card.title }}</h1>
      <div @click="onCardClick" :class="card.cardClass" :data-num="card.index">
        <img class="card img-front" src="../../assets/ryan-the-lion.jpeg" alt="" />
        <div class="card img-back">
          <h1 class="img-back-title">CARD<br />TO<br />FLIP</h1>
          <CardSlide :slides="card.slides" :cardClicked="card.cardClicked" v-if="card.cardClicked" :class="card.cardSlideHide" />
          <div v-if="card.cardClicked" :class="card.cardMoreBtn">See More Contents</div>
        </div>
      </div>
    </section>
    <div class="something"></div>
  </div>
</template>

<script>
const body = document.querySelector('body');
import example from '../../assets/IMG_4862.jpg';
import CardSlide from './CardSlide';

export default {
  name: 'CardFlip',
  components: {
    CardSlide,
  },
  data() {
    return {
      cardContent: [
        {
          index: 0,
          title: 'CARD TO FLIP',
          cardClicked: false,
          cardClass: 'img-wrap',
          cardMoreBtn: 'card-more-btn hide',
          cardSlideHide: 'card-slide-wrap hide',
          slides: [
            { src: example, index: 0 },
            { src: example, index: 1 },
            { src: example, index: 2 },
          ],
        },
        {
          index: 1,
          title: 'VUE INTER',
          cardClicked: false,
          cardClass: 'img-wrap',
          cardMoreBtn: 'card-more-btn hide',
          cardSlideHide: 'card-slide-wrap hide',
          slides: [
            { src: example, index: 0 },
            { src: example, index: 1 },
            { src: example, index: 2 },
          ],
        },
        {
          index: 2,
          title: 'PLAY WITH CARD',
          cardClicked: false,
          cardClass: 'img-wrap',
          cardMoreBtn: 'card-more-btn hide',
          cardSlideHide: 'card-slide-wrap hide',
          slides: [
            { src: example, index: 0 },
            { src: example, index: 1 },
            { src: example, index: 2 },
          ],
        },
      ],

      body: body,
      vt: document.documentElement.clientHeight,
    };
  },
  methods: {
    onCardClick(e) {
      if (e.target !== e.currentTarget.childNodes[0] && e.target !== e.currentTarget.childNodes[1]) return;
      let idx = e.target.parentNode.dataset.num;
      this.getScrollTop(e);
      if (this.cardContent[idx].cardClass === 'img-wrap') {
        this.cardContent[idx].cardClass = 'img-wrap flip non-target';
        this.body.classList.add('scroll-stop');
        setTimeout(() => {
          this.cardContent[idx].cardClass = 'img-wrap flip extend non-target';
          this.cardContent[idx].cardClicked = true;
          setTimeout(() => {
            this.cardContent[idx].cardMoreBtn = 'card-more-btn';
            this.cardContent[idx].cardSlideHide = 'card-slide-wrap';
            this.cardContent[idx].cardClass = 'img-wrap flip extend';
          }, 1000);
        }, 1000);
      } else {
        this.cardContent[idx].cardMoreBtn = 'card-more-btn hide';
        this.cardContent[idx].cardSlideHide = 'hide';
        setTimeout(() => {
          this.cardContent[idx].cardClicked = false;
          this.cardContent[idx].cardClass = 'img-wrap flip non-target';
          this.body.classList.remove('scroll-stop');
          setTimeout(() => {
            this.cardContent[idx].cardClass = 'img-wrap';
          }, 1000);
        }, 300);
      }
    },
    getScrollTop(e) {
      if (e.target.nextSibling) {
        // console.log('작은카드일때 위와의 높이 차이 : ', e.target.nextSibling.getBoundingClientRect().top);
        // console.log(e.target.nextSibling.getBoundingClientRect());
        // console.log('window.pageYOffset : ', window.pageYOffset);
        // console.log('뷰포트 높이 : ', this.vt);
        // console.log('올라가야하는 높이 : ', (this.vt - e.target.nextSibling.getBoundingClientRect().height) / 2 - e.target.nextSibling.getBoundingClientRect().top);
        let moveaa = (this.vt - e.target.nextSibling.getBoundingClientRect().height) / 2 - e.target.nextSibling.getBoundingClientRect().top;
        window.scrollBy({ top: -moveaa + 0.5, left: 0, behavior: 'smooth' });
      }
      // console.log('--------------------------------------------');
    },
  },
};
</script>

<style>
.card-flip {
  width: 100%;
  height: auto;
  background-color: #fff;
}
.card-wrap {
  position: relative;
  width: 100%;
  height: auto;
  padding: 64px 0;
  text-align: center;
}
.card-title {
  position: relative;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 32px;
  z-index: 1;
}
.img-wrap {
  position: relative;
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 40rem;
  z-index: 2;
  transition: 1s;
}

.card {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  transition: 1s;
}

.img-front {
  /* position: absolute; */
  position: relative;
  height: auto;
  backface-visibility: hidden;
  opacity: 1;
  z-index: 2;
  transform: rotateY(0deg);
}
.img-back {
  background: #000;
  position: absolute;
  /* top: 0%; */
  height: 100%;
  backface-visibility: hidden;
  z-index: 1;
  transform: rotateY(180deg);
  overflow: hidden;
  display: flex;
  align-items: center;
}

.img-wrap.flip .img-front {
  transform: rotateY(-180deg);
}
.img-wrap.flip .img-back {
  transform: rotateY(0deg);
}

.img-wrap.flip.extend .img-back {
  position: fixed;
  /* top: 0; */
  width: 100vw;
  height: 100vh;
  border-radius: 0px;
}

.img-back-title {
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: rgba(255, 255, 255, 0.4);
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  transition: 1s;
}

.img-wrap.flip.extend .img-back-title {
  font-size: 150px;
}

.card-more-btn {
  position: absolute;
  width: 200px;
  height: 60px;
  font-weight: 500;
  font-size: 16px;
  background: #fff;
  left: 50%;
  bottom: 6vh;
  transform: translateX(-50%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  opacity: 1;
}

.scroll-stop {
  overflow: hidden;
}

.non-target {
  pointer-events: none;
}

.card-slide-wrap {
  transition: 0.4s;
  opacity: 1;
}

.hide {
  opacity: 0;
}

.something {
  margin-bottom: 500px;
}
</style>
