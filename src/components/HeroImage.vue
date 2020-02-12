<template>
  <div class="heroImage"></div>
</template>

<script>
export default {
  nema: "HeroImage"
};
</script>

<style>
.heroImage {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url("../img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 100%;
}
.heroImage::after {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
