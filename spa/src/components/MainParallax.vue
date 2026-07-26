<template>
  <!-- 원본 v-layout row wrap 등가 — 거터 유지 (no-gutters 아님).
       컬럼 기본 패딩 12px이 v2 grid-list-xl의 flex 패딩과 동일하다.
       mb-0: v2 .layout은 세로 음수 마진이 없었다 (grid-list-xl은 가로 -12px만,
       첫 자식 top -12px). v3 v-row의 bottom -12px를 끄지 않으면 인용구 아래
       간격 12px이 사라진다 (top -12px은 v2 first-child 규칙과 일치라 유지) -->
  <v-row class="mb-0">
    <v-col cols="12" class="pt-0 px-0">
      <div class="parallax-container">
        <div class="parallax-box">
          <div class="parallax-title">
            <span class="block"></span>
            <h1>debugrammer<span></span></h1>
          </div>

          <div class="parallax-subtitle">
            <div class="block"></div>
            <p class="mb-0">Joonsang.com</p>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="my-3 mx-3">
      <v-row align="center" justify="center">
        <div class="text-subtitle-1" v-text="$t('index.mainParallax.quote')"></div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MainParallax'
}
</script>

<style lang="scss" scoped>
.parallax-container {
  background: #232323;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 960px) {
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    height: 300px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .parallax-box {
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .parallax-title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        width: 0;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        display: flex;
      }

      h1 {
        font-family: 'Poppins', 'Nanum Gothic', sans-serif;
        color: #fff;
        font-size: 32px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width: 0;
          height: 0;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
            forwards;
          animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;
        }
      }
    }

    .parallax-subtitle {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .block {
        width: 0;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 400;
        font-family: 'Lato', 'Nanum Gothic', sans-serif;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}

@keyframes mainBlock {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes secBlock {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes popIn {
  0% {
    width: 0;
    height: 0;
    background: #e9d856;
    border: 0 solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    height: 7px;
    bottom: 0;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0 solid #222;
    bottom: 13px;
  }
}
@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
@keyframes top {
  0% {
    opacity: 0;
    bottom: -80px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}
@keyframes icon {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(-02deg);
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}
</style>
