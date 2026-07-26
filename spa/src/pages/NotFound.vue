<template>
  <div id="page-not-found" class="fill-height">
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="3" class="mr-3">
          <v-img src="/error/404.svg" alt="404"></v-img>
        </v-col>
        <div class="text-center">
          <h1>404</h1>
          <h2 class="my-3 text-h5">Sorry, page not found.</h2>
          <div>
            <v-btn color="accent" to="/">Go Home</v-btn>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/*
 * 구 layouts/error.vue 등가 — SPA에서는 매칭되지 않는 라우트(404)만 처리한다.
 * (403·500 SVG는 public/error/에 보존 — 서버 에러 페이지는 서버 소관)
 */
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
#page-not-found {
  min-height: 100vh;
  display: flex;
}

h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: rgba(255, 255, 255, 0.3) 1px 1px,
    rgba(255, 255, 255, 0.2) 2px 2px, rgba(255, 255, 255, 0.3) 3px 3px;
}
</style>
