<template>
  <v-col cols="12" class="no-padding no-gutters">
    <v-container class="hero" fluid>
      <v-layout column justify-center align-center>
        <div class="welcome">
          Welcome to Voxel
        </div>
        <div class="sub-text">
          Discover our wide range of products
        </div>
      </v-layout>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 380px;
  padding: 0;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("assets/bg-hero.png");
  background-position: center;
  background-size: cover;
  filter: grayscale(100%) contrast(0.2) brightness(190%);
  opacity: 0.5;
}

.welcome {
  width: 289px;
  height: 41px;
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  color: #1A1A1A;
  text-align: center;
  z-index: 1;
}

.sub-text {
  z-index: 1;
  color: rgba(26, 26, 26, 0.5);
}
</style>
