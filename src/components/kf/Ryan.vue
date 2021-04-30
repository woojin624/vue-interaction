<template>
  <section class="card-wrap">
    <h1 class="card-title">RYAN THE<br />LION</h1>
    <div @click="onCardClick" :class="cardClass">
      <img class="card img-front" src="../../assets/ryan-the-lion.jpeg" alt="" />
      <div class="card img-back">
        <h1 class="img-back-title">RYAN<br />THE<br />LION</h1>
      </div>
    </div>
  </section>
  <section class="card-wrap">
    <h1 class="card-title">RYAN THE<br />LION</h1>
    <div class="img-wrap">
      <img class="card img-front" src="../../assets/ryan-the-lion.jpeg" alt="" />
      <div class="card img-back">
        <h1 class="img-back-title">RYAN<br />THE<br />LION</h1>
      </div>
    </div>
  </section>
</template>

<script>
// $('.window').animate( { scrollTop : $(selector).offset().top }, 500 );
// window.scrollTo()
export default {
  name: 'Ryan',
  data() {
    return {
      cardClass: 'img-wrap',
      vt: document.documentElement.clientHeight,
    };
  },
  methods: {
    onCardClick(e) {
      this.getScrollTop(e);
      if (this.cardClass === 'img-wrap') {
        this.cardClass = 'img-wrap flip';
        setTimeout(() => {
          this.cardClass = 'img-wrap flip extend';
        }, 1000);
      } else {
        this.cardClass = 'img-wrap flip';
        setTimeout(() => {
          this.cardClass = 'img-wrap';
        }, 1000);
      }
    },
    getScrollTop(e) {
      if (e.target.nextSibling) {
        console.log(e.target.nextSibling.getBoundingClientRect().top);
        console.log(e.target.nextSibling.getBoundingClientRect());
        console.log('window.pageYOffset : ', window.pageYOffset);
        console.log(this.vt);
        console.log((this.vt - e.target.nextSibling.getBoundingClientRect().height) / 2 - e.target.nextSibling.getBoundingClientRect().top);
        let moveaa = (this.vt - e.target.nextSibling.getBoundingClientRect().height) / 2 - e.target.nextSibling.getBoundingClientRect().top;
        window.scrollTo({ top: moveaa, left: 0, behavior: 'smooth' });
      } else {
        console.log(e.target.getBoundingClientRect().top);
      }
    },
  },
};
</script>

<style>
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
  line-height: 1.4;
  letter-spacing: 0.1rem;
  transition: 1s;
}

.img-wrap.flip.extend .img-back-title {
  font-size: 150px;
}
</style>
